using Itix.Application.Service.Excecao;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Itix.Configure.Middleware
{
    public class GlobalExceptionHandlerMiddleware : IMiddleware
    {
        private readonly ExcecaoService _excecaoService;

        public GlobalExceptionHandlerMiddleware(ExcecaoService excecaoService)
        {
            _excecaoService = excecaoService;
        }

        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                await next(context);
            }
            catch (Exception ex)
            {
                await GlobalExceptionHandlerAsync(context, ex);
            }
        }

        private async Task GlobalExceptionHandlerAsync(HttpContext httpContext, Exception ex)
        {

            var retorno = _excecaoService.TratarRetorno(ex);

            var jsonConfig = new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };

            ConfiguraResponse(httpContext);

            if (retorno != null)
                await httpContext.Response.WriteAsync(JsonConvert.SerializeObject(retorno, jsonConfig));

        }

        private void ConfiguraResponse(HttpContext httpContext)
        {
            try
            {
                httpContext.Response.ContentType = "application/json";
                httpContext.Response.StatusCode = (int)HttpStatusCode.OK;
            }
            catch { }
        }
    }
}

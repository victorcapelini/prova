using Itix.Utilities.Exception;
using Itix.Utilities.ViewModel.Result;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;

namespace Itix.Application.Service.Excecao
{
    public partial class ExcecaoService
    {
        public ResultViewModel TratarRetorno(Exception exception)
        {
            var mensagemRetorno = exception.Message;
            var tituloRetorno = "Informação";
            var code = HttpStatusCode.OK;

            if (!(exception is CoreException))
            {
                code = HttpStatusCode.InternalServerError;
                mensagemRetorno = "Ops, algo deu errado. Tente novamente em alguns segundos.";
            }

            return new ResultViewModel(false, null, mensagemRetorno, code, tituloRetorno);
        }
    }
}

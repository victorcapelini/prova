using Microsoft.Extensions.DependencyInjection;
using Itix.Persistence.Context;
using Itix.Application.Service.Consulta;
using Itix.Persistense.Repositories;
using Itix.Application.Service.Excecao;
using Itix.Configure.Middleware;

namespace Itix.Configure.Extensions
{
    public static class ConfigureServiceCollectionExtensions
    {
        public static void ConfigureServices(this IServiceCollection services)
        {
            services.AddTransient<ApplicationContext>();

            services.AddTransient<ConsultaService>();
            services.AddTransient<ExcecaoService>();

            services.AddTransient<ConsultaRepository>();

            services.AddTransient<GlobalExceptionHandlerMiddleware>();
        }
    }
}

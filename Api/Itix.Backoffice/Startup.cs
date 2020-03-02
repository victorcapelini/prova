using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Itix.Configure.Extensions;
using Itix.Persistence.Context;
using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using Itix.Configure.Middleware;

namespace Itix.Backoffice
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                                        .AllowAnyMethod()
                                        .AllowAnyHeader());
            });

            services.ConfigureServices();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Prova Itix", Version = "v1" });
                c.ResolveConflictingActions(apiDescriptions => apiDescriptions.First());
            });

            services.AddTransient<GlobalExceptionHandlerMiddleware>();
            
            services.AddDbContext<ApplicationContext>(options =>
                    options.UseSqlServer(Configuration.GetConnectionString("Default"),
                        b => b.MigrationsAssembly("Itix.Backoffice"))
                );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IServiceProvider serviceProvider)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseCors("CorsPolicy");
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Prova Itix");
                    c.RoutePrefix = "api-docs";
                });
            }

            app.UseHttpsRedirection();

            app.UseMiddleware<GlobalExceptionHandlerMiddleware>();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            serviceProvider.GetService<ApplicationContext>().Database.Migrate();
        }
    }
}

using Itix.Application.Service.Consulta;
using Microsoft.AspNetCore.Mvc;

namespace Itix.Backoffice.Controllers.Consulta
{
    [Route("api/[controller]")]
    [ApiController]
    public partial class ConsultaController : BaseController
    {
        private readonly ConsultaService _consultaService;

        public ConsultaController(ConsultaService consultaService)
        {
            _consultaService = consultaService;
        }
    }
}
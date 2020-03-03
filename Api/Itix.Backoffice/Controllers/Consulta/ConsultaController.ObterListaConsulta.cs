using Itix.Utilities.ViewModel;
using Itix.Utilities.ViewModel.Consulta;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Itix.Backoffice.Controllers.Consulta
{
    public partial class ConsultaController
    {
        [HttpGet]
        [Route("ObterListaConsulta")]
        public IActionResult ObterListaConsulta([FromQuery]BaseViewModel param)
        {
            return CustomOk(_consultaService.ObterListaConsulta(param));
        }
    }
}
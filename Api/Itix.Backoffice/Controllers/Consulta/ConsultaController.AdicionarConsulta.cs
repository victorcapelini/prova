using Itix.Utilities.ViewModel.Consulta;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Itix.Backoffice.Controllers.Consulta
{
    public partial class ConsultaController
    {
        [HttpPost]
        [Route("AdicionarConsulta")]
        public IActionResult AdicionarConsulta([FromBody]ConsultaViewModel consulta)
        {
            return CustomOk(_consultaService.AdicionarConsulta(consulta));
        }
    }
}
using Itix.Utilities.ViewModel;
using Itix.Utilities.ViewModel.Consulta;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Itix.Backoffice.Controllers.Consulta
{
    public partial class ConsultaController
    {
        [HttpPut]
        [Route("EditarConsulta")]
        public IActionResult EditarConsulta([FromBody]ConsultaViewModel consulta)
        {
            return CustomOk(_consultaService.EditarConsulta(consulta));
        }
    }
}
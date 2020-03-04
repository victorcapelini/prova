using Itix.Utilities.ViewModel;
using Itix.Utilities.ViewModel.Consulta;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Itix.Backoffice.Controllers.Consulta
{
    public partial class ConsultaController
    {
        [HttpDelete]
        [Route("ApagarConsulta/{id}")]
        public IActionResult ApagarConsulta(int id)
        {
            return CustomOk(_consultaService.ApagarConsulta(id));
        }
    }
}
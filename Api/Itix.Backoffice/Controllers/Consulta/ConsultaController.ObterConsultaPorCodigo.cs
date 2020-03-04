using Itix.Utilities.ViewModel;
using Itix.Utilities.ViewModel.Consulta;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Itix.Backoffice.Controllers.Consulta
{
    public partial class ConsultaController
    {
        [HttpGet]
        [Route("ObterConsultaPorCodigo/{id}")]
        public IActionResult ObterConsultaPorCodigo(int id)
        {
            return CustomOk(_consultaService.ObterConsultaPorCodigo(id));
        }
    }
}
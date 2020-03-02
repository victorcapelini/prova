using Itix.Utilities.ViewModel.Result;
using Microsoft.AspNetCore.Mvc;

namespace Itix.Backoffice.Controllers
{
    public class BaseController : ControllerBase
    {
        [ApiExplorerSettings(IgnoreApi = true)]
        public virtual IActionResult CustomOk(object _data = null, bool _success = true, string message = null)
        {
            return Ok(new ResultViewModel(_success, _data, message));
        }
    }
}
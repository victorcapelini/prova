using Itix.Utilities.Exception;
using Itix.Utilities.ViewModel;
using Itix.Utilities.ViewModel.Consulta;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;


namespace Itix.Application.Service.Consulta
{
    public partial class ConsultaService
    {
        public object ApagarConsulta(int codigo)
        {
            return _consultaRepository.Remove(codigo);
        }
    }
}

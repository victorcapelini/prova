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
        public object ObterListaConsulta(BaseViewModel param)
        {
            var (count, dados) = _consultaRepository.ObterLista(param);

            return new
            {
                quantidade = count,
                dados
            };
        }
    }
}

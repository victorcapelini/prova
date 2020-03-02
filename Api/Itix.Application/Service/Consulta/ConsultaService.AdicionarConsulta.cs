using Itix.Utilities.Exception;
using Itix.Utilities.ViewModel.Consulta;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;


namespace Itix.Application.Service.Consulta
{
    public partial class ConsultaService
    {
        public async Task<object> AdicionarConsulta(ConsultaViewModel param)
        {
            if ( _context.Consulta.Any(t => (t.Inicio >= param.Inicio && t.Inicio < param.Fim)
                                            || (t.Fim > param.Inicio && t.Fim <= param.Fim)
                                            || (t.Inicio >= param.Inicio && t.Fim <= param.Fim)
                                            && !t.DataDesativacao.HasValue))
                throw new CoreException("Já existe consulta neste horário");

            if (param.Fim <= param.Inicio)
                throw new CoreException("Horário final anterior a horário inicial");

            var consulta = new Itix.Persistence.Entity.Consulta(param.Paciente, param.DataNascimentoPaciente, param.Inicio, param.Fim, param.Observacoes);

            _consultaRepository.Adiciona(consulta);

            return consulta;
        }
    }
}

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
        public object AdicionarConsulta(ConsultaViewModel param)
        {
            if (param.Fim <= param.Inicio)
                throw new CoreException("Horário final anterior a horário inicial");

            if (_consultaRepository.VerificaConsultaConflitante(param))
                throw new CoreException("Já existe consulta neste horário");

            var consulta = new Itix.Persistence.Entity.Consulta(param.Paciente, param.DataNascimentoPaciente, param.Inicio, param.Fim, param.Observacoes);

            _consultaRepository.Adiciona(consulta);

            return consulta;
        }
    }
}

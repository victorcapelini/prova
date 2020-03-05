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
        public object EditarConsulta(ConsultaViewModel param)
        {
            if (param.Fim <= param.Inicio)
                throw new CoreException("Horário final anterior a horário inicial");

            var consulta = _consultaRepository.Obter(param.Id);

            consulta.Inicio = param.Inicio;
            consulta.Fim = param.Fim;
            consulta.Observacoes = param.Observacoes;
            consulta.Paciente = param.Paciente;
            consulta.DataNascimentoPaciente = param.DataNascimentoPaciente;

            _consultaRepository.Edita(consulta);

            return consulta;
        }
    }
}

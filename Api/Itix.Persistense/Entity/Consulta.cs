using Itix.Persistence.Entity.Base;
using System;

namespace Itix.Persistence.Entity
{
    public class Consulta : Persistir
    {
        public Consulta(string paciente, DateTime dataNascimentoPaciente, DateTime inicio, DateTime fim, string observacoes):base()
        {
            Paciente = paciente;
            DataNascimentoPaciente = dataNascimentoPaciente;
            Inicio = inicio;
            Fim = fim;
            Observacoes = observacoes;
        }

        public string Paciente { get; set; }
        public DateTime DataNascimentoPaciente { get; set; }
        public DateTime Inicio { get; set; }
        public DateTime Fim { get; set; }
        public string Observacoes { get; set; }
    }
}

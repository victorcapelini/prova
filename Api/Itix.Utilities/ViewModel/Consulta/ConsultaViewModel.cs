using System;
using System.Collections.Generic;
using System.Text;

namespace Itix.Utilities.ViewModel.Consulta
{
    public class ConsultaViewModel:BaseViewModel
    {
        public int Id { get; set; }
        public string Paciente { get; set; }
        public DateTime DataNascimentoPaciente { get; set; }
        public DateTime Inicio { get; set; }
        public DateTime Fim { get; set; }
        public string Observacoes { get; set; }
    }
}

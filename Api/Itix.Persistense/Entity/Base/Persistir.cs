using System;
using System.Collections.Generic;
using System.Text;

namespace Itix.Persistence.Entity.Base
{
    public abstract class Persistir
    {
        protected Persistir()
        {
            DataRegistro = DateTime.Now;
        }

        public int Id { get; set; }
        public DateTime DataRegistro { get; set; }
        public DateTime? DataDesativacao { get; set; }
    }
}

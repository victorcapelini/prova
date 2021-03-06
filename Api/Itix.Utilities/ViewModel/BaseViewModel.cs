﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Itix.Utilities.ViewModel
{
    public class BaseViewModel
    {
        public BaseViewModel()
        {
            this.database = DateTime.Now;
        }

        public string descricao { get; set; }

        public int pageSize { get; set; }

        public int pageNumber { get; set; }

        public bool ativo { get; set; }

        public int? codigoEmpresa { get; set; }

        public DateTime? database { get; set; }
    }
}

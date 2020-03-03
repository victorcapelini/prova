using Itix.Persistence.Context;
using Itix.Persistence.Entity;
using Itix.Utilities.ViewModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Itix.Persistense.Repositories
{
    public class ConsultaRepository : BaseRepository<Consulta>
    {
        public ConsultaRepository(ApplicationContext contexto) : base(contexto)
        {
        }

        public override Consulta Adiciona(Consulta item)
        {
            _context.Add(item);
            _context.SaveChanges();
            return item;
        }

        public override Consulta Obter(int codigo)
        {
            return _context.Consulta.Find(codigo);
        }

        public override (int, List<Consulta>) ObterLista(BaseViewModel param)
        {
            var query = _context.Consulta.Where(t => t.Inicio >= param.database && !t.DataDesativacao.HasValue);

            if (!string.IsNullOrEmpty(param.descricao))
                query = query.Where(t => t.Observacoes.Contains(param.descricao) || t.Paciente.Contains(param.descricao));

            var quantidade = query.Count();

            var lista = query.Skip(param.pageSize * param.pageNumber)
                       .OrderBy(t => t.Inicio)
                       .Take(param.pageSize)
                       .ToList();

            return (quantidade, lista);

        }


        public override Consulta Remove(int codigo)
        {
            var item = _context.Consulta.Find(codigo);
            item.DataDesativacao = DateTime.Now;
            _context.Update(item);
            _context.SaveChanges();
            return item;
        }
    }
}

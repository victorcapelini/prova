using Itix.Persistence.Context;
using Itix.Persistence.Entity;
using Itix.Utilities.ViewModel;
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

        public override List<Consulta> ObterLista(BaseViewModel param)
        {
            return _context.Consulta
                        .Where(t => t.Observacoes.Contains(param.descricao))
                        .Skip(param.pageSize * param.pageNumber)
                        .Take(param.pageSize)
                        .ToList();
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

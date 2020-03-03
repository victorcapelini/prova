using Itix.Persistence.Context;
using Itix.Persistence.Entity.Base;
using Itix.Utilities.ViewModel;
using System;
using System.Collections.Generic;
using System.Text;


namespace Itix.Persistense.Repositories
{
    public abstract class BaseRepository<T>
    {
        protected readonly ApplicationContext _context;

        public BaseRepository(ApplicationContext context)
        {
            this._context = context;
        }

        public abstract T Adiciona(T item);

        public abstract T Remove(int codigo);

        public abstract T Obter(int codigo);

        public abstract (int,List<T>) ObterLista(BaseViewModel param);

    }
}

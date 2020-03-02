using Itix.Persistence.Context;
using Itix.Persistense.Repositories;

namespace Itix.Application.Service.Consulta
{
    public partial class ConsultaService
    {
        private readonly ConsultaRepository _consultaRepository;
        private readonly ApplicationContext _context;

        public ConsultaService(ConsultaRepository consultaRepository, ApplicationContext context)
        {
            _consultaRepository = consultaRepository;
            _context = context;
        }
    }
}

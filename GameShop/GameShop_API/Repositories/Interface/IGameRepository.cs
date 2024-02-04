using GameShop_API.Models.Domain;
using GameShop_API.Models.DTO;

namespace GameShop_API.Repositories.Interface
{
    public interface IGameRepository
    {
        Task<Game> CreateAsync(Game game);

        Task<IEnumerable<Game>> GetAsync();
    }
}

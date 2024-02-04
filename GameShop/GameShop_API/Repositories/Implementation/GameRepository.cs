using GameShop_API.Data;
using GameShop_API.Models.Domain;
using GameShop_API.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace GameShop_API.Repositories.Implementation
{
    public class GameRepository : IGameRepository
    {
        private readonly ApplicationDbContext dbContext;

        public GameRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<Game> CreateAsync(Game game)
        {

            await dbContext.Games.AddAsync(game);
            await dbContext.SaveChangesAsync();

            return game;
        }

        public async Task<IEnumerable<Game>> GetAsync()
        {

            return await dbContext.Games.ToListAsync();

        }
    }
}

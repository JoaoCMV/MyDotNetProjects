using GameShop_API.Data;
using GameShop_API.Models.Domain;
using GameShop_API.Models.DTO;
using GameShop_API.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace GameShop_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        private readonly IGameRepository gameRepository;

        public GamesController(IGameRepository gameRepository)
        {
            this.gameRepository = gameRepository;
        }

        [HttpPost]
        public async Task<IActionResult> CreateGame(CreateGameRequestDto request)
        {
            var game = new Game
            {
                Name = request.Name,
                Description = request.Description,
                Category = request.Category,
                Author = request.Author,
                AuthorUrl = request.AuthorUrl,
                PublishedDate = DateTime.Now
            };

            await gameRepository.CreateAsync(game);

            var response = new CreateGameResponseDto
            {
                Id = game.Id,
                Name = request.Name,
                Description = request.Description,
                Category = request.Category,
                Author = request.Author,
                AuthorUrl = request.AuthorUrl
            };

            return Ok(response);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<GetGamesResponseDto>>> GetPaymentDetails()
        {
            IEnumerable<Game> games = await gameRepository.GetAsync();
            List<GetGamesResponseDto> gamesDto= [];
            
            foreach (var game in games)
            {
                var gamedto = new GetGamesResponseDto 
                { Id = game.Id, 
                  Name = game.Name,
                  Description = game.Description,
                  Category = game.Category,
                  Author = game.Author,
                  AuthorUrl = game.AuthorUrl,
                  PublishedDate = game.PublishedDate
                };

                gamesDto.Add(gamedto);
            }

            return Ok(gamesDto);
        }
    }
}

using GameShop_API.Data;
using GameShop_API.Models.Domain;
using GameShop_API.Models.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GameShop_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompaniesController : ControllerBase
    {

        private readonly ApplicationDbContext dbContext;
        public CompaniesController(ApplicationDbContext dbContext) 
        {
            this.dbContext = dbContext;
        }

        [HttpPost]
        public async Task<IActionResult> CreateCompany(CreateCompanyRequestDto request)
        {

            var company = new Company
            {
                Name = request.Name,
                Description = request.Description,
                CreatonDate = DateTime.Now
            };

            await dbContext.Companies.AddAsync(company);
            await dbContext.SaveChangesAsync();

            var response = new CreateCompanyResponseDto
            {
                Id = company.Id,
                Name = company.Name,
                Description = company.Description,
                CreatonDate = company.CreatonDate
            };

            return Ok(company);
        }
    }
}

namespace GameShop_API.Models.DTO
{
    public class CreateCompanyResponseDto
    {
        public Guid Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public DateTime CreatonDate { get; set; }
    }
}

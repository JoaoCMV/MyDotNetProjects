namespace GameShop_API.Models.DTO
{
    public class CreateGameResponseDto
    {
        public Guid Id { get; set; } = Guid.NewGuid();

        public string Name { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public string Category { get; set; } = string.Empty;

        public string Author { get; set; } = string.Empty;

        public string AuthorUrl { get; set; } = string.Empty;

    }
}

namespace GameShop_API.Models.Domain
{
    public class Company
    {
        public Guid Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public DateTime CreatonDate { get; set; }
    }
}

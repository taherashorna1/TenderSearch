using System.ComponentModel.DataAnnotations;

namespace EmployeeSystem.API.Dtos
{
    public class EmployeeToAddDto
    {
        [Required]
        public string first_name { get; set; }
        [Required]
        public string last_name { get; set; }
        [Required]
        [EmailAddress]
        public string email { get; set; }
        [Required]
        [StringLength(11,MinimumLength = 8, ErrorMessage = "Phone number must be between 8 - 11 digits")]
        public string phone_number { get; set; }
        public string mobile { get; set; }
    }
}
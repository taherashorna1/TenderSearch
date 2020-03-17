namespace EmployeeSystem.API.Dtos
{
    public class EmployeeToUpdateDto
    {
       
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string email { get; set; }
        public string phone_number { get; set; }
        public string mobile { get; set; }
        public bool status { get; set; }
    }
}
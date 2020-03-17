namespace EmployeeSystem.API.Models
{
    public class Employee
    {
        public int ID { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string email { get; set; }
        public string phone_number { get; set; }
        public string mobile { get; set; }
        public bool status { get; set; }
    }
}
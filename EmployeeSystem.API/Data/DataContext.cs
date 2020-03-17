using EmployeeSystem.API.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeSystem.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options)
        {}

        public DbSet<Employee> Employees { get; set; }
    }
}
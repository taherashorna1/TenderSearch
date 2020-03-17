using System.Collections.Generic;
using System.Threading.Tasks;
using EmployeeSystem.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeSystem.API.Data
{
    public interface IEmployeeRepository
    {
         Task<IEnumerable<Employee>> GetEmployees();
         Task<Employee> GetEmployee(int id);
         void UpdateEmployee(Employee employee);
         void Delete<Employee>(Employee employee);
         void Add<Employee>(Employee employee);
         Task<bool> ChangeStatus(int id);
         Task<bool> SaveAll();


    }
}
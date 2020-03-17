using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using EmployeeSystem.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeSystem.API.Data
{

    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly DataContext _context;
        public EmployeeRepository(DataContext context)
        {
            _context = context;

        }
        public void Add<Employee>(Employee employee)
        {
            _context.Add(employee);
        }

        public Task<bool> ChangeStatus(int id)
        {
            throw new System.NotImplementedException();
        }

        public void Delete<Employee>(Employee employee)
        {
            _context.Remove(employee);
            
        }

        public async  Task<Employee> GetEmployee(int id)
        {
            var employee = await _context.Employees.FirstOrDefaultAsync(e => e.ID == id);
            return employee;
        }

        public async Task<IEnumerable<Employee>> GetEmployees()
        {
            var employees = await _context.Employees.ToListAsync();
            return employees;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async void UpdateEmployee(Employee employee)
        {
            Employee existingemployee = await _context.Employees.FirstOrDefaultAsync(e => e.ID == employee.ID);
            existingemployee.first_name = employee.first_name;
            existingemployee.last_name = employee.last_name;
            existingemployee.email = employee.email;
            existingemployee.phone_number = employee.phone_number;
            existingemployee.mobile = employee.mobile;
           
        }

        
    }
}
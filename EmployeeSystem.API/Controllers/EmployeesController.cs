using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using EmployeeSystem.API.Data;
using EmployeeSystem.API.Dtos;
using EmployeeSystem.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeSystem.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly IMapper _mapper;

        private readonly IEmployeeRepository _repo;
        public EmployeesController(IEmployeeRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;

        }
        // GET api/employees
        [HttpGet]
        public async Task<IActionResult> GetEmployees()
        {
            var employees = await _repo.GetEmployees();
            //var employeesToReturn = _mapper.Map<IEnumerable<EmployeesToViewDto>>(employees);
            return Ok(employees);

        }

        // GET api/employees/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployee(int id)
        {
            var employee = await _repo.GetEmployee(id);
            //var employeeToReturn = _mapper.Map<EmployeeForDetailDto>(employee);
            return Ok(employee);

        }

        //POST api/employees
        [HttpPost("create")]
        public void CreateEmployee(EmployeeToAddDto employeeToAdddto)
        {
            var employee = _mapper.Map<Employee>(employeeToAdddto);
            _repo.Add(employee);
            _repo.SaveAll();

        }

        // PUT api/employees/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployee(int id, EmployeeToUpdateDto employeeToUpdateDto)
        {
            Employee existingEmployee = await _repo.GetEmployee(id);
            _mapper.Map<EmployeeToUpdateDto, Employee>(employeeToUpdateDto, existingEmployee);
            _repo.UpdateEmployee(existingEmployee);
            if(await _repo.SaveAll()){
                return NoContent();
            }
            throw new Exception($"Updating employee {id} failed to save ");
            
        }

        //DELETE api/employees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try{
            var employee = await _repo.GetEmployee(id);
            if(employee == null){
                return StatusCode(500, "Cannot find employee");
            
            }
            _repo.Delete(employee);
            await _repo.SaveAll();
            return NoContent();
            }
            catch (Exception ex) {
                return StatusCode(500, "Internal server error");
            }
            
            

        }
    }
}
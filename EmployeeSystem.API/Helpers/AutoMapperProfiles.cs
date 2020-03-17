using AutoMapper;
using EmployeeSystem.API.Dtos;
using EmployeeSystem.API.Models;

namespace EmployeeSystem.API.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Employee, EmployeesToViewDto>();
            CreateMap<Employee, EmployeeForDetailDto>();
            CreateMap<EmployeeToUpdateDto, Employee>();
            CreateMap<EmployeeToAddDto,Employee>();
        }
    }
}
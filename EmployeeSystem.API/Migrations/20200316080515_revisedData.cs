using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployeeSystem.API.Migrations
{
    public partial class revisedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "status",
                table: "Employees",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "status",
                table: "Employees");
        }
    }
}

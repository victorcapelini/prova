using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Itix.Backoffice.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Consulta",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DataRegistro = table.Column<DateTime>(nullable: false),
                    DataDesativacao = table.Column<DateTime>(nullable: true),
                    Paciente = table.Column<string>(nullable: true),
                    DataNascimentoPaciente = table.Column<DateTime>(nullable: false),
                    Inicio = table.Column<DateTime>(nullable: false),
                    Fim = table.Column<DateTime>(nullable: false),
                    Observacoes = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Consulta", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Consulta");
        }
    }
}

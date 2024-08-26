using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Blog_backend.Migrations
{
    /// <inheritdoc />
    public partial class ptani : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Blogs_Category_CategoryId1",
                table: "Blogs");

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId1",
                table: "Blogs",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Blogs_Category_CategoryId1",
                table: "Blogs",
                column: "CategoryId1",
                principalTable: "Category",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Blogs_Category_CategoryId1",
                table: "Blogs");

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId1",
                table: "Blogs",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Blogs_Category_CategoryId1",
                table: "Blogs",
                column: "CategoryId1",
                principalTable: "Category",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

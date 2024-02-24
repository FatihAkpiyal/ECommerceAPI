using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ETicaretAPI.Persistence.Migrations
{
    public partial class mig_7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductProductImageFile_Products_ProductImageFilesId1",
                table: "ProductProductImageFile");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProductProductImageFile",
                table: "ProductProductImageFile");

            migrationBuilder.DropIndex(
                name: "IX_ProductProductImageFile_ProductImageFilesId1",
                table: "ProductProductImageFile");

            migrationBuilder.RenameColumn(
                name: "ProductImageFilesId1",
                table: "ProductProductImageFile",
                newName: "ProductId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProductProductImageFile",
                table: "ProductProductImageFile",
                columns: new[] { "ProductId", "ProductImageFilesId" });

            migrationBuilder.CreateIndex(
                name: "IX_ProductProductImageFile_ProductImageFilesId",
                table: "ProductProductImageFile",
                column: "ProductImageFilesId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductProductImageFile_Products_ProductId",
                table: "ProductProductImageFile",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductProductImageFile_Products_ProductId",
                table: "ProductProductImageFile");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProductProductImageFile",
                table: "ProductProductImageFile");

            migrationBuilder.DropIndex(
                name: "IX_ProductProductImageFile_ProductImageFilesId",
                table: "ProductProductImageFile");

            migrationBuilder.RenameColumn(
                name: "ProductId",
                table: "ProductProductImageFile",
                newName: "ProductImageFilesId1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProductProductImageFile",
                table: "ProductProductImageFile",
                columns: new[] { "ProductImageFilesId", "ProductImageFilesId1" });

            migrationBuilder.CreateIndex(
                name: "IX_ProductProductImageFile_ProductImageFilesId1",
                table: "ProductProductImageFile",
                column: "ProductImageFilesId1");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductProductImageFile_Products_ProductImageFilesId1",
                table: "ProductProductImageFile",
                column: "ProductImageFilesId1",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

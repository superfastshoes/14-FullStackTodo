namespace TodoAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Todoes",
                c => new
                    {
                        TodoID = c.Int(nullable: false, identity: true),
                        Task = c.String(),
                        Priority = c.String(),
                    })
                .PrimaryKey(t => t.TodoID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Todoes");
        }
    }
}

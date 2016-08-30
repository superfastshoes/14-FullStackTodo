namespace TodoAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updateToClass : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Todoes", "Priority", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Todoes", "Priority", c => c.String());
        }
    }
}

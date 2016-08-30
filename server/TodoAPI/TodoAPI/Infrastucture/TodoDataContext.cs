using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace TodoAPI.Infrastucture
{
    public class TodoDataContext : DbContext
    {
        public TodoDataContext() : base("MyTodoDatabase")
        {

        }
        public IDbSet<Models.Todo> Todoes { get; set; }
    }
}
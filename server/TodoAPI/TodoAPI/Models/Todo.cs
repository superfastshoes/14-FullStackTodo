using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TodoAPI.Models
{
    public class Todo
    {
        public int TodoId { get; set; }
        public string Task { get; set; }
        public int Priority { get; set; }
    }
} 
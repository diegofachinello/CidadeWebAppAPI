using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebAppAPI.Models
{
    public class WebAppAPIContext : DbContext
    {
        public WebAppAPIContext (DbContextOptions<WebAppAPIContext> options)
            : base(options)
        {
        }

        public DbSet<WebAppAPI.Models.Cidade> Cidade { get; set; }
    }
}

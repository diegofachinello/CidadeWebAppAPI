﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppAPI.Models
{
    public class Cidade
    {   
        public int Id { get; set; }
        [Required]
        public int IdCidade { get; set; }
        [Required]
        public string Nome { get; set; }
        public string Estado { get; set; }
    }
}

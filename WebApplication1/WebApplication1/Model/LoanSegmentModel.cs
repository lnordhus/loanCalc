using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1
{
    public class LoanSegmentModel
    {
        public decimal Year{get;set;}
        public decimal Interest { get; set; }
        public decimal Payment { get; set; }
        public decimal Sum { get; set; }
    }
}
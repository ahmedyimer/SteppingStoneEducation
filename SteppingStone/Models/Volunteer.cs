using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SteppingStone.Models
{
    public class Volunteer
    {
        public string FirstName { set; get; }
        public string LastName { set; get; }
        public string StartDate { set; get; }
        public string EndDate { set; get; }
        public string Email { set; get; }
        public string Country { set; get; }
        public string TypeofPlacement { set; get; }
        public string TellUs { set; get; }
    }
}
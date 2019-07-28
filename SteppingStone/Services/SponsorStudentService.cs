using SteppingStone.Data;
using SteppingStone.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace SteppingStone.Services
{
    public class SponsorStudentService
    {
        public SponsorStudentService() { }

        public void AddSponsorStudent(SponsorStudent sponsorstudent)
        {
            SponsorStudentData sponsorstudentData = new SponsorStudentData();

            try
            {
                sponsorstudentData.AddSponsorStudent(sponsorstudent);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        
    }
}
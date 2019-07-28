using SteppingStone.Data;
using SteppingStone.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace SteppingStone.Services
{
    public class VolunteerService
    {
        public VolunteerService() { }

        public void AddVolunteer(Volunteer volunteer)
        {
            VolunteerData volunteerData = new VolunteerData();

            try
            {
                volunteerData.AddVolunteer(volunteer);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        
    }
}
using SteppingStone.Models;
using SteppingStone.Services;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Script.Serialization;

namespace SteppingStone.Controllers
{
    public class VolunteerController : BaseAPIController
    {
        [HttpPost]
        [Route("api/Volunteer/AddVolunteer")]
        public IHttpActionResult AddVolunteer([FromBody]Volunteer value)
        {
            Volunteer volunteer = new Volunteer();

            var volunteerservice = new VolunteerService();
            volunteerservice.AddVolunteer(value);

            return Ok(volunteer);
        }
    }
}

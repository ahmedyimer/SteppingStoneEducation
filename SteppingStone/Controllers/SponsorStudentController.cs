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
    public class SponsorStudentController : BaseAPIController
    {
        [HttpPost]
        [Route("api/SponsorStudent/AddSponsorStudent")]
        public IHttpActionResult AddSponsorStudent([FromBody]SponsorStudent value)
        {
            SponsorStudent sponsorstudent = new SponsorStudent();

            var sponsorstudentservice = new SponsorStudentService();
            sponsorstudentservice.AddSponsorStudent(value);

            return Ok(sponsorstudent);
        }
    }
}

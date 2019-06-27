using SteppingStone.Models;
using SteppingStone.Services;
using System.Collections.Generic;
using System.Web.Http;

namespace SteppingStone.Controllers
{
    public class MissionController : BaseAPIController
    {
        [HttpGet]
        [Route("api/Mission/GetMission")]
        public IEnumerable<Mission> GetMission()
        {
            List<Mission> mission = new List<Mission>();

            try
            {
                var missionservice = new MissionService();
                mission = (List<Mission>)missionservice.GetMission();
            }
            catch
            {

            }

            return mission;
        }

        [HttpPost]
        [Route("api/Mission/AddMission")]
        public IHttpActionResult AddMission([FromBody]Mission value)
        {
            Mission mission = new Mission();

            var missionservice = new MissionService();
            missionservice.AddMission(value);

            return Ok(mission);
        }

        [HttpPost]
        [Route("api/Mission/UpdateMission")]
        public IHttpActionResult UpdateMission([FromBody]Mission value)
        {
            Mission mission = new Mission();

            var missionservice = new MissionService();
            missionservice.UpdateMission(value);

            return Ok(mission); 
        }

        [HttpPost]
        [Route("api/Mission/DeleteMission")]
        public IHttpActionResult DeleteMission([FromBody]Mission value)
        {
            Mission mission = new Mission();

            var missionservice = new MissionService();
            missionservice.DeleteMission(value.Id);

            return Ok(mission);
        }












        // GET: api/Mission/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Mission
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Mission/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Mission/5
        public void Delete(int id)
        {
        }
    }
}

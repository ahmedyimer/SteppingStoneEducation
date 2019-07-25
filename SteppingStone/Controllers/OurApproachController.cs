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
    public class OurApproachController : BaseAPIController
    {
        [HttpGet]
        [Route("api/OurApproach/GetOurApproach")]
        public IEnumerable<OurApproach> Get()
        {
            List<OurApproach> ourapproach = new List<OurApproach>();

            try
            {
                var ourapproachservice = new OurApproachService();
                ourapproach = (List<OurApproach>)ourapproachservice.GetOurApproach();
            }
            catch
            {

            }

            return ourapproach;
        }

        // GET: api/Get
        [HttpGet]
        [Route("api/OurApproach/GetOurApproach1")]
        public HttpResponseMessage GetAboutUs1()
        {

            List<OurApproach> ourapproach = new List<OurApproach>();

            try
            {
                var ourapproachservice = new OurApproachService();
                ourapproach = (List<OurApproach>)ourapproachservice.GetOurApproach();
            }
            catch
            {

            }

            return Request.CreateResponse(HttpStatusCode.OK, ourapproach);

            //return ToJson(aboutus);

            //JavaScriptSerializer json = new JavaScriptSerializer();
            //string output = json.Serialize(aboutus);

            //return output;
        }

        [HttpPost]
        [Route("api/OurApproach/AddOurApproach")]
        public IHttpActionResult AddAboutUs([FromBody]OurApproach value)
        {
            OurApproach ourapproach = new OurApproach();

            var ourapproachservice = new OurApproachService();
            ourapproachservice.AddOurApproach(value);

            return Ok(ourapproach);
        }

        [HttpPost]
        [Route("api/OurApproach/UpdateOurApproach")]
        public IHttpActionResult UpdateAboutUs([FromBody]OurApproach value)
        {
            OurApproach ourapproach = new OurApproach();

            var ourapproachservice = new OurApproachService();
            ourapproachservice.UpdateOurApproach(value);

            return Ok(ourapproach);
        }

        [HttpPost]
        [Route("api/OurApproach/DeleteOurApproach1")]
        public IHttpActionResult DeleteAboutUs1([FromBody]OurApproach value)
        {
            OurApproach ourapproach = new OurApproach();

            var ourapproachservice = new OurApproachService();
            ourapproachservice.DeleteOurApproach(value.Id);

            return Ok(ourapproach);
        }

        [HttpPost]
        [Route("api/OurApproach/DeleteOurApproach")]
        public IHttpActionResult DeleteAboutUs(int Id)
        {
            OurApproach ourapproach = new OurApproach();

            var ourapproachservice = new OurApproachService();
            ourapproachservice.DeleteOurApproach(Id);

            return Ok(ourapproach);
        }












        // GET: api/AboutUs/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/AboutUs
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/AboutUs/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/AboutUs/5
        public void Delete(int id)
        {
        }
    }
}

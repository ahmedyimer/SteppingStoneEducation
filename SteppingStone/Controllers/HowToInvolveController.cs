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
    public class HowToInvolveController : BaseAPIController
    {
        [HttpGet]
        [Route("api/HowToInvolve/GetHowToInvolve")]
        public IEnumerable<HowToInvolve> Get()
        {
            List<HowToInvolve> howtoinvolve = new List<HowToInvolve>();

            try
            {
                var howtoinvolveservice = new HowToInvolveService();
                howtoinvolve = (List<HowToInvolve>)howtoinvolveservice.GetHowToInvolve();
            }
            catch
            {

            }

            return howtoinvolve;
        }

        // GET: api/Get
        [HttpGet]
        [Route("api/HowToInvolve/GetHowToInvolve1")]
        public HttpResponseMessage GetHowToInvolve1()
        {

            List<HowToInvolve> howtoinvolve = new List<HowToInvolve>();

            try
            {
                var howtoinvolveservice = new HowToInvolveService();
                howtoinvolve = (List<HowToInvolve>)howtoinvolveservice.GetHowToInvolve();
            }
            catch
            {

            }

            return Request.CreateResponse(HttpStatusCode.OK, howtoinvolve);

            //return ToJson(howtoinvolve);

            //JavaScriptSerializer json = new JavaScriptSerializer();
            //string output = json.Serialize(howtoinvolve);

            //return output;
        }

        [HttpPost]
        [Route("api/HowToInvolve/AddHowToInvolve")]
        public IHttpActionResult AddHowToInvolve([FromBody]HowToInvolve value)
        {
            HowToInvolve howtoinvolve = new HowToInvolve();

            var howtoinvolveservice = new HowToInvolveService();
            howtoinvolveservice.AddHowToInvolve(value);

            return Ok(howtoinvolve);
        }

        [HttpPost]
        [Route("api/HowToInvolve/UpdateHowToInvolve")]
        public IHttpActionResult UpdateHowToInvolve([FromBody]HowToInvolve value)
        {
            HowToInvolve howtoinvolve = new HowToInvolve();

            var howtoinvolveservice = new HowToInvolveService();
            howtoinvolveservice.UpdateHowToInvolve(value);

            return Ok(howtoinvolve);
        }

        [HttpPost]
        [Route("api/HowToInvolve/DeleteHowToInvolve1")]
        public IHttpActionResult DeleteAboutUs1([FromBody]HowToInvolve value)
        {
            HowToInvolve howtoinvolve = new HowToInvolve();

            var howtoinvolveservice = new HowToInvolveService();
            howtoinvolveservice.DeleteHowToInvolve(value.Id);

            return Ok(howtoinvolve);
        }

        [HttpPost]
        [Route("api/HowToInvolve/DeleteHowToInvolve")]
        public IHttpActionResult DeleteAboutUs(int Id)
        {
            HowToInvolve howtoinvolve = new HowToInvolve();

            var howtoinvolveservice = new HowToInvolveService();
            howtoinvolveservice.DeleteHowToInvolve(Id);

            return Ok(howtoinvolve);
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

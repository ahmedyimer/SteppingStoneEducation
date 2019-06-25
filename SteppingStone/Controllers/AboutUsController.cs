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
    public class AboutUsController : BaseAPIController
    {
        // GET: api/AboutUs
        [HttpGet]
        [Route("api/AboutUs/GetAboutUs")]
        public IEnumerable<AboutUs> Get()
        {
            List<AboutUs> aboutus = new List<AboutUs>();

            try
            {
                var aboutusservice = new AboutUsService();
                aboutus = (List<AboutUs>)aboutusservice.GetAboutUs();
            }
            catch
            {

            }

            return aboutus;
        }

        // GET: api/Get
        [HttpGet]
        [Route("api/AboutUs/GetAboutUs1")]
        public HttpResponseMessage GetAboutUs1()
        {

            List<AboutUs> aboutus = new List<AboutUs>();

            try
            {
                var aboutusservice = new AboutUsService();
                aboutus = (List<AboutUs>)aboutusservice.GetAboutUs();
            }
            catch
            {

            }

            return Request.CreateResponse(HttpStatusCode.OK, aboutus);

            //return ToJson(aboutus);

            //JavaScriptSerializer json = new JavaScriptSerializer();
            //string output = json.Serialize(aboutus);

            //return output;
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

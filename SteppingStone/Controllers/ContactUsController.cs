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
    public class ContactUsController : BaseAPIController
    {
        [HttpGet]
        [Route("api/ContactUs/GetContactUs")]
        public IEnumerable<ContactUs> Get()
        {
            List<ContactUs> contactus = new List<ContactUs>();

            try
            {
                var contactusservice = new ContactUsService();
                contactus = (List<ContactUs>)contactusservice.GetContactUs();
            }
            catch
            {

            }

            return contactus;
        }

        // GET: api/Get
        [HttpGet]
        [Route("api/ContactUs/ContactUs1")]
        public HttpResponseMessage GetContactUs1()
        {

            List<ContactUs> contactus = new List<ContactUs>();

            try
            {
                var contactusservice = new ContactUsService();
                contactus = (List<ContactUs>)contactusservice.GetContactUs();
            }
            catch
            {

            }

            return Request.CreateResponse(HttpStatusCode.OK, contactus);

            //return ToJson(aboutus);

            //JavaScriptSerializer json = new JavaScriptSerializer();
            //string output = json.Serialize(aboutus);

            //return output;
        }

        [HttpPost]
        [Route("api/ContactUs/AddContactUs")]
        public IHttpActionResult AddContactUs([FromBody]ContactUs value)
        {
            ContactUs contactus = new ContactUs();

            var contactusservice = new ContactUsService();
            contactusservice.AddContactUs(value);

            return Ok(contactus);
        }

        [HttpPost]
        [Route("api/ContactUs/UpdateContactUs")]
        public IHttpActionResult UpdateContactUs([FromBody]ContactUs value)
        {
            ContactUs contactus = new ContactUs();

            var contactusservice = new ContactUsService();
            contactusservice.UpdateContactUs(value);

            return Ok(contactus);
        }

        [HttpPost]
        [Route("api/ContactUs/DeleteContactUs1")]
        public IHttpActionResult DeleteContactUs1([FromBody]ContactUs value)
        {
            ContactUs contactus = new ContactUs();

            var contactusservice = new ContactUsService();
            contactusservice.DeleteContactUs(value.Id);

            return Ok(contactus);
        }

        [HttpPost]
        [Route("api/ContactUs/DeleteContactUs")]
        public IHttpActionResult DeleteContactUs(int Id)
        {
            ContactUs contactus = new ContactUs();

            var contactusservice = new ContactUsService();
            contactusservice.DeleteContactUs(Id);

            return Ok(contactus);
        }

        [HttpPost]
        [Route("api/ContactUs/AddContactUsMessage")]
        public IHttpActionResult AddContactUsMessage([FromBody]ContactUsMessage value)
        {
            ContactUsMessage contactusmessage = new ContactUsMessage();

            var contactusservice = new ContactUsService();
            contactusservice.AddContactUsMessage(value);

            return Ok(contactusmessage);
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

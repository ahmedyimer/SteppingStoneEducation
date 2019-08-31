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
    public class UserController : BaseAPIController
    {
        [HttpGet]
        [Route("api/User/GetUser")]
        public IEnumerable<User> GetUser(string username, string password)
        {
            User user = new User();
            user.UserName = username;
            user.Password = password;

            List<User> users = new List<User>();

            try
            {
                var userservice = new UserService();
                users = (List<User>)userservice.GetUser(user);
            }
            catch
            {

            }

            return users;
        }
    }
}

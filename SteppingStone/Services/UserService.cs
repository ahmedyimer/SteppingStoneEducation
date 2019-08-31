using SteppingStone.Data;
using SteppingStone.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace SteppingStone.Services
{
    public class UserService
    {
        public UserService() { }

        //public void GetUser(User user)
        //{
        //    UserData userData = new UserData();

        //    try
        //    {
        //        userData.GetUser(user);
        //    }
        //    catch (Exception ex)
        //    {
        //        throw ex;
        //    }
        //}



        public IEnumerable<User> GetUser(User user)
        {
            List<User> users = new List<User>();
            DataTable dt = new DataTable();
            UserData userData = new UserData();

            try
            {

                dt = userData.GetUser(user);

                if (dt.Rows.Count > 0)
                {
                    users = this.MapUser(dt);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return users;

        }

        public List<User> MapUser(DataTable tbl)
        {
            List<User> _List = new List<User>();

            foreach (DataRow row in tbl.Rows)
            {
                User user = new User()
                {
                    Id = Int32.Parse(row["Id"].ToString()),
                    UserName = row["UserName"].ToString(),
                    Password = row["Password"].ToString()
                };

                _List.Add(user);
            }

            return _List;
        }
    }
}
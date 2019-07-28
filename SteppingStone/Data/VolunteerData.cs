using SteppingStone.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace SteppingStone.Data
{
    public class VolunteerData
    {
        public void AddVolunteer(Volunteer value)
        {
            System.Data.SqlClient.SqlCommand cmdSQL = null;
            System.Data.SqlClient.SqlConnection cnSQL = null;

            string ConnString = System.Configuration.ConfigurationManager.ConnectionStrings["SteppingStoneDB"].ConnectionString;

            try
            {
                cnSQL = new System.Data.SqlClient.SqlConnection(ConnString);
                cnSQL.Open();
                cmdSQL = new System.Data.SqlClient.SqlCommand();
                cmdSQL.Connection = cnSQL;
                cmdSQL.CommandType = CommandType.Text;

                cmdSQL.CommandText = String.Format("INSERT INTO Volunteer (FirstName, Lastname, StartDate, EndDate,Email,Country,TypeofPlacement,Tellus) " +
                    "VALUES ('{0}', N'{1}', N'{2}', N'{3}', N'{4}', N'{5}', N'{6}', N'{7}')", 
                    value.FirstName, value.LastName, value.StartDate, value.EndDate, value.Email, value.Country, value.TypeofPlacement, value.TellUs);
                cmdSQL.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
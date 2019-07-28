using SteppingStone.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace SteppingStone.Data
{
    public class SponsorStudentData
    {
        public void AddSponsorStudent(SponsorStudent value)
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

                cmdSQL.CommandText = String.Format("INSERT INTO SponsorStudent (NumberOfStudent, Currency, Email, FirstName, Lastname, Address1, Address2, Country, City, State, PostalZipCode, Message) " +
                    "VALUES ({0}, N'{1}', N'{2}', N'{3}', N'{4}', N'{5}', N'{6}', N'{7}', N'{8}', N'{9}', N'{10}', N'{11}')", 
                    value.NumberOfStudent, value.Currency,  value.Email, value.FirstName, value.LastName, value.Address1, value.Address2, value.Country, value.City, value.State, value.PostalZipCode, value.Message);
                cmdSQL.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
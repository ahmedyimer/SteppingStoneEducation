using SteppingStone.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace SteppingStone.Data
{
    public class UserData
    {
        public DataTable GetUser(User value)
        {
            //System.Data.SqlClient.SqlCommand cmdSQL = null;
            //System.Data.SqlClient.SqlConnection cnSQL = null;

            //string ConnString = System.Configuration.ConfigurationManager.ConnectionStrings["SteppingStoneDB"].ConnectionString;

            //try
            //{
            //    cnSQL = new System.Data.SqlClient.SqlConnection(ConnString);
            //    cnSQL.Open();
            //    cmdSQL = new System.Data.SqlClient.SqlCommand();
            //    cmdSQL.Connection = cnSQL;
            //    cmdSQL.CommandType = CommandType.Text;

            //    cmdSQL.CommandText = String.Format("SELECT * FROM User WHERE UserName = {0} AND Password = {1}", value.UserName, value.Password);
            //    cmdSQL.ExecuteNonQuery();
            //}
            //catch (Exception ex)
            //{
            //    throw ex;
            //}


            System.Data.SqlClient.SqlCommand cmdSQL = null;
            System.Data.SqlClient.SqlConnection cnSQL = null;
            System.Data.SqlClient.SqlDataAdapter daSQL = null;

            DataSet ds = new DataSet();
            DataTable tbl = new DataTable();
            string ConnString = System.Configuration.ConfigurationManager.ConnectionStrings["SteppingStoneDB"].ConnectionString;

            try
            {
                cnSQL = new System.Data.SqlClient.SqlConnection(ConnString);
                cnSQL.Open();
                cmdSQL = new System.Data.SqlClient.SqlCommand();
                cmdSQL.Connection = cnSQL;
                cmdSQL.CommandType = CommandType.Text;


                cmdSQL.CommandText = String.Format("SELECT * FROM [dbo].[User] WHERE UserName = '{0}' AND Password = '{1}'", value.UserName, value.Password);


                daSQL = new System.Data.SqlClient.SqlDataAdapter(cmdSQL);
                daSQL.Fill(ds);

                if (ds.Tables.Count > 0)
                {
                    tbl = ds.Tables[0];
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return tbl;
        }

    }
}
using SteppingStone.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace SteppingStone.Data
{
    public class MissionData
    {
        public DataTable GetMission()
        {
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


                cmdSQL.CommandText = String.Format("SELECT * From Mission");


                daSQL = new System.Data.SqlClient.SqlDataAdapter(cmdSQL);
                daSQL.Fill(ds);

                if (ds.Tables.Count > 0)
                {
                    tbl = ds.Tables[0];
                }
            }
            catch (Exception ex)
            {

            }

            return tbl;
        }

        public void UpdateMission(Mission value)
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

                cmdSQL.CommandText = String.Format("UPDATE Mission SET Title = '{0}', Description = '{1}' where Id = {2}", value.Title, value.Description, value.Id);
                cmdSQL.ExecuteNonQuery();
            }
            catch (Exception ex)
            {

            }
        }
    }
}
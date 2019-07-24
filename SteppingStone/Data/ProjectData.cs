using SteppingStone.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace SteppingStone.Data
{
    public class ProjectData
    {
        public DataTable GetProject()
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


                cmdSQL.CommandText = String.Format("SELECT * From Project");


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

        public void AddProject(Project value)
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

                cmdSQL.CommandText = String.Format("INSERT INTO Project (Title, Description) VALUES ('{0}', '{1}')", value.Title, value.Description);
                cmdSQL.ExecuteNonQuery();
            }
            catch (Exception ex)
            {

            }
        }

        public void UpdateProject(Project value)
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

                cmdSQL.CommandText = String.Format("UPDATE Project SET Title = '{0}', Description = '{1}' where Id = {2}", value.Title, value.Description, value.Id);
                cmdSQL.ExecuteNonQuery();
            }
            catch (Exception ex)
            {

            }
        }

        public void DeleteProject(int Id)
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

                cmdSQL.CommandText = String.Format("DELETE Project WHERE Id = '{0}'", Id);
                cmdSQL.ExecuteNonQuery();
            }
            catch (Exception ex)
            {

            }
        }
    }
}
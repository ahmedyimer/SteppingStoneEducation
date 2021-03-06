﻿using SteppingStone.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Net.Mail;
using System.Net;

namespace SteppingStone.Data
{
    public class AboutUsData
    {
        public DataTable GetAboutUs()
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


                cmdSQL.CommandText = String.Format("SELECT * From AboutUs");


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

        public void AddAboutUs(AboutUs value)
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

                cmdSQL.CommandText = String.Format("INSERT INTO AboutUs (Title, Description) VALUES ('{0}', '{1}')", value.Title, value.Description);
                cmdSQL.ExecuteNonQuery();

                try
                {
                 
                    MailMessage mail = new MailMessage();
                    //SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

                    mail.From = new MailAddress("postmaster@steppingstoneef.org");
                    mail.To.Add("ahmedaragaw@yahoo.com");
                    mail.Subject = "Test Mail";
                    mail.Body = "This is for testing SMTP mail from Stepping Stone.org";

                    //SmtpClient smtp = new SmtpClient("m0#.internetmailserver.net");
                    SmtpClient smtp = new SmtpClient("m01.internetmailserver.net");
                    
                    NetworkCredential Credentials = new NetworkCredential("postmaster@steppingstoneef.org", "ssef@2020");
                    smtp.Credentials = Credentials;
                    //lblMessage.Text = "Mail Sent";

                    smtp.Send(mail);
                  
                }
                catch (Exception ex)
                {

                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void UpdateAboutUs(AboutUs value)
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

                cmdSQL.CommandText = String.Format("UPDATE AboutUs SET Title = '{0}', Description = '{1}' where Id = {2}", value.Title, value.Description, value.Id);
                cmdSQL.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void DeleteAboutUs(int Id)
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

                cmdSQL.CommandText = String.Format("DELETE AboutUs WHERE Id = '{0}'", Id);
                cmdSQL.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
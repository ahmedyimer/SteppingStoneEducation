using SteppingStone.Data;
using SteppingStone.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace SteppingStone.Services
{
    public class ContactUsService
    {
        public ContactUsService() { }

        public IEnumerable<ContactUs> GetContactUs()
        {
            List<ContactUs> contactus = new List<ContactUs>();
            DataTable dt = new DataTable();
            ContactUsData contactusData = new ContactUsData();

            try
            {

                dt = contactusData.GetContactUs();

                if (dt.Rows.Count > 0)
                {
                    contactus = this.MapContactUs(dt);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return contactus;

        }

        public void AddContactUs(ContactUs contactus)
        {
            ContactUsData contactusData = new ContactUsData();

            try
            {
                contactusData.AddContactUs(contactus);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void AddContactUsMessage(ContactUsMessage contactusmessage)
        {
            ContactUsData contactusData = new ContactUsData();

            try
            {
                contactusData.AddContactUsMessage(contactusmessage);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void UpdateContactUs(ContactUs contactus)
        {
            ContactUsData contactusData = new ContactUsData();

            try
            {
                contactusData.UpdateContactUs(contactus);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void DeleteContactUs(int Id)
        {
            ContactUsData contactusData = new ContactUsData();

            try
            {
                contactusData.DeleteContactUs(Id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<ContactUs> MapContactUs(DataTable tbl)
        {
            List<ContactUs> _List = new List<ContactUs>();

            foreach (DataRow row in tbl.Rows)
            {
                ContactUs contactus = new ContactUs()
                {
                    Id = Int32.Parse(row["Id"].ToString()),
                    Title = row["Title"].ToString(),
                    Description = row["Description"].ToString()
                };

                _List.Add(contactus);
            }

            return _List;
        }
    }
}
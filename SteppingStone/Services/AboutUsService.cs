using SteppingStone.Data;
using SteppingStone.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace SteppingStone.Services
{
    public class AboutUsService
    {
        public AboutUsService() { }

        public IEnumerable<AboutUs> GetAboutUs()
        {
            List<AboutUs> aboutus = new List<AboutUs>();
            DataTable dt = new DataTable();
            AboutUsData aboutUsData = new AboutUsData();

            try
            {

                dt = aboutUsData.GetAboutUs();

                if (dt.Rows.Count > 0)
                {
                    aboutus = this.MapAboutUs(dt);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return aboutus;

        }

        public void AddAboutUs(AboutUs aboutus)
        {
            AboutUsData aboutusData = new AboutUsData();

            try
            {
                aboutusData.AddAboutUs(aboutus);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void UpdateAboutUs(AboutUs aboutus)
        {
            AboutUsData aboutusData = new AboutUsData();

            try
            {
                aboutusData.UpdateAboutUs(aboutus);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void DeleteAboutUs(int Id)
        {
            AboutUsData aboutusData = new AboutUsData();

            try
            {
                aboutusData.DeleteAboutUs(Id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<AboutUs> MapAboutUs(DataTable tbl)
        {
            List<AboutUs> _List = new List<AboutUs>();

            foreach (DataRow row in tbl.Rows)
            {
                AboutUs aboutus = new AboutUs()
                {
                    Id = Int32.Parse(row["Id"].ToString()),
                    Title = row["Title"].ToString(),
                    Description = row["Description"].ToString()
                };

                _List.Add(aboutus);
            }

            return _List;
        }
    }
}
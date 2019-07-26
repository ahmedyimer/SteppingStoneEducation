using SteppingStone.Data;
using SteppingStone.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace SteppingStone.Services
{
    public class HowToInvolveService
    {
        public HowToInvolveService() { }

        public IEnumerable<HowToInvolve> GetHowToInvolve()
        {
            List<HowToInvolve> aboutus = new List<HowToInvolve>();
            DataTable dt = new DataTable();
            HowToInvolveData howtoinvolveData = new HowToInvolveData();

            try
            {

                dt = howtoinvolveData.GetHowToInvolve();

                if (dt.Rows.Count > 0)
                {
                    aboutus = this.MapHowToInvolve(dt);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return aboutus;

        }

        public void AddHowToInvolve(HowToInvolve howtoinvolve)
        {
            HowToInvolveData howtoinvolveData = new HowToInvolveData();

            try
            {
                howtoinvolveData.AddHowToInvolve(howtoinvolve);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void UpdateHowToInvolve(HowToInvolve howtoinvolve)
        {
            HowToInvolveData howtoinvolveData = new HowToInvolveData();

            try
            {
                howtoinvolveData.UpdateHowToInvolve(howtoinvolve);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void DeleteHowToInvolve(int Id)
        {
            HowToInvolveData howtoinvolveData = new HowToInvolveData();

            try
            {
                howtoinvolveData.DeleteHowToInvolve(Id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<HowToInvolve> MapHowToInvolve(DataTable tbl)
        {
            List<HowToInvolve> _List = new List<HowToInvolve>();

            foreach (DataRow row in tbl.Rows)
            {
                HowToInvolve howtoinvolve = new HowToInvolve()
                {
                    Id = Int32.Parse(row["Id"].ToString()),
                    Title = row["Title"].ToString(),
                    Description = row["Description"].ToString()
                };

                _List.Add(howtoinvolve);
            }

            return _List;
        }
    }
}
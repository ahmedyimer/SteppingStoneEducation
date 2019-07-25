using SteppingStone.Data;
using SteppingStone.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace SteppingStone.Services
{
    public class OurApproachService
    {
        public OurApproachService() { }

        public IEnumerable<OurApproach> GetOurApproach()
        {
            List<OurApproach> ourapproach = new List<OurApproach>();
            DataTable dt = new DataTable();
            OurApproachData ourapproachData = new OurApproachData();

            try
            {

                dt = ourapproachData.GetOurApproach();

                if (dt.Rows.Count > 0)
                {
                    ourapproach = this.MapOurApproach(dt);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return ourapproach;

        }

        public void AddOurApproach(OurApproach ourapproach)
        {
            OurApproachData ourapproachData = new OurApproachData();

            try
            {
                ourapproachData.AddOurApproach(ourapproach);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void UpdateOurApproach(OurApproach ourapproach)
        {
            OurApproachData ourapproachData = new OurApproachData();

            try
            {
                ourapproachData.UpdateOurApproach(ourapproach);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void DeleteOurApproach(int Id)
        {
            OurApproachData ourapproachData = new OurApproachData();

            try
            {
                ourapproachData.DeleteOurApproach(Id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<OurApproach> MapOurApproach(DataTable tbl)
        {
            List<OurApproach> _List = new List<OurApproach>();

            foreach (DataRow row in tbl.Rows)
            {
                OurApproach ourapproach = new OurApproach()
                {
                    Id = Int32.Parse(row["Id"].ToString()),
                    Title = row["Title"].ToString(),
                    Description = row["Description"].ToString()
                };

                _List.Add(ourapproach);
            }

            return _List;
        }
    }
}
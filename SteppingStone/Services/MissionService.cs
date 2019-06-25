using SteppingStone.Data;
using SteppingStone.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace SteppingStone.Services
{
    public class MissionService
    {
        public MissionService() { }

        public IEnumerable<Mission> GetMission()
        {
            List<Mission> mission = new List<Mission>();
            DataTable dt = new DataTable();
            MissionData missionData = new MissionData();

            try
            {

                dt = missionData.GetMission();

                if (dt.Rows.Count > 0)
                {
                    mission = this.MapMission(dt);
                }
            }
            catch (Exception ex)
            {

            }

            return mission;

        }

        public void UpdateMission(Mission value)
        {
            Mission mission = new Mission();
            DataTable dt = new DataTable();
            MissionData missionData = new MissionData();

            try
            {
                missionData.UpdateMission(value);
            }
            catch (Exception ex)
            {

            }
        }

        public List<Mission> MapMission(DataTable tbl)
        {
            List<Mission> _List = new List<Mission>();

            foreach (DataRow row in tbl.Rows)
            {
                Mission mission = new Mission()
                {
                    Id = Int32.Parse(row["Id"].ToString()),
                    Title = row["Title"].ToString(),
                    Description = row["Description"].ToString()
                };

                _List.Add(mission);
            }

            return _List;
        }
    }
}
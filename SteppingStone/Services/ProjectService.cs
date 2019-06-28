using SteppingStone.Data;
using SteppingStone.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace SteppingStone.Services
{
    public class ProjectService
    {
        public ProjectService() { }

        public IEnumerable<Project> GetProject()
        {
            List<Project> project = new List<Project>();
            DataTable dt = new DataTable();
            ProjectData projectData = new ProjectData();

            try
            {

                dt = projectData.GetProject();

                if (dt.Rows.Count > 0)
                {
                    project = this.MapProject(dt);
                }
            }
            catch (Exception ex)
            {

            }

            return project;

        }

        public void AddProject(Project project)
        {
            ProjectData projectData = new ProjectData();

            try
            {
                projectData.AddProject(project);
            }
            catch (Exception ex)
            {

            }
        }

        public void UpdateProject(Project project)
        {
            ProjectData missionData = new ProjectData();

            try
            {
                missionData.UpdateProject(project);
            }
            catch (Exception ex)
            {

            }
        }

        public void DeleteProject(int Id)
        {
            ProjectData projectData = new ProjectData();

            try
            {
                projectData.DeleteProject(Id);
            }
            catch (Exception ex)
            {

            }
        }

        public List<Project> MapProject(DataTable tbl)
        {
            List<Project> _List = new List<Project>();

            foreach (DataRow row in tbl.Rows)
            {
                Project project = new Project()
                {
                    Id = Int32.Parse(row["Id"].ToString()),
                    Title = row["Title"].ToString(),
                    Description = row["Description"].ToString()
                };

                _List.Add(project);
            }

            return _List;
        }
    }
}
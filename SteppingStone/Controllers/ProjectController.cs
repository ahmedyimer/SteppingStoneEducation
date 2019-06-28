using SteppingStone.Models;
using SteppingStone.Services;
using System.Collections.Generic;
using System.Web.Http;

namespace SteppingStone.Controllers
{
    public class ProjectController : BaseAPIController
    {
        [HttpGet]
        [Route("api/Project/GetProject")]
        public IEnumerable<Project> GetProject()
        {
            List<Project> project = new List<Project>();

            try
            {
                var missionservice = new MissionService();
                project = (List<Project>)missionservice.GetMission();
            }
            catch
            {

            }

            return project;
        }

        [HttpPost]
        [Route("api/Project/AddProject")]
        public IHttpActionResult AddProject([FromBody]Project value)
        {
            Project project = new Project();

            var projectService = new ProjectService();
            projectService.AddProject(value);

            return Ok(project);
        }

        [HttpPost]
        [Route("api/Project/UpdateProject")]
        public IHttpActionResult UpdateProject([FromBody]Project value)
        {
            Project project = new Project();

            var projectService = new ProjectService();
            projectService.UpdateProject(value);

            return Ok(project); 
        }

        [HttpPost]
        [Route("api/Project/ProjectMission")]
        public IHttpActionResult DeleteProject([FromBody]Project value)
        {
            Project project = new Project();

            var projectService = new ProjectService();
            projectService.DeleteProject(value.Id);

            return Ok(project);
        }


        [HttpPost]
        [Route("api/Project/DeleteProject1")]
        public IHttpActionResult DeleteProject1(int Id)
        {
            Project project = new Project();

            var projectService = new ProjectService();
            projectService.DeleteProject(Id);

            return Ok(project);
        }











        // GET: api/Mission/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Mission
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Mission/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Mission/5
        public void Delete(int id)
        {
        }
    }
}

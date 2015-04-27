using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Play.Controllers
{
	[Route("/[controller]")]
    public class HomeController : Controller
    {
        // GET: /<controller>/
		[Route("[action]")]
        public IActionResult Index()
        {
			ViewBag.Title = "My first page";
            return View();
        }
    }
}

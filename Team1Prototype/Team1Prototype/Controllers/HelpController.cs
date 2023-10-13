using Microsoft.AspNetCore.Mvc;
using Team1Prototype.Models;

namespace Team1Prototype.Controllers
{
    public class HelpController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(HelpRequest request)
        {
            if (ModelState.IsValid)
            {
                // Here, you can handle the submitted data as you wish
                // For example, send an email, log it, etc.
                // Since we're not saving to a database, just as an example:
                ViewBag.Message = "Help request submitted successfully!";
                return View();
            }
            return View(request);
        }
    }
}

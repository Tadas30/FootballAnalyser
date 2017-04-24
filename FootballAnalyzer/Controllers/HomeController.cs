using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using FootballAnalyzer.Models;
using Newtonsoft.Json;

namespace FootballAnalyzer.Controllers
{
    public class HomeController : Controller
    {
        
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        [HttpPost]
        public ActionResult GetGames(string jsonData)
        {
            var games = JsonConvert.DeserializeObject<RootObject>(jsonData);
            return View("_GamesToday", games);
        }
    }
}

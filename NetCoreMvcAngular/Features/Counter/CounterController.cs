using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace NetCoreMvcAngular.Features.Counter
{
	[Route("counter")]
    public class CounterController : Controller
    {
		[Route("{*catch-all}")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
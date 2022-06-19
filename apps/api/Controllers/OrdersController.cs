using System.Collections.Generic;
using Api.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Api.Controllers
{
  [ApiController]
  [Route("api")]
  public class OrderController : ControllerBase
  {
    private readonly ILogger<OrderController> _logger;

    public OrderController(ILogger<OrderController> logger)
    {
      _logger = logger;
    }

    [HttpGet("orders")]
    public List<Order> Orders(string name)
    {
       return  new List <Order>{new Order()};
    }





}
}

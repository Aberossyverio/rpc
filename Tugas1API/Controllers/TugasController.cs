using Microsoft.AspNetCore.Mvc;
using System;
using System.ComponentModel.DataAnnotations;

namespace Tugas1API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Produces("application/json")]
    public class TugasController : ControllerBase
    {
        [HttpGet("status")]
        public ActionResult<string> GetStatus()
        {
            return Ok("Server is up and running.");
        }

        [HttpPost("add")]
        public ActionResult<int> Add([FromBody] int[] numbers)
        {
            if (numbers == null || numbers.Length == 0)
            {
                return BadRequest("Invalid input: Array of numbers is empty.");
            }

            int sum = 0;
            foreach (var num in numbers)
            {
                sum += num;
            }
            return sum;
        }

        [HttpPost("subtract")]
        public ActionResult<int> Subtract([FromBody] int[] numbers)
        {
            if (numbers == null || numbers.Length == 0)
            {
                return BadRequest("Invalid input: Array of numbers is empty.");
            }

            int result = numbers[0];
            for (int i = 1; i < numbers.Length; i++)
            {
                result -= numbers[i];
            }
            return result;
        }

        [HttpPost("lowercase")]
        public ActionResult<string> Lowercase([FromBody] string input)
        {
            if (string.IsNullOrEmpty(input))
            {
                return BadRequest("Invalid input: Input string is empty.");
            }

            return input.ToLower();
        }
    }
}

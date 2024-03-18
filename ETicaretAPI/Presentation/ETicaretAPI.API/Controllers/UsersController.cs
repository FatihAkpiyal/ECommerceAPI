using ETicaretAPI.Application.Features.Commands.AppUser.CreateUser;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ETicaretAPI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        readonly IMediator _mediator;

        public UsersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateUserCreateCommandRequest createUserCreateCommandRequest)
        {
           CreateUserCreateCommandResponse response  = await _mediator.Send(createUserCreateCommandRequest);
            return Ok(response);
        }
    }
}

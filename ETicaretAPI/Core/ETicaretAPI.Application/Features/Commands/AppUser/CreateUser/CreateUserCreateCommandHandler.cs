using ETicaretAPI.Application.Exceptions;
using MediatR;
using Microsoft.AspNetCore.Identity;


namespace ETicaretAPI.Application.Features.Commands.AppUser.CreateUser
{
    public class CreateUserCreateCommandHandler : IRequestHandler<CreateUserCreateCommandRequest, CreateUserCreateCommandResponse>
    {

        readonly UserManager<Domain.Entities.Identity.AppUser> _userManager;

        public CreateUserCreateCommandHandler(UserManager<Domain.Entities.Identity.AppUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<CreateUserCreateCommandResponse> Handle(CreateUserCreateCommandRequest request, CancellationToken cancellationToken)
        {
          IdentityResult result = await _userManager.CreateAsync(new()
            {
                Id = Guid.NewGuid().ToString(),
                UserName = request.userName,
                Email = request.Email,
                NameSurname = request.NameSurname,

            }, request.Password);

            CreateUserCreateCommandResponse response = new() { Succeeded = result.Succeeded};

            if (result.Succeeded)
                response.Message = "Kullanıcı başarıyla Oluşturulmuştur.";
            
            else
                foreach (var error in result.Errors)
                    response.Message += $"{error.Code} - {error.Description} <br>";

            return response;

                
            
            
        }
    }
}

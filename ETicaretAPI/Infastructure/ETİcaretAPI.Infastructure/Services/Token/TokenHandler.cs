using ETicaretAPI.Application.Abstraction.Token;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETİcaretAPI.Infastructure.Services.Token
{
    public class TokenHandler : ITokenHandler
    {

        IConfiguration _configuration;

        public TokenHandler(IConfiguration configuration)
        {
            _configuration = configuration; 
        }

        public ETicaretAPI.Application.DTOs.Token CreateAccessToken(int minute)
        {
            ETicaretAPI.Application.DTOs.Token token = new();

            SymmetricSecurityKey secuirtyKey = new(Encoding.UTF8.GetBytes(_configuration["Token:SecurityKey"]));

            SigningCredentials signingCredentials = new(secuirtyKey, SecurityAlgorithms.HmacSha256);

            token.Expiration= DateTime.UtcNow.AddMinutes(minute);
            JwtSecurityToken securityToken = new(
                audience: _configuration["Token:Audience"],
                issuer: _configuration["Token:Issuer"],
                expires: token.Expiration,
                notBefore: DateTime.UtcNow,
                signingCredentials:signingCredentials
                );

            JwtSecurityTokenHandler tokenHandler = new();
           token.AccessToken = tokenHandler.WriteToken(securityToken);
           return token;
        }
    }
}

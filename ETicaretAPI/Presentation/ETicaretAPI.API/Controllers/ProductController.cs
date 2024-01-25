using ETicaretAPI.Application.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ETicaretAPI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ProductController : ControllerBase
    {
        readonly private IProductWriteRepository _productWriteRepository;
        readonly private IProductReadRepository _productReadRepository;
        public ProductController(IProductWriteRepository productWriteRepository, IProductReadRepository productReadRepository)
        {
            _productWriteRepository = productWriteRepository;
            _productReadRepository = productReadRepository;
        }

        [HttpGet]
        public async void Get() {
            await _productWriteRepository.AddRangeASync(new()
            {
                new() {Id=Guid.NewGuid(),Name="Montesorri Oyuncak",Price=750,CreatedDate=DateTime.Now,Stock=10},
                new() {Id=Guid.NewGuid(),Name="Kitap Montesorri",Price=850,CreatedDate=DateTime.Now,Stock=10},
                new() {Id=Guid.NewGuid(),Name="Tahta Montesorri",Price=550,CreatedDate=DateTime.Now,Stock=10},

            });
            await _productWriteRepository.SaveAsync();
        }
    }
}

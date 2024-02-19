using ETicaretAPI.Application.Repositories;
using ETicaretAPI.Application.RequestParameters;
using ETicaretAPI.Application.Services;
using ETicaretAPI.Application.ViewModels.Products;
using ETicaretAPI.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace ETicaretAPI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ProductController : ControllerBase
    {
        readonly private IProductWriteRepository _productWriteRepository;
        readonly private IProductReadRepository _productReadRepository;
        private readonly IWebHostEnvironment _webHostEnvironment;
        readonly private IFileService _fileService;

        public ProductController(IProductWriteRepository productWriteRepository, IProductReadRepository productReadRepository,
            IWebHostEnvironment webHostEnvironment, IFileService fileService)
        {
            _productWriteRepository = productWriteRepository;
            _productReadRepository = productReadRepository;
            this._webHostEnvironment = webHostEnvironment;
            _fileService = fileService;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]Pagination pagination)
        {
            
            var totalCount=_productReadRepository.GetAll(false).Count();
            var products = _productReadRepository.GetAll(false).Skip(pagination.Page * pagination.Size).Take(pagination.Size).Select(p => new
            {
                p.Id,
                p.Name,
                p.Stock,
                p.Price,
                p.CreatedDate,
                p.UpdatedDate,
            }).ToList();

            return Ok(new
            {
                totalCount,
                products
            });
        }

        //Order order =await _orderReadRepository.GetByIdAsync("551e05de-e306-4fb9-b60c-ad7e14b8acb6");
        // order.Address = "İstanbul";
        // await _orderWriteRepository.SaveAsync();

        //await _productWriteRepository.AddRangeASync(new()
        //{
        //    new() {Id=Guid.NewGuid(),Name="Montesorri Oyuncak",Price=750,CreatedDate=DateTime.UtcNow,Stock=10},
        //    new() {Id=Guid.NewGuid(),Name="Kitap Montesorri",Price=850,CreatedDate=DateTime.UtcNow,Stock=10},
        //    new() {Id=Guid.NewGuid(),Name="Tahta Montesorri",Price=550,CreatedDate=DateTime.UtcNow,Stock=10},

        //});
        //var count = await _productWriteRepository.SaveAsync();
        //Product p = await _productReadRepository.GetByIdAsync("70345151-4374-4cf4-a806-e9487974edd8");
        //--------------------------------------
        //p.Name = "Ahmet";

        //await _productWriteRepository.SaveAsync();

        /*
         * ------ BURADA CUSTOMER OLUŞTURDUK VE BU CUSTOMERA İKİ ADET SİPARİŞ GİRDİK
         * 
         * var customerId =Guid.NewGuid();
        await _customerWriteRepository.AddASync( new() { Id = customerId, Name="Johny Cash" });

        await _orderWriteRepository.AddASync(new() { Description = "blab bla bla ", Address = "New york", CustomerId=customerId });
        await _orderWriteRepository.AddASync(new() { Description = "hebele hubele ", Address = "Arkansas",  CustomerId = customerId });
        await _orderWriteRepository.SaveAsync();*/



        [HttpGet("{id}")]

        public async Task<IActionResult> Get(string id)
        {
            return Ok(await _productReadRepository.GetByIdAsync(id,false));
        }

        [HttpPost]

        public async Task<IActionResult> Post(VM_Create_Products model)
        {
            
            await _productWriteRepository.AddASync(new() {
                Name = model.Name,
                Price = model.Price,
                Stock = model.Stock,
            });
            await _productWriteRepository.SaveAsync();
            return StatusCode((int)HttpStatusCode.Created);
        }

        [HttpPut]

        public async Task<IActionResult> Put(VM_Update_products model)
        {
            Product product = await _productReadRepository.GetByIdAsync(model.Id);
            product.Stock = model.Stock;
            product.Price = model.Price;
            product.Name = model.Name;
            await _productWriteRepository.SaveAsync();
            return Ok();
        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> Delete(string id)
        {
            await _productWriteRepository.RemovesAsync(id);
            await _productWriteRepository.SaveAsync();
            return Ok();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Upload()
        {
            await _fileService.UploadAsync("kaynak/productImages", Request.Form.Files);
            return Ok();
        }

        /*[HttpGet("{id}")]

        public async Task<IActionResult> Get(string id)
        {
            Product product = await _productReadRepository.GetByIdAsync(id);
            return Ok(product);
        }*/
    }
}

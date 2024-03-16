using ETicaretAPI.Application.Abstraction.Storage;
using ETicaretAPI.Application.Features.Commands.Product.CreateProduct;
using ETicaretAPI.Application.Features.Commands.Product.RemoveProduct;
using ETicaretAPI.Application.Features.Commands.Product.UpdateProduct;
using ETicaretAPI.Application.Features.Commands.ProductImageFile.RemoveProductImage;
using ETicaretAPI.Application.Features.Commands.ProductImageFile.UploadProductImage;
using ETicaretAPI.Application.Features.Queries.Product.GetByIdProduct;
using ETicaretAPI.Application.Features.Queries.ProductImageFile.GetProductImages;
using ETicaretAPI.Application.Repositories;
using ETicaretAPI.Application.Repositories.File;
using ETicaretAPI.Application.RequestParameters;
using ETicaretAPI.Application.ViewModels.Products;
using ETicaretAPI.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        readonly IFileWriteRepository _fileWriteRepository;
        readonly IFileReadRepository _fileReadRepository;
        readonly IProductImageFileWriteRepository _productImageFileWriteRepository;
        readonly IProductImageReadRepository _productImageReadRepository;
        readonly IInvoiceFileWriteRepository _invoiceFileWriteRepository;
        readonly IInvoiceFileReadRepository _invoiceFileReadRepository;
        readonly IStorageService _storageService;
        readonly IConfiguration _configuration;

        readonly IMediator _mediator;





        public ProductController(IProductReadRepository productReadRepository,IMediator mediator)
        {
            
            _productReadRepository = productReadRepository;
            
            _mediator = mediator;
        }

        [HttpGet]

        public async Task<IActionResult> Get([FromQuery] Pagination pagination)
        {
            //ÇALIŞAN KISIM BURADA
            var totalCount = _productReadRepository.GetAll(false).Count();
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

        //Handler ile get işlemi

        //public async Task<IActionResult> Get([FromQuery] GetAllProductQeuryRequest getAllProductQeuryRequest)
        //{
        //    GetAllProductQueryResponse response = await _mediator.Send(getAllProductQeuryRequest);
        //    return Ok(response);

        //}



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



        [HttpGet("{Id}")]

        public async Task<IActionResult> Get([FromRoute]GetByIdProductQueryRequest getByIdProductQueryRequest )
        {
         GetByIdProductQueryResponse response = await _mediator.Send(getByIdProductQueryRequest);
            return Ok(response);
        }

        [HttpPost]

        public async Task<IActionResult> Post(CreateProductCommandRequest createProductCommandRequest)
        {
           CreateProductCommandResponse response = await _mediator.Send(createProductCommandRequest);
            
            return StatusCode((int)HttpStatusCode.Created);
        }

        [HttpPut]

        public async Task<IActionResult> Put([FromBody]UpdateProductCommandRequest updateProductCommandRequest)
        {
          UpdateProductCommandResponse response = await _mediator.Send(updateProductCommandRequest);
            return Ok();
        }

        [HttpDelete("{Id}")]

        public async Task<IActionResult> Delete([FromRoute] RemoveProductCommandRequest removeProductCommandRequest)
        {
            RemoveProductCommandResponse response = await _mediator.Send(removeProductCommandRequest);

            return Ok();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Upload([FromQuery] UploadProductImageCommandRequest uploadProductImageCommandRequest)
        {
            uploadProductImageCommandRequest.Files = Request.Form.Files;
            UploadProductImageCommandResponse response =  await _mediator.Send(uploadProductImageCommandRequest);
            return Ok();
        }


        [HttpGet("[action]/{Id}")]
        public async Task<IActionResult> GetProductImages([FromRoute] GetProductImagesQueryRequest getProductImagesQueryRequest)
        {
            List<GetProductImagesQueryResponse>  response = await _mediator.Send(getProductImagesQueryRequest);
            return Ok(response);
        }
        [HttpDelete("[action]/{Id}")]
         public async Task<IActionResult> DeleteProductImage([FromRoute] RemoveProductImageCommandRequest removeProductImageCommandRequest, [FromQuery] string imageId)
        {
            removeProductImageCommandRequest.ImageId = imageId;
            RemoveProductImageCommandResponse response = await _mediator.Send(removeProductImageCommandRequest);
            return Ok();
        }
    }
}

using ETicaretAPI.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretAPI.Application.Repositories
{
    public interface IWriteRepository<T> : IRepository<T> where T : BaseEntity
    {
        Task<bool> AddASync(T model);
        Task<bool> AddRangeASync(List<T> datas);
        bool Remove(T model);

        bool RemoveRange(List<T> datas);
        Task<bool> RemovesAsync(string id);
        bool Update(T model);

        Task<int> SaveAsync();
    }
}

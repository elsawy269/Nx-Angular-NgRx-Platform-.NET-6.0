using System;

namespace Api.Model
{

    public class Products
    {
      public string Id
      {
        get
        {
          return Guid.NewGuid().ToString();
        }
      }
      public string Name { get; set; }
      public string Size { get; set; }
      public int Code { get; set; }
      public int Quantity { get; set; }
      public decimal price { get; set; }
      public decimal Total { get; set; }

    }

}

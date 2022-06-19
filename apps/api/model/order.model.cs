using System;
using System.Collections.Generic;

namespace Api.Model
{
  public class Order
  {

    public Order()
    {
      SubTotal = 1300;
      TotalTax = 0;
      Discount = 0;
      GrossTotal = 1300;
      Products = new List<Products>();
      Products.Add(new Products
      {
        Name = "Super Kernel Rice",
        Size = "1 Kg",
        Code = 2413,
        price = 100,
        Quantity = 1,
        Total = 100
      });

      Products.Add(new Products
      {
        Name = "Super Basmati Rice",
        Size = "3 Kg",
        Code = 2443,
        price = 300,
        Quantity = 1,
        Total = 300
      });

      Products.Add(new Products
      {
        Name = "Super Basmati Rice",
        Size = "3 Kg",
        Code = 2443,
        price = 300,
        Quantity = 1,
        Total = 300
      });
      Products.Add(new Products
      {
        Name = "Super Basmati Rice",
        Size = "3 Kg",
        Code = 2443,
        price = 300,
        Quantity = 1,
        Total = 300
      });
      Products.Add(new Products
      {
        Name = "Super Basmati Rice",
        Size = "3 Kg",
        Code = 2443,
        price = 300,
        Quantity = 1,
        Total = 300
      });

      Customer=new Customer{
        Id="0301-5112233",
        Name=" Aqlb Javed",
        AvgPurchase=1200,
        CreditBalance=0,
        BalanceDue=0,
        LastVisit="1 Day Ago",
        FirstVisit="1 Year Ago",
        LoyaltyPoints=550

      };



    }
    public string Id
    {
      get
      {
        return Guid.NewGuid().ToString();
      }
    }

    public decimal SubTotal { get; set; }
    public decimal TotalTax { get; set; }
    public decimal Discount { get; set; }
    public decimal GrossTotal { get; set; }


    public ICollection<Products> Products { get; set; }
    public Customer Customer { get; set; }





  }

}

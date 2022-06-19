
namespace Api.Model
{
  public class Customer
  {
    public string Id { get; set; }
    public string Name { get; set; }

    public decimal AvgPurchase { get; set; }
    public decimal CreditBalance { get; set; }
    public decimal BalanceDue { get; set; }
    public string FirstVisit { get; set; }
    public string LastVisit { get; set; }
    public int LoyaltyPoints { get; set; }

  }
}

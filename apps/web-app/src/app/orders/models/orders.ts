export interface Order {
  id: string;
  name: string;
  subTotal: number;
  totalTax: number;
  discount: number;
  grossTotal: number;
  products:Product[];
  customer:Customer
}


export interface Product {
  id: string;
  name: string;
  size: string;
  code: number;
  quantity: number;
  price: number;
  total: number;
}





export interface Customer {
  id: string;
  name: string;
  firstVisit: string;
  lastVisit: string;
  avgPurchase: number;
  creditBalance: number;
  balanceDue: number;
  loyaltyPoints: number;
}



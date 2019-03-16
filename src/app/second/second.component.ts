import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  orderno: string;
  orderdate: string;
  position: number;
  retailer: string;
  depot: string;
  transport: string;
  supplier: string;
  orderaty: string;
  orderamt: string;
  status: string;


}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, orderno:'#111', orderdate: '13-Mar-2019', retailer: 'XYZ', depot: 'BTM', transport: 'BG Transport', supplier: 'Supplier1', orderaty: '200 KL', orderamt: '100', status: 'recieved'},
  {position: 2, orderno:'#111', orderdate: '13-Mar-2019', retailer: 'XYZ', depot: 'BTM', transport: 'BG Transport', supplier: 'Supplier1', orderaty: '200 KL', orderamt: '100', status: 'recieved'},
  {position: 2, orderno:'#111', orderdate: '13-Mar-2019', retailer: 'XYZ', depot: 'BTM', transport: 'BG Transport', supplier: 'Supplier1', orderaty: '200 KL', orderamt: '100', status: 'recieved'},
  {position: 2, orderno:'#111', orderdate: '13-Mar-2019', retailer: 'XYZ', depot: 'BTM', transport: 'BG Transport', supplier: 'Supplier1', orderaty: '200 KL', orderamt: '100', status: 'recieved'},
  {position: 3, orderno:'#111', orderdate: '13-Mar-2019', retailer: 'XYZ', depot: 'BTM', transport: 'BG Transport', supplier: 'Supplier1', orderaty: '200 KL', orderamt: '100', status: 'recieved'},
  {position: 4, orderno:'#111', orderdate: '13-Mar-2019', retailer: 'XYZ', depot: 'BTM', transport: 'BG Transport', supplier: 'Supplier1', orderaty: '200 KL', orderamt: '100', status: 'recieved'},
  {position: 5, orderno:'#111', orderdate: '13-Mar-2019', retailer: 'XYZ', depot: 'BTM', transport: 'BG Transport', supplier: 'Supplier1', orderaty: '200 KL', orderamt: '100', status: 'recieved'},
  {position: 6, orderno:'#111', orderdate: '13-Mar-2019', retailer: 'XYZ', depot: 'BTM', transport: 'BG Transport', supplier: 'Supplier1', orderaty: '200 KL', orderamt: '100', status: 'recieved'},
  {position: 7, orderno:'#111', orderdate: '13-Mar-2019', retailer: 'XYZ', depot: 'BTM', transport: 'BG Transport', supplier: 'Supplier1', orderaty: '200 KL', orderamt: '100', status: 'recieved'},
  {position: 8, orderno:'#111', orderdate: '13-Mar-2019', retailer: 'XYZ', depot: 'BTM', transport: 'BG Transport', supplier: 'Supplier1', orderaty: '200 KL', orderamt: '100', status: 'recieved'},
  {position: 9, orderno:'#111', orderdate: '13-Mar-2019', retailer: 'XYZ', depot: 'BTM', transport: 'BG Transport', supplier: 'Supplier1', orderaty: '200 KL', orderamt: '100', status: 'recieved'},
  {position: 10,orderno:'#111', orderdate: '13-Mar-2019', retailer: 'XYZ', depot: 'BTM', transport: 'BG Transport', supplier: 'Supplier1', orderaty: '200 KL', orderamt: '100', status: 'recieved'},
];@Component({  selector: 'app-second',  templateUrl: './second.component.html',  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  displayedColumns: string[] = ['position', 'orderno', 'orderdate', 'retailer', 'depot', 'transport', 'supplier', 'orderaty', 'orderaty', 'status'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Pipe } from '@angular/core';
import { HomeService } from '../home.service'
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpEvent, HttpEventType, HttpParams } from '@angular/common/http'


export class Custom
{
  // orderId: string = "1234"; 
  // retailer: string = "sari";
  // depot:string= "depot123";
	// transport:string= "transport124";
	// supplier:string= "supplier";
	// quantity:string= "40";
	// amount:string= "200.00";
	// totalAmount:string= "100.00";
  // status:string= "NEW";
  item:any=[];
}


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  public count = 0;
  result: any;
  getData: any=[];
  empList: any = [];
  orderList: Custom;
  getPData: any=[];
  getDData: any=[];
  getKData: any=[];
  item:any=[];
  orderdetails={
    orderId:'',
    retailer:'',
    depot:'',
    transport:'',
    supplier:'',
    quantity:40,
    amount:200.00,
    totalAmount:100.00,
    status:"NEW",
    item:this.item
  }
  orderComplete: { orderId: string; retailer: string; depot: string; transport: string; supplier: string; quantity: number; amount: number; totalAmount: number; status: string; items: [] };
  filterId: any;
  constructor(private counterService: HomeService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.getAllData();
  }

  sections = [
    {
      title: 'Petrol',
      Avl_Qty:'78 KL',
      tk:[
        {value: 'steak-0', viewValue: 'TK1'},
        {value: 'pizza-1', viewValue: 'TK2'},
        {value: 'tacos-2', viewValue: 'TK3'}
      ],
      content: `
      <img src="../../assets/img/Screen Shot 2019-03-15 at 11.58.57 PM.png">
      `
    },
    {
      title: 'Diesel',
      Avl_Qty:'1024 KL',
      content: `
      <img src="../../assets/img/Screen Shot 2019-03-15 at 11.58.57 PM.png">
      `
    },
    {
      title: 'Kerosene',
      Avl_Qty:'0 KL',
      content: `
      <img src="../../assets/img/Screen Shot 2019-03-15 at 11.58.57 PM.png">
      `
    },
    {
      title: 'Kerosene',
      Avl_Qty:'0 KL',
      content: `
      <img src="../../assets/img/Screen Shot 2019-03-15 at 11.58.57 PM.png">
      `
    },
    {
      title: 'Kerosene',
      Avl_Qty:'0 KL',
      content: `
      <img src="../../assets/img/Screen Shot 2019-03-15 at 11.58.57 PM.png">
      `
    },
    {
      title: 'Kerosene',
      Avl_Qty:'0 KL',
      content: `
      <img src="../../assets/img/Screen Shot 2019-03-15 at 11.58.57 PM.png">
      `
    },
    {
      title: 'Kerosene',
      Avl_Qty:'0 KL',
      content: `
      <img src="../../assets/img/Screen Shot 2019-03-15 at 11.58.57 PM.png">
      `
    },
    {
      title: 'Kerosene',
      Avl_Qty:'0 KL',
      content: `
      <img src="../../assets/img/Screen Shot 2019-03-15 at 11.58.57 PM.png">
      `
    },

  ]

  public getAllData(){
   let url='http://localhost:3001/api/oil'
    return this.httpClient.get(url).subscribe((data:any)=>{
      console.log('ResponseData::' + JSON.stringify(data));
      this.result = data
      console.log('ResponseData::' + JSON.stringify(this.result));


    })
  }

  filterForeCasts(filterVal: any) {
this.filterId = filterVal;
console.log(this.filterId)    
let url1="http://localhost:3001/api/oil/"+ this.filterId;
return this.httpClient.get(url1).subscribe((data:any)=>{
  // if(filterVal === '1' || filterVal === '2'){
  this.getData = data;
  console.log('getData::' + JSON.stringify(this.getData))
  if(this.getData.oilCode === "tk1" || this.getData.oilCode === "tk2"){
    this.getPData = data;
  console.log('getPData::' + JSON.stringify(this.getPData))
} 
if(this.getData.oilCode === "tk3" || this.getData.oilCode === "tk4"){
  this.getDData = data;
  console.log('getPData::' + JSON.stringify(this.getPData))

    
}
if(this.getData.oilCode === "tk5" || this.getData.oilCode === "tk6"){
  this.getKData = data;
  console.log('getKData::' + JSON.stringify(this.getKData))
   
}
})

  }

public getOrder(){
  console.log(this.orderComplete)

  // if(this.getPData.id === 1 || this.getPData.id === 2){
  this.orderdetails.item = this.getData;
  this.empList.push(this.item);
  this.orderList = this.empList
  console.log('customObj:::'+JSON.stringify(this.empList))    
// }
// if(this.getDData.id === 3 || this.getDData.id === 4){
//   this.orderdetails.item = this.getDData;
//   this.empList.push(this.item);
//   this.orderList = this.empList
//   console.log('customObj:::'+JSON.stringify(this.empList))    
// } 
// if(this.getKData.id === 5 || this.getKData.id === 6){
//   this.item = this.getKData;
//   this.empList.push(this.item);
//   this.orderList = this.empList
//   console.log('customObj:::'+JSON.stringify(this.empList))    
// }
  // this.empList.push(customObj);
  // this.orderList = this.empList

  let url = "http://localhost:3001/api/order"
  return this.httpClient.post(url,this.orderComplete).subscribe((data:any)=>{
  console.log('data:::'+JSON.stringify(data))    
  
  })
  console.log('inc')
  this.counterService.count += 1;
}
  public incCount(){
    let url1="http://localhost:3001/api/oil/"+ this.filterId;
     
    return this.httpClient.get(url1).subscribe((data:any)=>{
      // if(filterVal === '1' || filterVal === '2'){
      this.getData = data;
      this.orderdetails.item.push(this.getData)
      this.orderComplete = this.orderdetails.item
      console.log("getPData:::" + JSON.stringify(this.orderComplete));
      for(var i = 0;i<this.orderComplete[i];i++){
        console.log('orderComplete:' + this.orderComplete[i])
      }

      // }
      // if(filterVal === '3' || filterVal === '4'){
      //   this.getDData = data;
      // console.log("getData:::" + JSON.stringify(this.getDData));

      // }
      // if(filterVal === '5' || filterVal === '6'){
      //   this.getKData = data;
      // console.log("getData:::" + JSON.stringify(this.getKData));

      // }
    });
    
  }

  

}
@Pipe({name: 'safeHtml'})
export class SafePipe {
  constructor(private sanitizer: DomSanitizer){}

  transform(style) {
    return this.sanitizer.bypassSecurityTrustHtml(style);
    //return this.sanitizer.bypassSecurityTrustStyle(style);
    // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
  }
}

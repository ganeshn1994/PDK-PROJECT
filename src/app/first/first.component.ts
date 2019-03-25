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
    console.log("filterVal::" + filterVal);
    let url="http://localhost:3001/api/oil/"+ filterVal;
     
    return this.httpClient.get(url).subscribe((data:any)=>{
      if(filterVal === '1' || filterVal === '2'){
      this.getPData = data;
      console.log("getPData:::" + JSON.stringify(this.getPData));
      }
      if(filterVal === '3' || filterVal === '4'){
        this.getDData = data;
      console.log("getData:::" + JSON.stringify(this.getDData));

      }
      if(filterVal === '5' || filterVal === '6'){
        this.getKData = data;
      console.log("getData:::" + JSON.stringify(this.getKData));

      }
    })
//     if (filterVal == "0")
//         this.forecasts = this.cacheForecasts;
//     else
//     this.forecasts = this.cacheForecasts.filter((item) => item.summary == filterVal);
// }
}

  public getCount() {
    
    return this.counterService.count
  }
  public incCount(){
    let customObj = new Custom();
    console.log(this.getPData.id)
    console.log(this.getDData.id)
    console.log(this.getKData.id)

    if(this.getPData.id === 1 || this.getPData.id === 2){
    customObj.item = this.getPData;
    this.empList.push(customObj);
    this.orderList = this.empList
    console.log('customObj:::'+JSON.stringify(this.empList))    
  }
  if(this.getDData.id === 3 || this.getDData.id === 4){
    customObj.item = this.getDData;
    this.empList.push(customObj);
    this.orderList = this.empList
    console.log('customObj:::'+JSON.stringify(this.empList))    
  } 
  if(this.getKData.id === 5 || this.getKData.id === 6){
    customObj.item = this.getKData;
    this.empList.push(customObj);
    this.orderList = this.empList
    console.log('customObj:::'+JSON.stringify(this.empList))    
  }
    // this.empList.push(customObj);
    // this.orderList = this.empList

    let url = "http://localhost:3001/api/order"
    return this.httpClient.post(url,customObj).subscribe((data:any)=>{
    console.log('data:::'+JSON.stringify(data))    
    
    })
    console.log('inc')
    this.counterService.count += 1;
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

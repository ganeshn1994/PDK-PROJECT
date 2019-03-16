import { Component, OnInit, Pipe } from '@angular/core';
import { HomeService } from '../home.service'
import {DomSanitizer} from '@angular/platform-browser';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  public count = 0;
  constructor(private counterService: HomeService) { }

  ngOnInit() {
  }

  tk: Food[] = [
    {value: 'steak-0', viewValue: 'TK1'},
    {value: 'pizza-1', viewValue: 'TK2'},
    {value: 'tacos-2', viewValue: 'TK3'}
  ];
  test : Food[] = [
    {value: 'steak-0', viewValue: 'TEST1'},
    {value: 'pizza-1', viewValue: 'TEST2'},
    {value: 'tacos-2', viewValue: 'TEST3'}
  ];
  tank: Food[] = [
    {value: 'steak-0', viewValue: 'TANK1'},
    {value: 'pizza-1', viewValue: 'TANK2'},
    {value: 'tacos-2', viewValue: 'TANK3'}
  ];
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


  public getCount() {
    
    return this.counterService.count
  }
  public incCount(){
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

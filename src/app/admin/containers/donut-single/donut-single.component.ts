import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-single',
  template: `
    <div>
      <donut-form [donut]="donut" (create)="onCreate($event)"></donut-form>
    </div>
  `,
  styles: [
  ]
})
export class DonutSingleComponent implements OnInit{
  
  donut!: Donut;
  
  ngOnInit(): void {
    this.donut = {
      id: '1u98Kl',
      name: 'Just Chocolate',
      icon: 'just-chocolate',
      price: 119,
      description: 'For pure chocolate',
      promo: 'limited'
    }
  }

  onCreate(donut: Donut){
    console.log('onCreate', donut)
  }

}

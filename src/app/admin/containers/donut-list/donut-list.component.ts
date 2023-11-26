import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-list',
  template: `
    <div>
      <ng-container *ngIf="donuts.length; else nothing">
        <donut-card 
          *ngFor="let donut of donuts; trackBy: trackById" 
          [donut]="donut"></donut-card>
      </ng-container>
      <ng-template #nothing>
        <p>No donuts here...</p>
      </ng-template>
    </div>
  `,
  styles: [
  ]
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  ngOnInit(): void {
    this.donuts = [
      {
        id: '1u98Kl',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 119,
        description: 'For pure chocolate',
        promo: 'limited'
      },
      {
        id: '2u98Kl',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        description: 'Sticky perfection',
        promo: 'new'
      },
      {
        id: '3u98Kl',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chcolate drizzled with caramel'
      }
    ];
  }

  trackById(index: number, value: Donut) {
    return value.id;
  }

}

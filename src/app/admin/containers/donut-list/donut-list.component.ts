import { Component, OnInit } from '@angular/core';
import { DonutService } from '../../services/donut.service';
import { RouterModule } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';

import { Donut } from '../../models/donut.model';
import { DonutCardComponent } from '../../components/donut-card/donut-card.component';

@Component({
  standalone: true,
  imports: [RouterModule, NgIf, NgForOf, DonutCardComponent],
  selector: 'donut-list',
  template: `
    <div>
      <div class="donuts-list-actions">
        <a routerLink="new" class="btn--green">
          New Donut
          <img src="/assets/img/icon/plus.svg">
        </a>
      </div>
      
      <ng-container *ngIf="donuts?.length; else nothing">
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
    `
      .donuts-list{
        &-actions{
          margin: 10px;
        }
      }
    `
  ]
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor(private donutService: DonutService) { }

  ngOnInit(): void {
    this.donutService.read().subscribe((donuts: Donut[]) => this.donuts = donuts);
  }

  trackById(index: number, value: Donut) {
    return value.id;
  }

}

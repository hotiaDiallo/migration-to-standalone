import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

// containers
import { DonutListComponent } from './containers/donut-list/donut-list.component';
import { DonutSingleComponent } from './containers/donut-single/donut-single.component';

// components
import { DonutCardComponent } from './components/donut-card/donut-card.component';
import { DonutFormComponent } from './components/donut-form/donut-form.component';


// services

// guards

// directives

export const AdminRoutes: Routes = [
  { path: 'donuts', loadComponent: () => import('./containers/donut-list/donut-list.component').then(x => x.DonutListComponent) },
  { path: 'donuts/new', loadComponent: () => import('./containers/donut-single/donut-single.component').then(x => x.DonutSingleComponent), data: { isEdit: false } },
  { path: 'donuts/:id', loadComponent: () => import('./containers/donut-single/donut-single.component').then(x => x.DonutSingleComponent), data: { isEdit: true } },
  { path: '', pathMatch: 'full', redirectTo: 'donuts' }
]

/* @NgModule({
  declarations: [
    DonutListComponent,
    DonutCardComponent,
    DonutSingleComponent,
    DonutFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
})
export class AdminModule { } */

import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  private donuts: Donut[] = [
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

  constructor() { }

  read() {
    return this.donuts;
  }

  readOne(id: string) {
    const donut = this.read().find((donut: Donut) => donut.id === id);

    if (donut) {
      return donut;
    }
    return { name: '', price: 0, icon: '', description: '' }
  }

  create(payload: Donut) {
    this.donuts = [...this.donuts, payload];
    console.log(this.donuts);
  }

  update(payload: Donut) {
    this.donuts = this.donuts.map((donut: Donut) => {
      if (donut.id === payload.id) {
        return payload;
      }
      return donut;
    })
    console.log(this.donuts);
  }

  delete(payload: Donut) {
    this.donuts = this.donuts.filter((donut: Donut) => donut.id !== payload.id)
    console.log(this.donuts);
  }


}

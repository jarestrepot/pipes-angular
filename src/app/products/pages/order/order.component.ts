import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | null = 'canFly';
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red
    },
    {
      name: 'WonderWoman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.yellow
    },
    {
      name: 'Linterna verde',
      canFly: true,
      color: Color.green
    },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  };

  changeOrder( value: keyof Hero ): void {
    this.orderBy = value;
  }
}

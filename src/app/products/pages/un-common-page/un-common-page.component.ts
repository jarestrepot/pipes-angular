import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-un-common-page',
  templateUrl: './un-common-page.component.html',
  styles: [
  ]
})
export class UnCommonPageComponent {

  //  i18nSelect
  public name:string = 'Javier'
  public gender: 'male' | 'female' = 'male';
  public invitacionMap = {
    male:'ivitarlo',
    female:'invitarla'
  }

  changeClient():void {
    this.name = 'Valentina';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = [
    'Javier', 'Valentina', 'Olga', 'Luisa', 'Maria', 'Alberto', 'Fernando'
  ];

  public clientsMap = {
    '=0': 'No tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    'other': 'tenemos # clientes esperando',
  }

  deleteClient():void {
    this.clients.pop();
  }

  // KeyValue Pipe
  // Convierte el valor de un objeto en algo iterable con su key y valor.
  public person = {
    name: 'Javier',
    age: 25,
    address: 'Barcelona, España'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap( value => console.log(value) )
    );

  public promiseValue: Promise<string> = new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve( 'Data of promise '), 3000)
  })
}

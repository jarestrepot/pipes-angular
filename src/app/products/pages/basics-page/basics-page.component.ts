import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLowerCase: string = 'javier restrepo';
  public nameToUpperCase: string = 'JAVIER RESTREPO';
  public fullName:string = 'JaVIEr REStrEpo';

  public customDate: Date = new Date();
}

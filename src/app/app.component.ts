import { Component } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pipes page';

  name = 'Allan';

  badName = 'allan eStradA HernANdez';

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  theNumber = 0.234;

  salary = 1234.5;

  heroe = {
    name: 'Bruce',
    nickname: 'Hulk',
    age: 52,
    address: {
      street: '200 S Crescent Dr, Beverly Hills'
    }
  };

  thePromise = new Promise( ( resolve, reject ) => {

    setTimeout(() => resolve('Data is here'), 3500 );

  });

  theDate = new Date();

  videoId = 'tAGnKpE4NCI';

  show:boolean = true;

}

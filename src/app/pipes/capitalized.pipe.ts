import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalized' })
export class CapitalizedPipe implements PipeTransform {
    transform( value: string ): string {

        value = value.toLocaleLowerCase();

        let nombres = value.split(" ");

        for (let i in nombres) {
            nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
        }
        
        return nombres.join(" ");
    }
}
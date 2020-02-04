import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordview'
})
export class PasswordviewPipe implements PipeTransform {

  transform(value: string, show: boolean = true): any {
    
    if (show) {

      let theOutput:string = "";

      for (let i = 0; i < value.length; i++) {
        
        theOutput += "*"
        
      }

      return theOutput;

    }else {
      return value;
    }

  }

}

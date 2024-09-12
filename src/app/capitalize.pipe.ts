import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log("OLD : ", value, " NEW ", value.charAt(0).toUpperCase() + value.substring(1))
    return value.charAt(0).toUpperCase() + value.substring(1);
  }

}

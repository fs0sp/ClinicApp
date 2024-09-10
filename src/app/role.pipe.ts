import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role',
  standalone: true
})


export class RolePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const prefixes: any = {
      doctor: "Dr",
      reception: "Re"
  };
  
  return prefixes[value] || "";
  }

}

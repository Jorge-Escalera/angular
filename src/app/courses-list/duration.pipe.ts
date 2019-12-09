import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(minutes: any, ...args: any[]): any {
    return Math.floor(minutes / 60) + 'h ' + minutes % 60 + 'min';
  }

}

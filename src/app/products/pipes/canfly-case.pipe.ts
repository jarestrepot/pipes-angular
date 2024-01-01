import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canfly'
})

export class CanFlyCasePipe implements PipeTransform {

  transform(value: boolean): 'Can fly' | "Can't fly" {
    return value ? 'Can fly' : "Can't fly";
  }
}


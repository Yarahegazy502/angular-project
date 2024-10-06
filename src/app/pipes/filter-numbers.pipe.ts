import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNumbers'
})
export class FilterNumbersPipe implements PipeTransform {

  transform(arr: number[], filterNum: number): number[] {
    return arr.filter((item: number) => item > filterNum);
  }

}

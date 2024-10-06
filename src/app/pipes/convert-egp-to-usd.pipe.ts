import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertEgpToUsd'
})
export class ConvertEgpToUsdPipe implements PipeTransform {

  transform(value: number, rate: number): unknown {
    return value * rate;
  }

}

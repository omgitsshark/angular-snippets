import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformString',
})
export class TransformStringPipe implements PipeTransform {
  transform(str: string, replaceRule: RegExp = new RegExp(/\s/g), replaceSymbol: string = '_'): string {
    return str.toLowerCase().replace(replaceRule, replaceSymbol);
  }
}

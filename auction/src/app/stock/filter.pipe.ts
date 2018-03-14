import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], field: string, keyword: string): any {
    if (!field || !keyword) {
      return list;
    }
    return list.filter(item => {
      var itemField = item[field];
      return itemField.indexOf(keyword) >= 0;
    });
  }

}

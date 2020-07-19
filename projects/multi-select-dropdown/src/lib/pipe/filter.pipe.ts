import { PipeTransform, Pipe } from '@angular/core';
import { IDataModel } from '../config';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: IDataModel[], filterBy: string, valueField: string): any {
        if (!items || !filterBy) {
            return items;
        }
        return items.filter(item => String(item.data[valueField]).toLowerCase().indexOf(filterBy.toLowerCase()) !== -1);
    }
}

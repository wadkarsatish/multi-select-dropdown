import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IMultiSelectConfig, IDataModel } from './config';

@Component({
  selector: 'lib-multi-select-dropdown',
  templateUrl: 'multi-select-dropdown.component.html',
  styleUrls: ['multi-select-dropdown.component.scss']
})
export class MultiSelectDropdownComponent implements OnChanges {
  @Input() public config: IMultiSelectConfig;
  public isOpen = false;
  public datasource: IDataModel[] = [];
  public filter: string;
  constructor() { }

  ngOnChanges(change: SimpleChanges): void {
    this.config.selectedItems = this.formatDatasouce(this.config.selectedItems, true);
    this.datasource = this.formatDatasouce(this.config.data, false);
    // set items selected

    const items = this.datasource.filter(x => this.config.selectedItems.some(y => y.data[this.config.valueField] ===
      x.data[this.config.valueField]));
    items.forEach((item) => item.checked = true);
  }

  public onSelect(item: any, value: boolean): void {
    if (value) {
      if (!this.config.selectedItems) {
        this.config.selectedItems = [];
      }
      this.config.selectedItems.push(item);
    } else {
      this.remove(item);
    }
  }

  public remove(item): void {
    const indx = this.config.selectedItems.findIndex((x: IDataModel) => x.data[this.config.valueField] ===
      item.data[this.config.valueField]);
    const datasoureItem = this.datasource.find((x: IDataModel) => x.data[this.config.valueField] === item.data[this.config.valueField]);

    if (indx !== -1) {
      this.config.selectedItems.splice(indx, 1);
    }
    if (datasoureItem) {
      datasoureItem.checked = false;
    }
  }

  private formatDatasouce(data: any[], checkedValue: boolean): any[] {
    return data.map(x => {
      const val: IDataModel = {
        data: x,
        checked: checkedValue
      };

      return val;
    });
  }
}

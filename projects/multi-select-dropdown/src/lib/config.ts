export interface IMultiSelectConfig {
    keyField: string;
    valueField: string;
    data: any[];
    selectedItems?: any[];
    selectionLimit?: number;
    showFilter?: boolean;
    filterPlaceholder?: string;
    disabled?: boolean;
}

export interface IDataModel {
    data: any[];
    checked: boolean;
}

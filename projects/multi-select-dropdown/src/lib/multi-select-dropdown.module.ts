import { NgModule } from '@angular/core';
import { MultiSelectDropdownComponent } from './multi-select-dropdown.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';


@NgModule({
  declarations: [
    MultiSelectDropdownComponent,
    FilterPipe
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    MultiSelectDropdownComponent,
    FilterPipe
  ]
})
export class MultiSelectDropdownModule { }

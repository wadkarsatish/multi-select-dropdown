import { Component } from '@angular/core';
import { IMultiSelectConfig } from './../../projects/multi-select-dropdown/src/lib/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'library-demo';

  config: IMultiSelectConfig = {
    keyField: 'key',
    valueField: 'value',
    selectionLimit: 5,
    showFilter: true,
    filterPlaceholder: 'Filter',
    disabled: false,
    data: [
      { key: '1', value: 'JavaScript' },
      { key: '2', value: 'Python' },
      { key: '3', value: 'Java' },
      { key: '4', value: 'Go' },
      { key: '5', value: 'C++' },
      { key: '6', value: 'TypeScript' },
      { key: '7', value: 'Ruby' },
      { key: '8', value: 'PHP' },
      { key: '9', value: 'C#' },
      { key: '10', value: 'C' },
      { key: '11', value: 'Shell' },
      { key: '12', value: 'Scala' },
      { key: '13', value: 'Rust' },
      { key: '14', value: 'Swift' },
      { key: '15', value: 'Kotlin' },
      { key: '16', value: 'Dart' },
      { key: '17', value: 'Objective-C' },
      { key: '18', value: 'Groovy' },
      { key: '19', value: 'Elixir' },
      { key: '20', value: 'DM' },
      { key: '21', value: 'Perl' },
      { key: '22', value: 'PowerShell' },
      { key: '23', value: 'Lua' },
      { key: '24', value: 'EmacsLisp' },
      { key: '25', value: 'TSQL' },
      { key: '26', value: 'CoffeeScript' },
      { key: '27', value: 'Clojure' },
      { key: '28', value: 'Haskell' },
      { key: '29', value: 'Vimscript' },
      { key: '30', value: 'OCaml' },
      { key: '31', value: 'Jsonnet' },
      { key: '32', value: 'R' },
      { key: '33', value: 'Erlang' },
      { key: '34', value: 'Julia' },
      { key: '35', value: 'Coq' },
      { key: '36', value: 'MATLAB' },
      { key: '37', value: 'Fortran' },
      { key: '38', value: 'F#' },
      { key: '39', value: 'Puppet' },
      { key: '40', value: 'Vala' },
      { key: '41', value: 'Smalltalk' },
      { key: '42', value: 'Crystal' },
      { key: '43', value: 'VisualBasic.NET' },
      { key: '44', value: 'WebAssembly' },
      { key: '45', value: 'Nix' },
      { key: '46', value: 'ABAP' },
      { key: '47', value: 'Elm' },
      { key: '48', value: 'Objective-C++' },
      { key: '49', value: 'CommonLisp' },
      { key: '50', value: 'PureScript' }
    ],
    selectedItems: [
      { key: '1', value: 'JavaScript' },
      { key: '2', value: 'Python' },
      { key: '3', value: 'Java' }
    ]
  };
}

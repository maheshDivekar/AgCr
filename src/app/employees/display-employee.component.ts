// import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component, OnInit, Input ,  SimpleChanges   } from '@angular/core';
import {Employee} from '../Models/employee.model';
@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
// export class DisplayEmployeeComponent implements OnInit, OnChanges {

//   @Input() employee: Employee;
//   constructor() { }

//   ngOnInit() {
//   }

//   ngOnChanges(changes: SimpleChanges) {
//   //  console.log(changes);
//   const prevoiusEmployee = <Employee>changes.employee.previousValue;
//   const currentEmployee = <Employee>changes.employee.currentValue;

//   console.log('Previous: ' + ( prevoiusEmployee ? prevoiusEmployee.name : 'NULL' ));
//   console.log('Current: ' + currentEmployee.name);
//   }
// }

export class DisplayEmployeeComponent implements OnInit  {
private _employee: Employee;
  @Input()
  set employee(val: Employee) {
    console.log('Previous: ' + ( this._employee ? this._employee.name : 'NULL' ));
   console.log('Current: ' + val.name);
    this._employee = val;

  }
  get employee(): Employee {
    return this._employee;
  }
  constructor() { }

  ngOnInit() {
  }
}

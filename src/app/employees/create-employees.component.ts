import { Component, OnInit } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';

import {Employee} from '../Models/employee.model';
import {Department} from '../Models/department.model';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { EmployeeService } from './employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {

  // for default behaviour
  gender = 'male';
  isActive = true;
   department = '3';
// end default behaviour
  previewPhoto = false;
   datePickerConfig: Partial<BsDatepickerConfig>;
   employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email : null,
    phoneNumber : null,
    contactPrefernce: null,
    dateOfBirth: null,
   // department: null,
    department: 'select',
    isActive: null,
    photoPath : null
   };
  departments: Department[] = [
 {
   id: 1,
   name: 'IT',

 },
 {
  id: 2,
  name: 'Support',

},
{
  id: 3,
  name: 'HR',

},
{
  id: 4,
  name: 'Account',

},
  ];
  constructor( private _employeeservice: EmployeeService,
    private _router: Router) {
    this.datePickerConfig = Object.assign({},
       {
         containerClass: 'theme-dark-blue',
          showWeekNumbers: false,
          minDate: new Date(1979, 8, 19),
          maxDate: new Date(2018, 8, 19),
          dateInputFormat: 'DD/MM/YYYY',

       });
   }

   togglePhotoPreview() {
     this.previewPhoto = ! this.previewPhoto;
   }
  ngOnInit() {
  }
  saveEmployee(): void {
    // console.log(EmpForm);
    this._employeeservice.save(this.employee);
    this._router.navigate(['list']);
   }

}


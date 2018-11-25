import { Component, OnInit } from '@angular/core';
import {Employee} from '../Models/employee.model';
@Component({
 // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesoldComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name: 'Mahesh',
      gender: 'Male',
    email: 'mahesh@rediffmail.com',
    phoneNumber: 123456,
    contactPrefernce: 'Email',
    dateOfBirth: new Date('10/25/1979'),
    department: 'IT',
    isActive: true,
    photoPath: 'assets/images/mahesh.png'
    },
    {
      id: 2,
      name: 'megha',
      gender: 'Male',
    email: 'mahesh@rediffmail.com',
    phoneNumber: 123456,
    contactPrefernce: 'Email',
    dateOfBirth: new Date('10/25/1979'),
    department: 'IT',
    isActive: true,
    photoPath: 'assets/images/megha.png'
    },
    {
      id: 3,
      name: 'mandar',
      gender: 'Male',
    email: 'mahesh@rediffmail.com',
    phoneNumber: 123456,
    contactPrefernce: 'Email',
    dateOfBirth: new Date('10/25/1979'),
    department: 'IT',
    isActive: true,
    photoPath: 'assets/images/mandar.png'
    },
    ];

  constructor() { }

  ngOnInit() {
  }

}

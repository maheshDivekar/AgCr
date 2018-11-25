import {Injectable} from '@angular/core';
import {Employee} from '../Models/employee.model';

@Injectable()
export class EmployeeService {

    private listEmployees: Employee[] = [
        {
          id: 1,
          name: 'Mahesh',
          gender: 'Male',
        email: 'mahesh@rediffmail.com',
        phoneNumber: 123456,
        contactPrefernce: 'Email',
        dateOfBirth: new Date('10/25/1979'),
        department: '1',
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
        department: '2',
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
        department: '3',
        isActive: true,
        photoPath: 'assets/images/mandar.png'
        },
        ];
getEmployees(): Employee[] {
    return this.listEmployees;
}
save(employee: Employee) {
    this.listEmployees.push(employee);
}
}

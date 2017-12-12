import { Component, OnInit } from '@angular/core';
import { Employee } from './employee'

@Component({
  selector: 'app-employee', // custom html tag which can be used in other class.
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  // following can be used in place of template url for inline html;
  // template:'<h1> from the inline template </h1>' 
})
export class EmployeeComponent {
  name: string = "Vijay";
  lname: string = "Velaga";
  empId: number = 11158;
  visible: boolean = false;

  employeeList: Employee[] = [
    { id: 1, name: "vijay", dob: new Date(), salary: 90000, address: "hyderabad" },
    { id: 2, name: "velaga", dob: new Date(), salary: 80000, address: "guntur" },
    { id: 3, name: "varun", dob: new Date(), salary: 70000, address: "mbn" },
    { id: 4, name: "mulinti", dob: new Date(), salary: 50000, address: "coimbatore" }
  ];

  empRole:string = "student";
  removediv() {
    this.visible = !(this.visible);
  }




}

import { Component } from '@angular/core';
interface Employee{
  name: string;
  employeeId: string;
  department: string;
  qualification: string;
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  fruits = ['Apple', 'Orange', 'Banana', 'Grapes'];
  employees: Employee[] = [
    {
      name: 'John Doe',
      employeeId: 'E12345',
      department: 'IT',
      qualification: 'B.Sc. in Computer Science'
    },
    {
      name: 'Jane Smith',
      employeeId: 'E67890',
      department: 'HR',
      qualification: 'MBA in Human Resources'
    }
    // Add more employees as needed
  ];

}

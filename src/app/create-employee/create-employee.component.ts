import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myArray = [1, 2, 3, 4, 5, 6];
  
  addNew(){
    this.myArray.push(this.myArray.length + 1);
    console.log(this.myArray);
  }
}

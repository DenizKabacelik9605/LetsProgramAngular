import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { EmployeeModel } from './employee-dashboard.model';
import {ApiService} from '../shared/api.service';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue!:FormGroup;
  employeeModelObj:EmployeeModel=new EmployeeModel();

  constructor(private formBuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {

    this.formValue=this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      salary:['']


    })
  }
    postEmployeeDetails(){
      console.log("method run");
      this.employeeModelObj.firstName=this.formValue.value.firstName;
      this.employeeModelObj.lastName=this.formValue.value.lastName;
      this.employeeModelObj.email=this.formValue.value.email;
      this.employeeModelObj.mobile=this.formValue.value.salary;
      this.employeeModelObj.salary=this.formValue.value.salary;

      this.api.postEmployee(this.employeeModelObj).subscribe(res=>

        {console.log(res);
        alert("Employee Added Successfully")
        },

        err=>{
          alert("Something went wrong")
        }
        )
    }
}
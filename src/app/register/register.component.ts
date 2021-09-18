import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  constructor(private userService:UserService,
    private router: Router) { }
  onSubmit(){
    this.userService.addUser(this.registrationForm.value);
    this.router.navigate(['list'])
  }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      number: new FormControl(null, [Validators.required,Validators.pattern('^[0-9]{10}$')]),
      password: new FormControl(null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
    });
  }

  errorMsg() {
    return this.registrationForm.controls;
  }

}

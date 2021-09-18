import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  invalidCre=false
  email!: string;
  password!: string;

  loginForm= new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  constructor(private userService:UserService,
    private router: Router) {   
  }

  onSubmit(data:any){
    const token=this.userService.logUser(data.value);
    const val = this.loginForm.value;
    if(token){
      localStorage.setItem('token',token.username)
      console.log("login is Sucessful");
      this.router.navigate(['list'])
    }
    else{
      console.log("login not Sucessful");
      this.invalidCre=true;

    }
  }
  ngOnInit(): void {
  }
  errorMsg() {
    return this.loginForm.controls;
  }
}

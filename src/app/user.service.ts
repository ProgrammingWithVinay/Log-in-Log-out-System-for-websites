import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
   logUser(user:any){
    let UserArray = [];
    if(localStorage.getItem("Users")){
      UserArray= JSON.parse(localStorage.getItem("Users") || '{}');
    }
    return UserArray.find((p: { username: any; password: any; }) =>p.username=== user.email && p.password=== user.password);
  }
  addUser(user:any){
    let UserArray = [];
    if(localStorage.getItem('Users')){
      UserArray= JSON.parse(localStorage.getItem("Users") || '{}');
      UserArray=[user, ...UserArray];
    }
    else{
      UserArray=[user];
    }
    localStorage.setItem('Users',JSON.stringify(UserArray))
  }
}

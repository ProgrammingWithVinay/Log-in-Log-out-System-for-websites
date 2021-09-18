import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  elements=new Array();
  UserArray :any[] = [];
  
  constructor(private router:Router,
    public userservice:UserService) { 
      let i=0;
      this.UserArray = JSON.parse(localStorage.getItem("Users") || '{}');
      for(let j=0;j<this.UserArray.length;j++){
        this.elements.push(this.UserArray[j].email).toString()
      }
      
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  private daysMonth = new Array(30);

  public days:string ="";
  constructor(public route:Router) { 
    this.daysMonth.forEach(day=> {day<this.daysMonth.length
     this.days[day]
    });
  }

  ngOnInit(): void {
  }

  
  

  


}

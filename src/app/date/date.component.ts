import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
//class definition
export class DateComponent implements OnInit {

  dateMessage: string;
  someNumber: number = 12;

  constructor() { 
    setInterval(() =>{
      let currentDate = new Date();

      this.dateMessage = currentDate.toDateString() + " " + currentDate.toLocaleTimeString();
    }, 1000)
    
  }

  ngOnInit() {
  }

  addTwoNumbers(a: number, b: number){
    return a + b;
  }

}

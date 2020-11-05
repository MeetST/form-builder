import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login() {
    window.location.href = "http://localhost:4200/auth/google";
  }

}

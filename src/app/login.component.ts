import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';

  constructor(){}

  ngOnInit(): void {
    console.log("ngOnInit() fired");
  }

  myEvent(event) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
  }
}

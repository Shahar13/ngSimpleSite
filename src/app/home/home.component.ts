import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Object;

  constructor(private data: DataService) {

  }

  ngOnInit() {
    // get users on load
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }


}

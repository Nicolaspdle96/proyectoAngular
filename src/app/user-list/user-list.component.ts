import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private abilities: any = [];
  constructor() { 
    this.abilities.push("C");
    this.abilities.push("C++");
    this.abilities.push("Java");
    this.abilities.push("Python");
    this.abilities.push("C#");
    this.abilities.push("Spring");
  }

  ngOnInit() {
  }

}

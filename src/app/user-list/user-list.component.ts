import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private habilidades: any = [];
  constructor(private http: Http) { 

  }

  ngOnInit() {
    let url = 'http://localhost:3000/habilidades/'
    this.http.get(url).subscribe((response:any) => {
        this.habilidades = JSON.parse(response._body);
         })
  }

}

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-user-list3',
  templateUrl: './user-list3.component.html',
  styleUrls: ['./user-list3.component.css']
})
export class UserList3Component implements OnInit {

  private perfil: any = [];
  constructor(private http: Http) { }

  ngOnInit() {
    let url = 'http://localhost:3000/perfil/'
    this.http.get(url).subscribe((response:any) => {
        this.perfil = JSON.parse(response._body);
         })
  }

}

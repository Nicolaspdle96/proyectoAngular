import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-user-list2',
  templateUrl: './user-list2.component.html',
  styleUrls: ['./user-list2.component.css']
})
export class UserList2Component implements OnInit {

  private educacion: any = [];
  constructor(private http: Http) {
   }

  ngOnInit() {
    let url = 'http://localhost:3000/educacion/'
    this.http.get(url).subscribe((response:any) => {
        this.educacion = JSON.parse(response._body);
         })
  }

}

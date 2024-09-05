import { Component, OnInit } from '@angular/core';
import { from, map, mergeMap, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-module-nine',
  templateUrl: './module-nine.component.html',
  styleUrls: ['./module-nine.component.css']
})
export class ModuleNineComponent implements OnInit {

  member: Observable<{ id: number, name: string }[]>;


  constructor(private http: HttpClient) {
    //Creation of Observables  
    this.member = of([
      {id: 1, name: 'Robb'},
      {id: 2, name: 'Lisa'},
      {id: 3, name: 'Max'},
      {id: 4, name: 'Nong'},
      {id: 5, name: 'Philee'},
      {id: 6, name: 'Dong'}
    ]);
  }
  userIds = [1, 2, 3, 4, 5];

  ngOnInit(): void {  }

  showMargeMapContent(){

    from(this.userIds).pipe(
      mergeMap(id => this.getUserDetails(id)) // Using mergeMap to handle each user ID
    ).subscribe(user => {
      console.log('User Details:', user); // Logs each user's details as they are fetched
    });
  }
  getUserDetails(id: number) {
    // Simulating an HTTP GET request to fetch user details by ID
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
  
  showMappedContent(){

    this.member.pipe(map(data => data.map(item=> item.name)))
    .subscribe(res => {
      console.log(res)
    });
  }

  showFilterContent(){

    this.member.pipe(map(data => data.filter(item=> item.name == 'Robb')))
    .subscribe(res => {
      console.log(res)
    });
  }
}

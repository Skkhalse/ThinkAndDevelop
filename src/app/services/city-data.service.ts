import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class cityDataService {

  constructor() { }
  getCityData(){
    return [
      {
        name: "Pune", State: "Maharashtra"
      },
      {
        name: "Agra", State: "Delhi"
      },
      {
        name: "Chennai", State: "Andhra Pradesh"
      }
    ];
  }

}

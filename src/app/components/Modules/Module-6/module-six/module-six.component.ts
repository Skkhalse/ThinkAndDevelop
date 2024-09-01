import { Component } from '@angular/core';
import { cityDataService } from 'src/app/services/city-data.service';
@Component({
  selector: 'app-module-six',
  templateUrl: './module-six.component.html',
  styleUrls: ['./module-six.component.css']
})
export class ModuleSixComponent {
  cityDetailsList : any;
  constructor(private cityDetails:cityDataService)
  {
    this.cityDetailsList = cityDetails.getCityData();
  }

}

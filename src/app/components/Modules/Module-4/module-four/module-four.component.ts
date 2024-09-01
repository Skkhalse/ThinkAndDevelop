import { Component } from '@angular/core';
import { cityDataService } from '../../../../../app/services/city-data.service';
@Component({
  selector: 'app-module-four',
  templateUrl: './module-four.component.html',
  styleUrls: ['./module-four.component.css']
})
export class ModuleFourComponent {
cityDetails:any;
constructor(private getCity:cityDataService){
  this.cityDetails = getCity.getCityData()
}


  Interpolation:string = "This is Interpolation value bind by varible";
  isShowBtn : boolean = true;
  arrayList : string [] = ['Mumbai','Pune','bangalore','Delhi'];
  toggleIsShowBtn(){
    if(this.isShowBtn){
      this.isShowBtn = false
    }else{
      this.isShowBtn = true;
    }
  }
    
}

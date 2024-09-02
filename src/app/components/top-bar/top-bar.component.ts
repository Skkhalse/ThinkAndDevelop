import { Component } from '@angular/core';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  isUserLoggedIn:boolean=false;

  
  constructor(private authService:authService){
    this.isUserLoggedIn = this.authService.isLoggedIn;
  }
  logIn(){
    this.authService.logIn();
    this.isUserLoggedIn = this.authService.isLoggedIn;
  }
  logOut(){
    this.authService.logOut();
    this.isUserLoggedIn = this.authService.isLoggedIn;
  }

}

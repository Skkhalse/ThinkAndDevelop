import { Component } from '@angular/core';
import { authService } from './services/auth.service';
import { authGuardService } from './services/guards/auth-guards.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[authService,authGuardService]
})
export class AppComponent {
  title = 'ThinkAndDevelop';
}

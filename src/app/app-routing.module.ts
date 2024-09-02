import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { authGuardService } from './services/guards/auth-guards.service';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'welcome/:id',
    component:WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

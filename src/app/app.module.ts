import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryButtonDirective } from './directives/primary-button.directive';
import { HomePageComponent } from './components/home/home-page.component';
import { ModuleFourComponent } from './components/Modules/Module-4/module-four/module-four.component';
import { ModuleFiveComponent } from './components/Modules/Module-5/module-five/module-five.component';
import { AboutComponent } from './components/about/about.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ModuleSixComponent } from './components/modules/Module-6/module-six/module-six.component';
import { ModuleSevenComponent } from './components/modules/Module-7/module-seven/module-seven.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryButtonDirective,
    HomePageComponent,
    ModuleFourComponent,
    ModuleFiveComponent,
    ModuleSixComponent,
    AboutComponent,
    TopBarComponent,
    ModuleSevenComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

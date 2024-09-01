import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryButtonDirective } from './directives/primary-button.directive';
import { HomePageComponent } from './components/home/home-page.component';
import { ModuleFourComponent } from './components/Modules/Module-4/module-four/module-four.component';
import { ModuleFiveComponent } from './components/Modules/Module-5/module-five/module-five.component';
import { ModuleSixComponent } from './components/modules/Module-6/module-six/module-six.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryButtonDirective,
    HomePageComponent,
    ModuleFourComponent,
    ModuleFiveComponent,
    ModuleSixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

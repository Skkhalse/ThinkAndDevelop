import { Component } from '@angular/core';

@Component({
  selector: 'app-module-seven',
  templateUrl: './module-seven.component.html',
  styleUrls: ['./module-seven.component.css']
})
export class ModuleSevenComponent {
  
  enteredUserName :string= ''

  updateUserName(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.enteredUserName = inputElement.value;
  }
}

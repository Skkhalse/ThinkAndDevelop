import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-module-eight',
  templateUrl: './module-eight.component.html',
  styleUrls: ['./module-eight.component.css']
})
export class ModuleEightComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,private http:HttpClient) {
    this.form = this.fb.group({
      name: [''],
      projectName: ['']
    });
  }



  onSave() {
    const postData = this.form.value;
    this.http.post('https://thinkanddevelop-19c45-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',postData).subscribe({
      next: (response) => {
        console.log('Response:', response);
        // Additional response handling logic
      },
      error: (error) => {
        console.error('There was an error!', error);
        // Error handling logic
      }
    });
  }
}

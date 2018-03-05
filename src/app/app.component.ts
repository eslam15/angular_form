import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;

  submitted = false;
  passPattern = "(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&_*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$";
 

  onSubmit() {
    this.submitted = true;
  }
}

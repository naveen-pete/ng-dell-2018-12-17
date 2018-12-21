import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PasswordValidation } from '../common/password-validation';

@Component({
  selector: 'app-register-user-rf',
  templateUrl: './register-user-rf.component.html',
  styleUrls: ['./register-user-rf.component.css']
})
export class RegisterUserRfComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      // define your control in you form
      password: [''],
      confirmPassword: ['']
    }, {
      validator: PasswordValidation.MatchPassword // your validation method
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.form);
  }
}

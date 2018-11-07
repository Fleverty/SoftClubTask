import { Component, Output, EventEmitter, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user/user-model';

@Component({
  selector: 'app-adding-form',
  templateUrl: './adding-form.component.html',
  styleUrls: ['./adding-form.component.css'],
})

export class AddingFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}

  @Output() newUser: EventEmitter<User> = new EventEmitter();
  user: User;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nickname: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      email: ['', Validators.email]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    event.stopPropagation();
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.user = Object.assign({}, this.registerForm.value);
    this.newUser.emit(this.user);
  }
}

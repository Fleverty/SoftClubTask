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
  @Output() newUser: EventEmitter<User> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nickname: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      email: ['', Validators.email]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() { // передача данных пользователя, если всё ок
    event.stopPropagation();
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.newUser.emit(Object.assign({}, this.registerForm.value));
  }
}

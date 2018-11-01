import { Component, Output, EventEmitter, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../core/user-model';

@Component({
  selector: 'app-adding-form',
  templateUrl: './adding-form.component.html',
  styleUrls: ['./adding-form.component.css'],
})

export class AddingFormComponent implements OnInit {

  // @Output() nicknameChange: EventEmitter<string> = new EventEmitter();
  // @Output() emailChange: EventEmitter<string> = new EventEmitter();
  // nickname: String = '';
  // email: String = '';

  // changeNick(nick: string) {
  //   if (this.nickname !== nick) {
  //     this.nickname = nick;
  //     this.nicknameChange.emit(nick);
  //   }
  // }
  // changeEmail(email: string) {
  //   if (this.email !== email) {
  //     this.email = email;
  //     this.emailChange.emit(email);
  //   }
  // }

  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}

  @Output() newUser: EventEmitter<User> = new EventEmitter();
  user: User;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nickname: ['', Validators.required, Validators.maxLength(20)],
      email: ['', Validators.email]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.user = Object.assign({}, this.registerForm.value);
    console.log(this.user);
    this.newUser.emit(this.user);
  }
}

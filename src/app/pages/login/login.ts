import { Component, signal } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginPage {
  protected readonly title = signal('Login Page');
}

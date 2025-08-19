import { Component, input } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: true,
  templateUrl: './error.html',
})
export class ErrorComponent {
  message = input<string | undefined>();
}

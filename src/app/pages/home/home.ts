import {
  Component,
  inject,
  OnInit,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { Jsonplaceholder } from '../../services/jsonplaceholder';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'home-page',
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [Card],
  encapsulation: ViewEncapsulation.None,
})
export class HomePage implements OnInit {
  users = signal<any[]>([]);

  private userService = inject(Jsonplaceholder);
  private loading = signal<boolean>(true);
  private error = signal<string | null>(null);

  ngOnInit() {
    this.loadUsers();
  }

  setFallbackImage(event: Event, userName: string): void {
    const target = event.target as HTMLImageElement;
    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      userName
    )}`;
  }

  private async loadUsers() {
    this.loading.set(true);
    this.error.set(null);
    try {
      const users = await this.userService.getUsers();
      this.users.set(users);
    } catch (err) {
      this.error.set('Failed to load users');
      console.error(err);
    }
    this.loading.set(false);
  }
}

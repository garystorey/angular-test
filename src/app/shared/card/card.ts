import { Component, input, output } from '@angular/core';
import { User } from '../../types/user';
import { Post } from '../../types/post';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  user = input<User>();
  post = input<Post | null>();
  showPosts = output<number>();

  onShowPosts() {
    const user = this.user();
    if (user) {
      this.showPosts.emit(user.id);
    }
  }
}

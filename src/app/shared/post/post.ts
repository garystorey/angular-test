import { Component, input } from '@angular/core';
import { Post } from '../../types/post';
import { User } from '../../types';

@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class PostComponent {
  post = input.required<Post>();
  user = input.required<User>();
}

import { Component, input } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { Post, User } from '../../types';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class PostComponent {
  post = input.required<Post>();
  user = input.required<User>();
}

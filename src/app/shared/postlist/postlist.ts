import { Component, input, signal, OnInit, inject } from '@angular/core';
import { Post, User } from '../../types';
import { Jsonplaceholder } from '../../services/jsonplaceholder';
import { PostComponent } from '../post/post';
import { LoadingComponent } from '../loading/loading';
import { ErrorComponent } from '../error/error';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent, LoadingComponent, ErrorComponent],
  templateUrl: './postlist.html',
  styleUrl: './postlist.css',
})
export class PostListComponent implements OnInit {
  user = input.required<User>();
  posts = signal<Post[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  private postService = inject(Jsonplaceholder);

  ngOnInit() {
    this.loadPosts();
  }

  private async loadPosts() {
    this.loading.set(true);
    this.error.set(null);
    try {
      const user = this.user();
      if (user) {
        const posts = await this.postService.getPostsByUserId(user.id);
        this.posts.set(posts);
      }
    } catch (err) {
      this.error.set('Failed to load posts');
    }
    this.loading.set(false);
  }
}

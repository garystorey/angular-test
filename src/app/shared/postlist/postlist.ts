import { Component, input, signal, OnInit, inject } from '@angular/core';
import { Post } from '../../types/post';
import { Jsonplaceholder } from '../../services/jsonplaceholder';
import { PostComponent } from '../post/post';
import { User } from '../../types';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent],
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
      const posts = await this.postService.getPostsByUserId(
        this.user().id ?? -1
      );
      this.posts.set(posts);
    } catch (err) {
      this.error.set('Failed to load posts');
    }
    this.loading.set(false);
  }
}

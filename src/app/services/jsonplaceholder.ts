import { Injectable } from '@angular/core';
import { Post, User } from '../types';
import { fetchFromApi } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class Jsonplaceholder {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  private readonly usersEndpoint = `${this.baseUrl}/users`;
  private readonly postsEndpoint = `${this.baseUrl}/posts?userId=`;

  async getUsers(): Promise<User[]> {
    return fetchFromApi<User[]>(this.usersEndpoint);
  }

  async getUserById(id: number): Promise<User> {
    const url = `${this.usersEndpoint}/${id}`;
    return fetchFromApi<User>(url);
  }

  async getPostsByUserId(userId: number): Promise<Post[]> {
    const url = `${this.postsEndpoint}${userId}`;
    return fetchFromApi<Post[]>(url);
  }
}

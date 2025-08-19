import { Injectable } from '@angular/core';
import { Post, User } from '../types';

@Injectable({
  providedIn: 'root',
})

//connect to jsonplaceholder.typicode.com/users and return the users
export class Jsonplaceholder {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  private readonly usersEndpoint = `${this.baseUrl}/users`;

  constructor() {}
  async getUsers(): Promise<User[]> {
    try {
      const response = await fetch(this.usersEndpoint);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  }
  async getUserById(id: number): Promise<User> {
    const url = `${this.usersEndpoint}/${id}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  }

  async getPostsByUserId(userId: number): Promise<Post[]> {
    const url = `${this.baseUrl}/posts?userId=${userId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  }
}

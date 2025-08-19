import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

//connect to jsonplaceholder.typicode.com/users and return the users
export class Jsonplaceholder {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  private readonly usersEndpoint = `${this.baseUrl}/users`;

  constructor() {}
  getUsers(): Promise<any> {
    return fetch(this.usersEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
      });
  }
  getUserById(id: number): Promise<any> {
    const url = `${this.usersEndpoint}/${id}`;
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
      });
  }
}

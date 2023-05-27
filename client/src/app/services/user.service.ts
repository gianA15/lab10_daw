import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:4000/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  updateUser(user: any): Observable<any> {
    const url = `${this.apiUrl}/${user._id}`;
    console.log(user._id)
    console.log(user)
    return this.http.put<any>(url, user);
  }

  deleteUser(userId: string): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete<any>(url);
  }
}

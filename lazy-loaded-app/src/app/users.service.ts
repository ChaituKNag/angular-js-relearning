import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http.get("https://reqres.in/api/users?page=1");
  }
  public getSingleUser(id) {
    return this.http.get(`https://reqres.in/api/users/${id}`);
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "../users.service";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"]
})
export class UserDetailComponent implements OnInit {
  public user;

  constructor(
    public route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = this.usersService.getSingleUser(params.userId);
    });
  }
}

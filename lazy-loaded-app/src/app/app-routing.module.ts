import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UsersListComponent } from "./users-list/users-list.component";

const routes: Routes = [
  { path: "", component: UsersListComponent },
  { path: "user/:userId", component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

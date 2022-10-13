import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { UserListComponent } from './users-list/user-list.component';

const routes: Routes = [
  { path: 'customers', component: UserListComponent },
  { path: 'addcustomers', component: CustomerFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

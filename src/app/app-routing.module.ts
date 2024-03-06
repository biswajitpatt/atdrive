import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponentComponent } from './pages/user-list-component/user-list-component.component';
import { MainComponent } from './pages/main/main.component';
const routes: Routes = [

  { path: '', component: MainComponent },
  { path: 'users', component: UserListComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

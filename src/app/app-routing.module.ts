import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';
import {PlaylistComponent} from './component/playlist/playlist.component';
import {ProfileComponent} from './component/profile/profile.component';
import {SignupComponent} from './component/signup/signup.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'playlist', component:PlaylistComponent},
  {path:'profile', component:ProfileComponent},
  {path:'signup', component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

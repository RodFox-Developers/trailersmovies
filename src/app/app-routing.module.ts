import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActionComponent } from './genres/action/action.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComedyComponent } from './genres/comedy/comedy.component';
import { DramaComponent } from './genres/drama/drama.component';
import { SciFiComponent } from './genres/sci-fi/sci-fi.component';
import { ThrillerComponent } from './genres/thriller/thriller.component';
import { HorrorComponent } from './genres/horror/horror.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'action', component: ActionComponent},
  {path: 'comedy', component: ComedyComponent},
  {path: 'drama', component: DramaComponent},
  {path: 'horror', component: HorrorComponent},
  {path: 'sci-fi', component: SciFiComponent},
  {path: 'thriller', component: ThrillerComponent},
  {path: 'search', component: SearchComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

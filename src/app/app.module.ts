import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ActionComponent } from './genres/action/action.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComedyComponent } from './genres/comedy/comedy.component';
import { DramaComponent } from './genres/drama/drama.component';
import { HorrorComponent } from './genres/horror/horror.component';
import { SciFiComponent } from './genres/sci-fi/sci-fi.component';
import { ThrillerComponent } from './genres/thriller/thriller.component';
import { LoginComponent } from './auth/login/login.component';
import { EmailComponent } from './auth/email/email.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MembersComponent } from './auth/members/members.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCfTRvBoJPamu9rnVIHU142NcDguoTPLUo",
  authDomain: "trailersmovies-79632.firebaseapp.com",
  databaseURL: "https://trailersmovies-79632.firebaseio.com",
  projectId: "trailersmovies-79632",
  storageBucket: "trailersmovies-79632.appspot.com",
  messagingSenderId: "459382178469",
  appId: "1:459382178469:web:b3ce528913ca1ba752834c",
  measurementId: "G-LXYQ3M8M0L"
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToolbarComponent,
    HomeComponent,
    ActionComponent,
    PageNotFoundComponent,
    ComedyComponent,
    DramaComponent,
    HorrorComponent,
    SciFiComponent,
    ThrillerComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

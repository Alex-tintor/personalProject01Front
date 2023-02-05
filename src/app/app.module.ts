import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './Views/principal/principal.component';
import { ProfileComponent } from './Views/principal/profile/profile.component';
import { LoginCardComponent } from './Core/login-card/login-card.component';
import { RecoverPasswordComponent } from './Views/principal/recover-password/recover-password.component';
import { PageCreateComponent } from './Views/principal/page-create/page-create.component';
import { RecoverPasswordCoreComponent } from './Core/login-card/recover-password-core/recover-password-core.component';
import { FooterCoreComponent } from './Core/login-card/footer-core/footer-core.component';
import { ParaMarianaComponent } from './Core/login-card/para-mariana/para-mariana.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ProfileComponent,
    LoginCardComponent,
    RecoverPasswordComponent,
    PageCreateComponent,
    RecoverPasswordCoreComponent,
    FooterCoreComponent,
    ParaMarianaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

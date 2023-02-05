import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParaMarianaComponent } from './Core/login-card/para-mariana/para-mariana.component';
import { PageCreateComponent } from './Views/principal/page-create/page-create.component';
import { PrincipalComponent } from './Views/principal/principal.component';
import { RecoverPasswordComponent } from './Views/principal/recover-password/recover-password.component';


const routes: Routes = [
  {path:'',component:PrincipalComponent}, 
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:"login/identify",component:RecoverPasswordComponent},
  {path:'page/create',component:PageCreateComponent},
  {path:'mariana',component:ParaMarianaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

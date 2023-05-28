import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { AjoutComponent } from './ajout/ajout.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
 {path:'home',component:HomeComponent},
 {path:'list',component:ListComponent},
 {path:'ajout',component:AjoutComponent},
 {path:'update/:id',component:UpdateComponent},
 {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

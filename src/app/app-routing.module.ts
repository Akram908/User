import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './main-layout/layout/layout.component';
import { HistoryComponent } from './module/history/history.component';
import { SearchUserComponent } from './module/search-user/search-user.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,children:[
    {path:'search',component:SearchUserComponent},
    {path:'history',component:HistoryComponent},
    {path:'**',redirectTo:'/search'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

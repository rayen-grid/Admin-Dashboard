// import { TableComponent } from './table/table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TableItemComponent } from './table-item/table-item.component';

// import { AppComponent } from './app.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',

    // children : [
    //   {
    //     path : 'login',
    //     component : LoginComponent
    //   }
    // ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'sidebar', component: TableItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

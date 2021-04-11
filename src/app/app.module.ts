import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { MatTableModule } from '@angular/material/table';
import { TableItemComponent } from './table-item/table-item.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { SideListComponent } from './side-list/side-list.component';

import { ProductService } from './table/productservice.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {PaginatorModule} from 'primeng/paginator';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';

import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import {MatRadioModule} from '@angular/material/radio';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    TableItemComponent,
    TableComponent,
    SideListComponent,
    DashboardComponent,
    
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    TableModule,
    MDBBootstrapModule,
    MatTableModule,
    HttpClientModule,
    NgbModule,
    PaginatorModule,
    AvatarModule,
    AvatarGroupModule,
    DialogModule,
    ButtonModule,
    DynamicDialogModule,
    ToastModule,
    MatRadioModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}

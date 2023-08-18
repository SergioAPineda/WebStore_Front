import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexModule } from './components/index.module';
import { ProductsModule } from './components/products/products.module';
import { UsersModule } from './components/users/users.module';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './components/auth/auth.module';
import { AuthGuard } from './components/auth/auth.guard';
import { AboutModule } from './components/about/about.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    IndexModule,
    AboutModule,
    ProductsModule,
    UsersModule,
    AuthModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

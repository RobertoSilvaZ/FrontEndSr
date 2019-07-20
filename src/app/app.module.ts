import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Routes
import {APP_ROUTING} from './app.routes';

// Components
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { TitleComponent } from './shared/title/title.component';

// Pages
import { ManageComponent } from './pages/manage/manage.component';
import { RequestComponent } from './pages/request/request.component';
import { ManageEditComponent } from './pages/manage/manage-edit/manage-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    TitleComponent,
    ManageComponent,
    ManageEditComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule } from 'ng-block-ui';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { LogInComponent } from './log-in/log-in.component';
import { ListFormsComponent } from './list-forms/list-forms.component';
import { HeaderComponent } from './header/header.component';
import { FillSurveyComponent } from './fill-survey/fill-survey.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateSurveyComponent,
    LogInComponent,
    ListFormsComponent,
    HeaderComponent,
    FillSurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ReactiveFormsModule,
    BlockUIModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

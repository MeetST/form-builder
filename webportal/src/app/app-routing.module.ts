import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { LogInComponent } from './log-in/log-in.component';
import { ListFormsComponent } from './list-forms/list-forms.component';
import { FillSurveyComponent } from './fill-survey/fill-survey.component';

const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'create-survey', component: CreateSurveyComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'list-survey', component: ListFormsComponent },
  { path: 'fill-survey/:shortCode', component: FillSurveyComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

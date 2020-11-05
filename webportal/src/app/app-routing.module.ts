import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'create-survey', component: CreateSurveyComponent },
  { path: 'log-in', component: LogInComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

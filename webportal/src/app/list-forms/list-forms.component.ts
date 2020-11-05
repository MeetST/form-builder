import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../create-survey/survey.service';

@Component({
  selector: 'app-list-forms',
  templateUrl: './list-forms.component.html',
  styleUrls: ['./list-forms.component.css']
})
export class ListFormsComponent implements OnInit {

  constructor(private surveyService: SurveyService) { }

  surveyList = [];

  ngOnInit() {
    this.surveyService.listForm().subscribe((res: any) => {
      console.log("ListFormsComponent -> listForm -> res", res)
      this.surveyList = res.data.list
    }, (err) => {
      alert('something went wrong')
    })
  }

}

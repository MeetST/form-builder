import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../create-survey/survey.service';

@Component({
  selector: 'app-fill-survey',
  templateUrl: './fill-survey.component.html',
  styleUrls: ['./fill-survey.component.css']
})
export class FillSurveyComponent implements OnInit {

  constructor(private route:ActivatedRoute, 
    private surveyService: SurveyService) { }
  formDetails;
  shortCode;

  ngOnInit() {
    this.shortCode = this.route.snapshot.params['shortCode'];
    this.surveyService.getFormByShortCode(this.shortCode).subscribe((res: any) => {
      console.log('res>>>>>>>', res)
      this.formDetails = res.data
    }, (err) => {
      alert('something went wrong')
    })
  }

  saveForm(){
    
  }

}

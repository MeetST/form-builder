import { Component, OnInit } from '@angular/core';
import { ElementType, OptionValue } from './survey-element';
import { SurveyService } from './survey.service';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {
  elementType = new ElementType();
  elementTypeList = new Array<ElementType>();
  formName = '';
  formDesc = '';
  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
  }

  saveForm() {
    if (this.elementTypeList.length > 0) {
      let elements = [];
      this.elementTypeList.forEach(elem => {
        elements.push({
          element_type: elem.Element,
          options: elem.OptionValueList,
          lable: elem.lable
        })
      })
      let postForm = {
        elements: elements,
        form_name: this.formName,
        form_desc: this.formDesc
      }
      this.surveyService.createForm(postForm).subscribe((res: any) => {
        console.log("CreateSurveyComponent -> saveForm -> res", res)
        this.elementTypeList = [];
        this.formName = '';
        this.formDesc = '';
        alert(res.message + " Here is the public url ::: " + res.data.url)
      }, (err) => {
        alert('something went wrong')
      })
    }
  }

  AddOption() {
    let optionValue = new OptionValue();
    this.elementType.OptionValueList.push(optionValue);
  }

  AddElement() {
    if (this.elementType && this.elementType.Element && this.elementType.lable) {
      this.elementTypeList.push(this.elementType);
      console.log("CreateSurveyComponent -> AddElement -> this.elementType", this.elementTypeList)
      this.elementType = new ElementType();
    }
  }
}

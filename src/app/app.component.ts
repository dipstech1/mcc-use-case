import { NgFor } from '@angular/common';
import { Component, ElementRef, QueryList, Renderer2, ViewChildren, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { IFormModel } from './models/form.model';
import { JsonFormComponent } from './components/json-form/json-form.component';
import { FormService } from './service/form.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor, JsonFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mcc';
  partData : IFormModel[] = [
    {
      partId: 1,
      sections : [
        {
          "id":"11",
          "name": "name",
          "label": "Name:",
          "value": "",
          "type": "text",
        },
        {
          "id":"12",
          "name": "age",
          "label": "Age:",
          "value": "",
          "type": "text",
        }
      ]
    },
    {
      partId: 2,
      sections : [
        {
          "id":"21",
          "name": "School",
          "label": "school:",
          "value": "",
          "type": "text",
        },
        {
          "id":"22",
          "name": "city",
          "label": "city:",
          "value": "",
          "type": "text",
        }
      ]
    }
  ];


  partForm! : FormGroup;
  formService = inject(FormService)
  constructor(){
    this.createForm()
  }
  createForm(){
    this.partForm = this.formService.createDynamicForm(this.partData)   
  }

  submit(){
    console.log(this.partForm.value);
   

  }

}

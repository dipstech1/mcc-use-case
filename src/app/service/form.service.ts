import { Injectable, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IFormModel } from '../models/form.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  createDynamicForm = (partData:IFormModel[]) =>{
    let fb = inject(FormBuilder);

    let partForm = fb.group({})
    partData.forEach((control,index) => {
      partForm.addControl(`part-${index}`, fb.group({}));

      control.sections.forEach((sectionControl, idx) => {
         let partFormGrp :any =  partForm.get(`part-${index}`);
         partFormGrp.addControl(sectionControl.name, fb.control(''))
      })

    });

    return partForm;
}
  
}

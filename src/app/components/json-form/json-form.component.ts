import { NgFor } from '@angular/common';
import { Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChildren, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IFormModel } from '../../models/form.model';
import { FormService } from '../../service/form.service';

@Component({
  selector: 'app-json-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './json-form.component.html',
  styleUrl: './json-form.component.scss'
})
export class JsonFormComponent {
  partData!: IFormModel[]
  @Input() set partDatavalue(val: IFormModel[]) {
    this.partData = val;
  }
  fb = inject(FormBuilder);
  @Input() partForm!: FormGroup;
  formService = inject(FormService);
  @ViewChildren('secBlock') section! : QueryList<ElementRef>
  renderer = inject(Renderer2)

  constructor() {

  }

  selectedSection(evt:any){
    console.log(evt);
    let val = evt?.target?.value ?? evt?.target?.value[0]
    this.resetAllColor()
    let secArr = this.section.toArray();
    console.log("secArr ", secArr);
    
    let ind = secArr.findIndex(ele => ele.nativeElement.classList?.contains(`section-${val}`))
    
    // secArr[0].nativeElement.background = 'red'

    this.renderer.setStyle(secArr[ind].nativeElement, 'background','red')
  }

  resetAllColor(){
    this.section.forEach(ele => {
      this.renderer.setStyle(ele.nativeElement, 'background','')
    })
  }


}

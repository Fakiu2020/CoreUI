import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-quote-create',
  templateUrl: './quote-create.component.html',
  styleUrls: ['./quote-create.component.scss']
})
export class QuoteCreateComponent implements OnInit {
  quoteCreateForm:FormGroup;
  @ViewChild('myinput') myInputField: ElementRef;

  constructor(private formBuilder: FormBuilder,private host: ElementRef) { }


  ngOnInit(){
    this.createForm();
    this.host.nativeElement.focus();
    this.myInputField.nativeElement.focus();
  }


  createForm() {
    this.quoteCreateForm = this.formBuilder.group({
      'description': [null, Validators.required],
      'author': [null, Validators.required],
    });
  }

  create(){

  }

}

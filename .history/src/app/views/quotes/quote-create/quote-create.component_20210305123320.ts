import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-quote-create',
  templateUrl: './quote-create.component.html',
  styleUrls: ['./quote-create.component.scss']
})
export class QuoteCreateComponent implements OnInit {
  quoteCreateForm:FormGroup;
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(){
    this.createForm();
  }

  createForm() {
    this.quoteCreateForm = this.formBuilder.group({
      'description': [null, Validators.required],
      'author': [null, Validators.required],
    });
  }

}

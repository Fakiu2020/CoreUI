import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuoteService } from '../service/quote.service';

@Component({
  selector: 'app-quote-create',
  templateUrl: './quote-create.component.html',
  styleUrls: ['./quote-create.component.scss'],
})
export class QuoteCreateComponent implements AfterViewInit, OnInit {
  quoteForm: FormGroup;
  @ViewChild('myinput') myInputField: ElementRef;

  constructor(private formBuilder: FormBuilder, private quoteService: QuoteService) {}

  ngAfterViewInit() {
    this.myInputField.nativeElement.focus();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.quoteForm = this.formBuilder.group({
      description: [null, Validators.required],
      author: [null, Validators.required],
    });
  }

  create() {
    if(this.quoteForm.invalid) {return;}
    this.quoteService.create(this.quoteForm.value).subscribe(data => {

    }, error => {

    });

  }
}

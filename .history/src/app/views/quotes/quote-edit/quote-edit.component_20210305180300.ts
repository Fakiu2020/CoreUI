import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuoteService } from '../service/quote.service';

@Component({
  selector: 'app-quote-edit',
  templateUrl: './quote-edit.component.html',
  styleUrls: ['./quote-edit.component.scss']
})
export class QuoteEditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,  private route: ActivatedRoute,
    private quoteService: QuoteService) {}

  ngOnInit(): void {
    
    this.quoteService.getById((this.route.snapshot.params['id']).subscribe(data => {
      console.log(data)
    }, error => {

    })
  }
  }

}

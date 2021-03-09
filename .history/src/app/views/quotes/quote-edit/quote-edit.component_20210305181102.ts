import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { QuoteService } from "../service/quote.service";

@Component({
  selector: "app-quote-edit",
  templateUrl: "./quote-edit.component.html",
  styleUrls: ["./quote-edit.component.scss"],
})
export class QuoteEditComponent implements OnInit {
  quoteForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private quoteService: QuoteService
  ) {}

  

  ngOnInit() {
    this.quoteService.getById(this.route.snapshot.params["id"]).subscribe(
      (data) => {
        console.log(data);
        this.quoteForm = this.formBuilder.group({
          id: [data.Id, Validators.required],
          description: [data.Description, Validators.required],
          author: [data.Author, Validators.required],
        });
      },
      (error) => {}
    );
    
  }

  update() {
    if (this.quoteForm.invalid) {return; }
    this.quoteService.update(this.quoteForm.value).subscribe(data => {

    }, error => {

    });

  }
}

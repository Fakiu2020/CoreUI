import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteRoutingModule } from './quote-routing.module';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QuoteCreateComponent } from './quote-create/quote-create.component';


@NgModule({
  declarations: [QuoteListComponent, QuoteCreateComponent],
  imports: [
    CommonModule,
    QuoteRoutingModule
  ]
})
export class QuoteModule { }

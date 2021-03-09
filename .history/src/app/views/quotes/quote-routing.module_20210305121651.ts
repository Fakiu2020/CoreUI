import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteCreateComponent } from './quote-create/quote-create.component';
import { QuoteListComponent } from './quote-list/quote-list.component';

const routes: Routes = [
  {
    path: '',
    component:QuoteListComponent,
  },
  {
    path: 'create',
    component: QuoteCreateComponent,
  },
  // {
  //   path: 'edit',
  //   component: QuoteEditComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule { }

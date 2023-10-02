import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTooltipModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { SharedModule } from '../../_metronic/shared/shared.module';
import {NgbdTableComplete} from './table/table-complete'
import { NgbdSortableHeader } from './table/sortable.directive';

@NgModule({
  declarations: [ContactsComponent,
    NgbdTableComplete],
  imports: [
    CommonModule,
    FormsModule,
    InlineSVGModule,
    SharedModule,
    NgbTooltipModule,
    SharedModule,
    NgFor,
		DecimalPipe,
		FormsModule,
		AsyncPipe,
		NgbTypeaheadModule,
		NgbdSortableHeader,
		NgbPaginationModule,
		NgIf,
    RouterModule.forChild([
      {
        path: '',
        component: ContactsComponent,
      },
    ]),
  ],
})
export class ContactsModule {}

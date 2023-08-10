import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTooltipModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import {NgbdTableComplete} from './table/table-complete'
import { SharedModule } from "../../_metronic/shared/shared.module";
import { NgbdSortableHeader } from './table/sortable.directive';

@NgModule({
  declarations: [
    ProjectsComponent,
    NgbdTableComplete
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
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
  ],
  exports: [
    NgbdTableComplete
  ]
})
export class ProjectsModule {}

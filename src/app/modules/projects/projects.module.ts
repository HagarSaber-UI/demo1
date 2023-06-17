import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

import { SharedModule } from "../../_metronic/shared/shared.module";

@NgModule({
  declarations: [
    ProjectsComponent,

  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    SharedModule
  ],
})
export class ProjectsModule {}

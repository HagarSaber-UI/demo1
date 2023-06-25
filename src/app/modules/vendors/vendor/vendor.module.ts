import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import {
  DropdownMenusModule,
  WidgetsModule,
} from '../../../_metronic/partials';
import { SharedModule } from '../../../_metronic/shared/shared.module';
import { InfoComponent } from './info/info.component';
import { LogsComponent } from './logs/logs.component';

import { CardsModule } from "../../../_metronic/partials/content/cards/cards.module";

@NgModule({
    declarations: [VendorComponent,
        InfoComponent,LogsComponent
    ],
    imports: [
        CommonModule,
        VendorRoutingModule,
        DropdownMenusModule,
        WidgetsModule,
        SharedModule,
        CardsModule
    ]
})
export class VendorModule {}

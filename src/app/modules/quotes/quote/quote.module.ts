import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteRoutingModule } from './quote-routing.module';
import { QuoteComponent } from './quote.component';
import {
  DropdownMenusModule,
  WidgetsModule,
} from '../../../_metronic/partials';
import { SharedModule } from '../../../_metronic/shared/shared.module';
import { LanguagesComponent } from './languages/languages.component';
import { QuoteProjectComponent } from './project/project.component';

import { CardsModule } from "../../../_metronic/partials/content/cards/cards.module";
import { NgbAccordionConfig, NgbAccordionModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [QuoteComponent,
        LanguagesComponent,QuoteProjectComponent
    ],
    imports: [
        CommonModule,
        QuoteRoutingModule,
        DropdownMenusModule,
        WidgetsModule,
        SharedModule,
        CardsModule,
        NgbAccordionModule,
        CommonModule,
        NgbAccordionModule,
        NgbAlertModule
    ],
    providers: [NgbAccordionConfig]
})
export class QuoteModule {}

import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { IblogjhipsterSharedModule, UserRouteAccessService } from './shared';
import { IblogjhipsterAppRoutingModule} from './app-routing.module';
import { IblogjhipsterHomeModule } from './home/home.module';
import { IblogjhipsterAdminModule } from './admin/admin.module';
import { IblogjhipsterAccountModule } from './account/account.module';
import { IblogjhipsterEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        IblogjhipsterAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        IblogjhipsterSharedModule,
        IblogjhipsterHomeModule,
        IblogjhipsterAdminModule,
        IblogjhipsterAccountModule,
        IblogjhipsterEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class IblogjhipsterAppModule {}

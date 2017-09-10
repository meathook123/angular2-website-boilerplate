// angular modules
import { NgModule } from '@angular/core';
import { MarketingComponent } from './marketing.component';
import { MarketingRoutingModule } from './marketing-routing.module';
import { SharedModule } from '../shared.module';

import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { CompetitionComponent } from './views/competition/competition.component';
import { ContactComponent } from './views/contact/contact.component';
import { ClassesApplyComponent } from './views/classes/apply/apply.component';
import { ClassesContestComponent } from './views/classes/contest/contest.component';
import { ClassesInfoComponent } from './views/classes/info/info.component';
import { BlogDetailComponent } from './views/blog/blog-detail/blog-detail.component';
import { BlogListComponent } from './views/blog/blog-list/blog-list.component';

@NgModule({
  imports: [
    SharedModule,
    MarketingRoutingModule
  ],
  declarations: [
    MarketingComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CompetitionComponent,
    ContactComponent,
    ClassesApplyComponent,
    ClassesContestComponent,
    ClassesInfoComponent,
    BlogDetailComponent,
    BlogListComponent
  ],
  providers: [
  ]
})

export class MarketingModule {}

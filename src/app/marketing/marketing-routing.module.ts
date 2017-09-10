import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarketingComponent } from './marketing.component';

import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { CompetitionComponent } from './views/competition/competition.component';
import { ContactComponent } from './views/contact/contact.component';
import { ClassesApplyComponent } from './views/classes/apply/apply.component';
import { ClassesContestComponent } from './views/classes/contest/contest.component';
import { ClassesInfoComponent } from './views/classes/info/info.component';
import { BlogDetailComponent } from './views/blog/blog-detail/blog-detail.component';
import { BlogListComponent } from './views/blog/blog-list/blog-list.component';

const mainRoutes: Routes = [
  {
    path: '',
    component: MarketingComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'competition',
        component: CompetitionComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'blog',
        children: [
          {
            path: '',
            component: BlogListComponent
          },
          {
            path: ':id',
            component: BlogDetailComponent
          }
        ]
      },
      {
        path: 'classes',
        children: [
          {
            path: '',
            component: ClassesInfoComponent
          },
          {
            path: 'how_to_apply',
            component: ClassesApplyComponent
          },
          {
            path: 'contest',
            component: ClassesContestComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MarketingRoutingModule {}

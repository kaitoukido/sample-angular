import { RouterModule, Routes } from '@angular/router';

import { AboutComponent, HomeComponent, TestComponent } from './shared/components';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'test', component: TestComponent }
];

export const Routing = RouterModule.forRoot(routes);

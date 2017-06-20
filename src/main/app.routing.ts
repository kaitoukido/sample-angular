import { RouterModule, Routes } from '@angular/router';

import { AboutComponent, HomeComponent } from './shared/components';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent}
];

export const Routing = RouterModule.forRoot(routes);

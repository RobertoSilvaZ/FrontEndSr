
import { RouterModule, Routes } from '@angular/router'; 
import { RequestComponent } from './pages/request/request.component';
import { ManageEditComponent } from './pages/manage/manage-edit/manage-edit.component';
import { ManageComponent } from './pages/manage/manage.component';

const APP_ROUTES: Routes = [
    { path: 'manage', component: ManageComponent },
    { path: 'manage/edit/:id', component: ManageEditComponent },
    { path: 'request', component: RequestComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'manage' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});

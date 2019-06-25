import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component'
import { MissionComponent } from './mission/mission.component'
import { MissionAdminComponent } from './admin/mission/mission.admin.component'

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'mission', component: MissionComponent },
    { path: 'missionadmin', component: MissionAdminComponent }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);
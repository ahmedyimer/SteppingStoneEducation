import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//UI
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { MissionComponent } from './mission/mission.component';
import { ProjectComponent } from './project/project.component';
import { OurApproachComponent } from './ourapproach/ourapproach.component';
import { HowToInvolveComponent } from './howtoinvolve/howtoinvolve.component';
import { ContactUsComponent } from './contactus/contactus.component';

//Admin
import { AboutUsAdminComponent } from './admin/aboutus/aboutus.admin.component';
import { MissionAdminComponent } from './admin/mission/mission.admin.component';
import { ProjectAdminComponent } from './admin/project/project.admin.component';
import { OurApproachAdminComponent } from './admin/ourapproach/ourapproach.admin.component';
import { HowToInvolveAdminComponent } from './admin/howtoinvolve/howtoinvolve.admin.component';
import { ContactUsAdminComponent } from './admin/contactus/contactus.admin.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'mission', component: MissionComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'ourapproach', component: OurApproachComponent },
    { path: 'howtoinvolve', component: HowToInvolveComponent },
    { path: 'contactus', component: ContactUsComponent },

    { path: 'aboutusadmin', component: AboutUsAdminComponent },
    { path: 'missionadmin', component: MissionAdminComponent },
    { path: 'projectadmin', component: ProjectAdminComponent },
    { path: 'ourapproachadmin', component: OurApproachAdminComponent },
    { path: 'howtoinvolveadmin', component: HowToInvolveAdminComponent },
    { path: 'contactusadmin', component: ContactUsAdminComponent }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);
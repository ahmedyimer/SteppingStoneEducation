import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { HomeComponent } from './home/home.component';

//About Us
import { AboutUsComponent } from './aboutus/aboutus.component';
import { AboutUsAdminComponent } from './admin/aboutus/aboutus.admin.component';
import { AboutUsService } from './Service/aboutus.service';

//Mission
import { MissionComponent } from './mission/mission.component';
import { MissionAdminComponent } from './admin/mission/mission.admin.component';
import { MissionService } from './Service/mission.service';

//Project
import { ProjectComponent } from './project/project.component';
import { ProjectAdminComponent } from './admin/project/project.admin.component';
import { ProjectService } from './Service/project.service';

//Project
import { OurApproachComponent } from './ourapproach/ourapproach.component';
import { OurApproachAdminComponent } from './admin/ourapproach/ourapproach.admin.component';
import { OurApproachService } from './Service/ourapproach.service';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule],
    declarations: [AppComponent, HomeComponent, AboutUsComponent, AboutUsAdminComponent, MissionComponent, ProjectComponent, OurApproachComponent, MissionAdminComponent, ProjectAdminComponent, OurApproachAdminComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, AboutUsService, MissionService, ProjectService, OurApproachService],
    bootstrap: [AppComponent]

})
export class AppModule { }

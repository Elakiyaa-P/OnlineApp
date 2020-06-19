import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddJobsComponent } from './admin/add-jobs/add-jobs.component';
import { EditJobComponent } from './admin/edit-job/edit-job.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { JobSeekerComponent } from './job-seeker/job-seeker.component';
import { PersonalComponent } from './job-seeker/registration/personalDetails/personal/personal.component';
import { EmploymentComponent } from './job-seeker/registration/employmentDetails/employment/employment.component';
import { EducationComponent } from './job-seeker/registration/educationDetails/education/education.component';
import { LogoComponent } from './logo/logo.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { PersonalEditComponent } from './job-seeker/registration/personalDetails/personal-edit/personal-edit.component';
import { PersonalDisplayComponent } from './job-seeker/registration/personalDetails/personal-display/personal-display.component';
import { EducationEditComponent } from './job-seeker/registration/educationDetails/education-edit/education-edit.component';
import { EducationDisplayComponent } from './job-seeker/registration/educationDetails/education-display/education-display.component';
import { EmploymentEditComponent } from './job-seeker/registration/employmentDetails/employment-edit/employment-edit.component';
import { EmploymentDisplayComponent } from './job-seeker/registration/employmentDetails/employment-display/employment-display.component';
import { SearchComponent } from './search/search.component';
import { FilterPipe } from './filter.pipe';
import { ProfileComponent } from './profile/profile.component';
import { FresherComponent } from './fresher/fresher.component';
import { FresherPersonalComponent } from './fresher/fresher-personal/fresher-personal.component';
import { FresherEducationComponent } from './fresher/fresher-education/fresher-education.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { JobDetailsComponent } from './job-details/job-details.component';
import { HotJobsComponent } from './hot-jobs/hot-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    AddJobsComponent,
    EditJobComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    JobSeekerComponent,
    PersonalComponent,
    EmploymentComponent,
    EducationComponent,
    LogoComponent,
    AdminLoginComponent,
    PersonalEditComponent,
    PersonalDisplayComponent,
    EducationEditComponent,
    EducationDisplayComponent,
    EmploymentEditComponent,
    EmploymentDisplayComponent,
    SearchComponent,
    FilterPipe,
    ProfileComponent,
    FresherComponent,
    FresherPersonalComponent,
    FresherEducationComponent,
    JobDetailsComponent,
    HotJobsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuardService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

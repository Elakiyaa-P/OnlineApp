import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddJobsComponent } from './admin/add-jobs/add-jobs.component';
import { EditJobComponent } from './admin/edit-job/edit-job.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PersonalComponent } from './job-seeker/registration/personalDetails/personal/personal.component';
import { EmploymentComponent } from './job-seeker/registration/employmentDetails/employment/employment.component';
import { EducationComponent } from './job-seeker/registration/educationDetails/education/education.component';
import { JobSeekerComponent } from './job-seeker/job-seeker.component';
import { LogoComponent } from './logo/logo.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { PersonalEditComponent } from './job-seeker/registration/personalDetails/personal-edit/personal-edit.component';
import { PersonalDisplayComponent } from './job-seeker/registration/personalDetails/personal-display/personal-display.component';
import { EmploymentEditComponent } from './job-seeker/registration/employmentDetails/employment-edit/employment-edit.component';
import { EmploymentDisplayComponent } from './job-seeker/registration/employmentDetails/employment-display/employment-display.component';
import { EducationEditComponent } from './job-seeker/registration/educationDetails/education-edit/education-edit.component';
import { EducationDisplayComponent } from './job-seeker/registration/educationDetails/education-display/education-display.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { FresherComponent } from './fresher/fresher.component';
import { FresherPersonalComponent } from './fresher/fresher-personal/fresher-personal.component';
import { FresherEducationComponent } from './fresher/fresher-education/fresher-education.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { HotJobsComponent } from './hot-jobs/hot-jobs.component';

const routes: Routes = [
  { path: 'logo', component: LogoComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'job-details', component: JobDetailsComponent },
  { path: 'hot-jobs', component: HotJobsComponent },

  { path: 'admin', component: AdminComponent },
  { path: 'admin/add-jobs', component: AddJobsComponent },
  { path: 'admin/edit-job/:id', component: EditJobComponent },
  
  { path: 'register', component: JobSeekerComponent },
  { path: 'profile', component: ProfileComponent },

  { path: 'fresher', component: FresherComponent },
  { path: 'fresher/personal', component: FresherPersonalComponent },
  { path: 'fresher/education', component: FresherEducationComponent },

  { path: 'job-seeker/personal', component: PersonalComponent },
  { path: 'job-seeker/personal-edit/:id', component: PersonalEditComponent },
  { path: 'job-seeker/personal-display', component: PersonalDisplayComponent },

  { path: 'job-seeker/employment', component: EmploymentComponent },
  { path: 'job-seeker/employment-edit/:id', component: EmploymentEditComponent },
  { path: 'job-seeker/employment-display', component: EmploymentDisplayComponent },

  { path: 'job-seeker/education', component: EducationComponent },
  { path: 'job-seeker/education-edit/:id', component: EducationEditComponent },
  { path: 'job-seeker/education-display', component: EducationDisplayComponent },

  // { path: 'not-found', component: NotFoundComponent },
  // { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { JwtHelperService } from '@auth0/angular-jwt';

bootstrapApplication(AppComponent,appConfig)
  .catch((err) => console.error(err));

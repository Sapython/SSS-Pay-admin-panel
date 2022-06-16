import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'; 
import { NgChartsModule } from 'ng2-charts';
import { AuthenticationService } from './services/authentication.service';
import { DatabaseService } from './services/database.service';
import { UserDataService } from './services/user-data.service';
import { AlertsAndNotificationsService } from './services/uiService/alerts-and-notifications.service';
import { DataProvider } from './providers/data.provider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    NgChartsModule,
    MatSnackBarModule
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    AuthenticationService,
    DatabaseService,
    UserDataService,
    AlertsAndNotificationsService,
    DataProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

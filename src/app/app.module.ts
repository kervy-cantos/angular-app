import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { provideHttpClient } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PaginatorModule } from 'primeng/paginator';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  provideAppCheck,
} from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import {
  getRemoteConfig,
  provideRemoteConfig,
} from '@angular/fire/remote-config';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideAppCheck(() => {
      const provider = new ReCaptchaEnterpriseProvider(
        '6LcexvYpAAAAAKekikNRw1ne9vy_bnoIIZ-yUrle'
      );
      return initializeAppCheck(undefined, {
        provider,
        isTokenAutoRefreshEnabled: true,
      });
    }),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    provideRemoteConfig(() => getRemoteConfig()),
  ],
  providers: [
    provideHttpClient(),
    provideAnimations(),
    ScreenTrackingService,
    UserTrackingService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

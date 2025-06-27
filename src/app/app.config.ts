import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { firebaseConfig } from '../firebase.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp(firebaseConfig)
    ),
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-2f49c","appId":"1:184246811110:web:f03d7d2ff9842f0aa37e27","storageBucket":"simple-crm-2f49c.firebasestorage.app","apiKey":"AIzaSyD7zxwy2g0lhzH5ADA2fpz_y7t_e-6g0ZY","authDomain":"simple-crm-2f49c.firebaseapp.com","messagingSenderId":"184246811110"})), provideFirestore(() => getFirestore()), provideAnimationsAsync(),
  ]
};

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase} from '@angular/fire/database';
import { environment } from '../environments/environment'; // Importa el entorno
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirebaseApp(() => initializeApp({"projectId":"realtimedb-c1a43","appId":"1:824236700383:web:02e9a1c13b00e316476f6a","databaseURL":"https://realtimedb-c1a43-default-rtdb.firebaseio.com","storageBucket":"realtimedb-c1a43.appspot.com","apiKey":"AIzaSyA27qH92ULZSDeUyTGOV_B_2aUYtGuZEqI","authDomain":"realtimedb-c1a43.firebaseapp.com","messagingSenderId":"824236700383"}))],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

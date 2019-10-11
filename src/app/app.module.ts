import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './shared/material/CustomMaterialModule';
import { SharedModule } from './shared/shared.module';
import { AuthModule} from './modules/auth/auth.module';
import { CmsModule } from './modules/cms/cms.module';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { RecordService } from './core/record/record.service';
import { AuthService } from './core/auth/auth.service';
import { AuthInterceptor } from './core/auth/auth.interceptor';
import { HeaderComponent } from './layout/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    SharedModule,
    AuthModule,
    CmsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        
      }
    })  
  ],
  providers: [
    RecordService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './shared/material/CustomMaterialModule';
import { SharedModule } from './shared/shared.module';
import { AuthModule} from './modules/auth/auth.module';
import { CmsModule } from './modules/cms/cms.module';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
@NgModule({
  declarations: [
    AppComponent
   
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
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

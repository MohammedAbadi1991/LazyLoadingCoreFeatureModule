import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AuthService } from './services/auth.service';



@NgModule({
  imports: [
    HttpModule
  ],
  declarations: [],
  providers: [AuthService
  
  ],
  exports: []
})
export class CoreModule {
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EmployeeComponent]
})
export class AppModule {
}

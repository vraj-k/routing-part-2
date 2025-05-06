import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndividualFruitComponent } from './individual-fruit/individual-fruit.component';
import { HeaderComponent } from './header/header.component';
import { IndividualProductComponent } from './individual-product/individual-product.component';
import { ReactiveProductComponent } from './reactive-product/reactive-product.component';
import { IndividualFruitQueryStringComponent } from './individual-fruit-query-string/individual-fruit-query-string.component';
import { AllVehiclesComponent } from './all-vehicles/all-vehicles.component';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import { VehicleOverviewComponent } from './vehicle-overview/vehicle-overview.component';
import { VehicleBikesComponent } from './vehicle-bikes/vehicle-bikes.component';
import { VehicleScootersComponent } from './vehicle-scooters/vehicle-scooters.component';
import { VehicleCarsComponent } from './vehicle-cars/vehicle-cars.component';
import { VehicleMaintenanceComponent } from './vehicle-maintenance/vehicle-maintenance.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IndividualFruitComponent,
    HeaderComponent,
    IndividualProductComponent,
    ReactiveProductComponent,
    IndividualFruitQueryStringComponent,
    InvalidUrlComponent,
    AllVehiclesComponent,
    VehicleOverviewComponent,
    VehicleBikesComponent,
    VehicleScootersComponent,
    VehicleCarsComponent,
    VehicleMaintenanceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndividualFruitComponent } from './individual-fruit/individual-fruit.component';
import { IndividualProductComponent } from './individual-product/individual-product.component';
import { ReactiveProductComponent } from './reactive-product/reactive-product.component';
import { IndividualFruitQueryStringComponent } from './individual-fruit-query-string/individual-fruit-query-string.component';
import { IndividualVehicleComponent } from './individual-vehicle/individual-vehicle.component';
import { InvalidVehicleComponent } from './invalid-vehicle/invalid-vehicle.component';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import { AllVehiclesComponent } from './all-vehicles/all-vehicles.component';

const routes: Routes = [
  //Default Routes
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },

  // Passing and fetching Single data as path (Static)
  { path: 'fruit', component: IndividualFruitComponent },
  { path: 'fruit/:fruitName', component: IndividualFruitComponent },

  // Passing and fetching Multiple data as path (Static)
  {
    path: 'product/:category/:productName',
    component: IndividualProductComponent,
  },

  // Passing and fetching Multiple data as path (Reactive)
  {
    path: 'reactive/:category/:productName',
    component: ReactiveProductComponent,
  },

  // Passing and fetching data as QueryString + Landing on Fragment / specific content
  {
    path: 'fruit-qs',
    component: IndividualFruitQueryStringComponent,
  },

  {
    path: 'vehicle',
    component: AllVehiclesComponent,
    pathMatch: 'prefix', // Child Components and Routes
    children: [
      { path: '404', component: InvalidVehicleComponent },
      { path: ':vehicleName', component: IndividualVehicleComponent },
    ],
  },

  // Lazy Loading
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((mod) => mod.AdminModule),
  },

  // 404 - No route found
  // { path: '**', redirectTo: '404' },
  { path: '404', component: InvalidUrlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

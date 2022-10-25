import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
     path: "",
     component: HomeComponent,
  },
  { path: "counter", pathMatch: "full", component: CounterComponent},
  // { path: ‘**’, component: OneComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


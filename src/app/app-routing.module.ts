import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: '', redirectTo: '/en/home', pathMatch: 'full' },
  { path: ':lang', redirectTo: ':lang/home', pathMatch:'full'},
  { path: ':lang/home', component: HomeComponent },
  { path: ':lang/about', component: AboutComponent },
  { path: ':lang/test', component: TestComponent },
  { path: '**', redirectTo: '/en/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilmService } from './service/film.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { AdminModule} from './admin/admin.module';
import { AdminTestComponent } from './admin-test/admin-test.component';

const routers: Routes = [
//   {path: '',
//   component : AppComponent,
//   children: [
//     {path: '', component : HomeComponent},
//     {path: 'admin', component: AdminComponent}
//   ]
// }
     {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
    // {path: 'admin', component: AdminTestComponent},
    // {path: '', component: AdminTestComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AdminTestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routers
    ),
  ],
  providers: [
    FilmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

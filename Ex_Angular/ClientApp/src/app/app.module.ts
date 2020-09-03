import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ActualizarComponent } from './component/actualizar/actualizar.component';
import { ListadoComponent } from './component/listado/listado.component';
import { BusquedaComponent } from './component/busqueda/busqueda.component';
import { BorrarComponent } from './component/borrar/borrar.component';
import { NotFoundComponent } from './component/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ActualizarComponent,
    ListadoComponent,
    BusquedaComponent,
    BorrarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'actualizar', component: ActualizarComponent },
      { path: 'borrar', component: BorrarComponent},
      { path: 'listado', component: ListadoComponent},
      { path: 'busqueda', component: BusquedaComponent},
      { path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

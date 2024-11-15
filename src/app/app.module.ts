import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductoComponent } from './components/producto/producto.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NosotrosComponent,
    ServiciosComponent,
    ProductoComponent,
    MarcasComponent,
    ContactenosComponent,
    FooterComponent,
    NavmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

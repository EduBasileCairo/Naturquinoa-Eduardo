import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule} from '@angular/material/chips';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalculadoraImcComponent } from './calculadora-imc/calculadora-imc.component';
import { FormsModule} from '@angular/forms'; //Agregado por Edu



@NgModule({
  declarations: [	
    AppComponent,
    FooterComponent,
    NavbarComponent,
    FormularioComponent,
    CalculadoraImcComponent//Agregado por Edu
      
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimagittionsModule,
    MatSlideToggleModule,
    MatChipsModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

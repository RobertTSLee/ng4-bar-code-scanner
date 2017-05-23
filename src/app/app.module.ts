//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routings';

// components
import { AppComponent } from './app.component';
import { BarcodeScannerComponent } from './components/barcode-scanner/barcode-scanner.component';

// service providers
import { BarcodeDecoderService } from './services/barcode-decoder.service';
import { BarcodeValidatorService } from './services/barcode-validator.service';

@NgModule({
  declarations: [
    AppComponent,
    BarcodeScannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    BarcodeDecoderService,
    BarcodeValidatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

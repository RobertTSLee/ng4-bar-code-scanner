import { Component, OnInit } from '@angular/core';
import { BarcodeDecoderService } from './services/barcode-decoder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(
    private decodeService: BarcodeDecoderService
  ) {}

  ngOnInit() {
    console.log(this.decodeService);
    // this.decodeService.hello();
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { BarcodeDecoderService } from '../../services/barcode-decoder.service';
import { BarcodeValidatorService } from '../../services/barcode-validator.service';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.css']
})
export class BarcodeScannerComponent implements OnInit {
  result: any;
  message: any;
  error: any;

  code: Subject<any> = new Subject<any>();

  @ViewChild('interactive') interactive;

  constructor(
    private decoder: BarcodeDecoderService,
    private validator: BarcodeValidatorService
  ) { }

  ngOnInit() {
    this.decoder.onLiveStreamInit();
    // this.decoder.onProcessed();

    this.decoder.onDecodeDetected()
      .then(res => {
        this.result = res;
        this.code.next(res);
      })
      .catch(err => { throw new Error(err); });

    this.validator.doSearchbyCode(this.code)
      .subscribe(
      res => { console.log(res); },
      err => {
        throw new Error(err);
      });
  }

}

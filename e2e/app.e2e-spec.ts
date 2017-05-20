import { BarcodeScannerPage } from './app.po';

describe('barcode-scanner App', () => {
  let page: BarcodeScannerPage;

  beforeEach(() => {
    page = new BarcodeScannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

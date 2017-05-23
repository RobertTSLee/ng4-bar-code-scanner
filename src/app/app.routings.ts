import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BarcodeScannerComponent } from "./components/barcode-scanner/barcode-scanner.component";

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'
    },
    {
        path: 'barcode',
        component: BarcodeScannerComponent
    },
    {
        path: 'app',
        component: AppComponent
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
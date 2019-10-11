import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
// import { decorateModuleRef } from './app/environment';
// import { bootloader } from '@angularclass/hmr';
/*
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from "./app/app.module";

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

// needed for hmr
// in prod this is replace for document ready
// bootloader(main);

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routing} from './pages.routing';

import {LayoutModule} from '../shared/layout.module';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
/* components */
import {PagesComponent} from './pages.component';
import {LoginComponent} from './login/login.component';
import {SalamatService} from '../shared/services/salamat.service';
import {CanActive} from '../shared/services/CanActive';
import {CanDeactive} from '../shared/services/CanDeactive';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    PagesComponent,
    LoginComponent
  ],
  providers: [SalamatService, CanActive, CanDeactive]
})
export class PagesModule {
}

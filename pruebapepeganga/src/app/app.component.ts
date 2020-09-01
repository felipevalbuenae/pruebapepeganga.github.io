import { Component } from '@angular/core';
import { DynamicScriptLoaderServiceService } from './services/dynamic-script-loader-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebapepeganga';

 constructor( public dynamicScriptLoader: DynamicScriptLoaderServiceService) {
   }

  ngOnInit() {

  }

}

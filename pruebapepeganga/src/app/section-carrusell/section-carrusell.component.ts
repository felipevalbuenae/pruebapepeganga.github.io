import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderServiceService } from '../services/dynamic-script-loader-service.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-section-carrusell',
  templateUrl: './section-carrusell.component.html',
  styleUrls: ['./section-carrusell.component.css']
})
export class SectionCarrusellComponent implements OnInit {

  title:String = "hola";
  dataUsers:any;

  constructor(private dynamicScriptLoader: DynamicScriptLoaderServiceService, private data: DataService) {
    this.loadScripts();
    this.data.getUsers().subscribe(res => {
      this.dataUsers = res["data"];
      console.log(this.dataUsers)
  })
  
   console.log(this.dataUsers);
   }

  ngOnInit() {

  }
  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('carousel', 'slick','main').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }
}
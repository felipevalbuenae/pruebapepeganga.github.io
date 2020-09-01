import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {
  dataPosts:any;
  fileName= 'ExcelSheet.xlsx';

  constructor(private data: DataService) {
    this.data.getPosts().subscribe(res => {
      this.dataPosts = res;
      console.log(this.dataPosts);
  })
  
   console.log(this.dataPosts);
   }

  ngOnInit(): void {
  }

  exportexcel(){
/* pass here the table id */
let element = document.getElementById('excel-table');
const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

/* generate workbook and add the worksheet */
const wb: XLSX.WorkBook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

/* save to file */  
XLSX.writeFile(wb, this.fileName);
}

}

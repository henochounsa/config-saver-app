import { Component, ViewChild } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { ConfigService } from './configs.service';
import { Router } from '@angular/router';
import {Config} from "./config.model";


@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  title = 'MainComponent';
  public _records: any[] = [];
  public cols: { [key: string]: string | number } = {};

  public postConfigs: any;
  public errorMsg: string | null = null;

  constructor(private configService: ConfigService, private router: Router) {}

  uploadListener($event: any): void {
    let text = [];
    let files = $event.srcElement.files;
    if (this.isValidCSVFile(files[0])) {
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        this._records = csvRecordsArray;
      };

      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };
    } else {
      alert('Please import valid .csv file.');
      this.fileReset();
    }
  }

  selectColumn(event: any, index: number) {
    if (event.target.value !== 'undefined') {
      this.deleteByValue(event.target.value);
    }
    this.cols[index] = event.target.value;
  }
  deleteByValue(val: string) {
    for (var f in this.cols) {
      if (this.cols.hasOwnProperty(f) && this.cols[f] == val) {
        delete this.cols[f];
      }
    }
  }
  submitData() {
    if (this._records.length < 1) {
      this.errorMsg = 'Veuillez charger un fichier csv valide !';
      setTimeout(()=>{
        this.errorMsg = null;
      },4000)
      return;
    }
    if (
      Object.values(this.cols).includes('id') &&
      Object.values(this.cols).includes('secret')
    ) {
      console.log(
        'getDataRecordsArrayFromCSVFile',
        this.getDataRecordsArrayFromCSVFile()
      );
      this.configService
        .saveConfigs(<[]>this.getDataRecordsArrayFromCSVFile())
        .subscribe((response: any) => {
          this.downLoadFile(response, 'application/octet-stream');
          this.fileReset();
          this.router.navigate(['/scan']);
        });
    } else {
      this.errorMsg =
        "Veuillez sélectionner les colonnes correspondantes à l'Id et au Secret dans votre fichier !";
        setTimeout(()=>{
          this.errorMsg = null;
        },4000)
    }
  }

  downLoadFile(data: any, type: string) {
    let downloadLink = document.createElement('a');
    let blob = new Blob([data], { type: type });
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.setAttribute('download', 'qrcodes.zip');
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

  getDataRecordsArrayFromCSVFile() {
    let csvArr = [];

    for (let i = 0; i < this._records.length; i++) {
      let curruntRecord = this._records[i].split(',');
      let csvRecord: Config = new Config();
      csvRecord.id =
        curruntRecord[
          <any>Object.keys(this.cols).find((key) => this.cols[key] === 'id')
        ];
      csvRecord.secret =
        curruntRecord[
          <any>Object.keys(this.cols).find((key) => this.cols[key] === 'secret')
        ];
      csvRecord.row = curruntRecord;
      csvArr.push(csvRecord);
    }
    return csvArr;
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith('.csv');
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = csvRecordsArr[0].split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this._records = [];
  }
}

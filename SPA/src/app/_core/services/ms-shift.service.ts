import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MSShift } from '../models/ms-shift';

@Injectable({
  providedIn: 'root'
})
export class MsShiftService {
//Khai báo đường dẫn API
baseUrl : string = 'https://localhost:5001/api/MSShift/';
constructor(private _htp: HttpClient) { }

//Lay du lieu
getData() {
    return this._htp.get<MSShift[]>(this.baseUrl + 'GetData');
  }
}

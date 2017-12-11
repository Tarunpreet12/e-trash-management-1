import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from "./shared.service.client";

// injecting service into module
@Injectable()

export class DropOffService {

  constructor(private _http: Http, private sharedService: SharedService, private router: Router) { }

  options: RequestOptions = new RequestOptions();
  baseUrl = environment.baseUrl;


  createDropOff(dropOff,userId) {
    return this._http.post(this.baseUrl + '/api/user/'+userId+'/dropoff', dropOff)
      .map((res: Response) => {
          return res.json();
        }
      );
  }


}

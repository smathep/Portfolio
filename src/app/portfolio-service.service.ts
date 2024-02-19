import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {

  constructor(private http: HttpClient) { }

  private LambdaUrl = 'https://dzlwc45zjm52eethepu4onbqw40lrjvv.lambda-url.us-east-1.on.aws';

  getImageFileNames(){
      return this.http.get(this.LambdaUrl);
  }
}

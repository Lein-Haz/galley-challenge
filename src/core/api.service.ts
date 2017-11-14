import {Injectable} from "@angular/core";
import { Observable } from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ApiService{

  constructor( private http: HttpClient){}

  public apiGet<T>(url:string, options?: {}): Observable<T>{
    return this.http.get<T>(url, options);
  }

  public handleApiError(apiError) {
    console.log("Ummm...crap");
    console.log(apiError);
    console.log("handled");//TODO actually handle
  }
}

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "../../../modules/service/htpp.service";

@Injectable()
export class DetailService {
  constructor(private httpService: HttpService) {}

  getDataDetailMovie(id: number): Observable<any> {
    return this.httpService.get(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "?api_key=136c0ede72f807901528d9d1af86e80f&language=ru"
    );
  }

  getTrailes(id: number): Observable<any> {
    return this.httpService.get(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "/videos?api_key=136c0ede72f807901528d9d1af86e80f&language=en"
    );
  }
}

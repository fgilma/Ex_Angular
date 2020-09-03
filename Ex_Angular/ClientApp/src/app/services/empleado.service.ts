import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get('https://localhost:44392/api/empleadosql');
  }
  add (payload: any) {
    return this.http.post('https://localhost:44392/API/empleadosql', payload);
    /*console.log(payload);*/
  }

  del (payload: any) {
    return this.http.delete('https://localhost:44392/API/empleadosql/' + payload.id, payload);
  }

  getUser(payload: any) {
    return this.http.get('https://localhost:44392/API/empleadosql/' + payload.id, payload);
  }
  update(payload: any) {
    return this.http.put('https://localhost:44392/API/empleadosql/' + payload.id, payload);
  }
}

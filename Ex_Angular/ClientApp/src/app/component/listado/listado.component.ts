import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from 'src/app/Models/empleado';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public empleadoData: Array<any>;
  observableData: Observable<any>;
  constructor(private empleadoService: EmpleadoService) {

    /*empleadoService.getUsers().subscribe((data: any) => this.empleadoData = data);*/

  }

  ngOnInit() {
    this.observableData = this.empleadoService.getUsers();
  }

}

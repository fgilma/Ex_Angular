import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from 'src/app/Models/empleado';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  tablaVisible = false;
  formularioBusqueda: FormGroup;
  empleadoData: Empleado;
  constructor(private empleadoService: EmpleadoService, private fb: FormBuilder) { }

  ngOnInit() {
    this.formularioBusqueda = this.fb.group({
      id: ['']
    });
  }
  onSubmit(formValue: any) {
    this.empleadoService.getUser(formValue).subscribe(
      (data: any) => {
        this.empleadoData = data;
        this.tablaVisible = true;
    },
      (error) => {
        alert(error.statusText);
    }
    );
    this.formularioBusqueda.reset();

  }

}

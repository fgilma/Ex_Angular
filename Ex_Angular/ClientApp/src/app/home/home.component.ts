import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../services/empleado.service';
import { Empleado } from '../Models/empleado';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  formulario: FormGroup;

  constructor(private empleadoService: EmpleadoService, private fb: FormBuilder ) {}


  ngOnInit() {
    this.formulario = this.fb.group({
      id: [''],
      nombre: [''],
      apellido: [''],
      cargo: [''],
      sueldo: ['']
    });
  }

  onSubmit(formvalue: any) {
    const user = new Empleado();
    // tslint:disable-next-line: radix
    user.id = parseInt(formvalue.id);
    user.nombre = formvalue.nombre;
    user.apellido = formvalue.apellido;
    user.cargo = formvalue.cargo;
    user.sueldo = parseFloat(formvalue.sueldo);
    this.empleadoService.add(user).subscribe(
      resp => console.log(resp),
      (error) => {
        alert('El ID ya está en uso.');
      }
      );
    this.formulario.reset();
  }

}

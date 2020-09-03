import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/Models/empleado';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

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
    this.empleadoService.update(user).subscribe(
      resp => console.log(resp),
      error => alert('El usuario no existe.'));
    this.formulario.reset();
  }

}

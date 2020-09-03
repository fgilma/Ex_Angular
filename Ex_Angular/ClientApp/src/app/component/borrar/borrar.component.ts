import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent implements OnInit {
  formularioBorrar: FormGroup;

  constructor(private empleadoService: EmpleadoService, private fb: FormBuilder) {
    this.formularioBorrar = this.fb.group({
      id: ['']
    });

  }

  ngOnInit() {}
  onSubmit(id: number) {
    this.empleadoService.del(id).subscribe(data => console.log(data), error => alert(error.statusText));

  }

}

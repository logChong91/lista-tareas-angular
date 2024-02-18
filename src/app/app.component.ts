import { TareasService } from './services/tareas.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  listaTareas: string[] = [];
  nuevaTarea = '';

  private _tareaService = inject(TareasService);

  ngOnInit(): void {
    this.listaTareas = this._tareaService.getTareas()
  }

  agregarTarea(): void {
    this._tareaService.agregarTareas(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listaTareas = this._tareaService.getTareas();
  }

  elimininarTarea(index: number){
    this._tareaService.eliminarTarea(index);
    this.listaTareas = this._tareaService.getTareas();
  }


}

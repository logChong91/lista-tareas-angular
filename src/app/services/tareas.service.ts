import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localstoragekey = 'listaTareas';

  getTareas(): string[] {
    return JSON.parse(localStorage.getItem(this.localstoragekey) as string) || [];
  }

  agregarTareas(tarea: string) {
    const tareas = this.getTareas();
    tareas.push(tarea);
    localStorage.setItem(this.localstoragekey, JSON.stringify(tareas));
  }

  eliminarTarea(index: number) {
    const tareas = this.getTareas();
    tareas.splice(index, 1);
    localStorage.setItem(this.localstoragekey, JSON.stringify(tareas));
  }
}

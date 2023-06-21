"use strict";

const app = {
  init: function () {
    app.agregarTarea();
  },

  agregarTarea() {
    document.getElementById('formTarea').addEventListener('submit', agregarTarea);

    function agregarTarea(e) {
      e.preventDefault(e);
      let title = document.getElementById('tarea').value;
      let descripcción = document.getElementById('descripcción').value;

      const agregarTarea = {
        title, //title: title,
        descripcción // descripcción: descripcción
      };

      if (localStorage.getItem('tareas') === null) {
        let tareas = [];
        tareas.push(agregarTarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
      } else {
        let tareas = JSON.parse(localStorage.getItem('tareas'));
        tareas.push(agregarTarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
      }
      // JSON.stringify : Vuelve lo object en Strings
      // JSON.parse : Los strings los vuelve objetos/object data
      app.getTarea();
    }
  },

  getTarea() {
    let getTareas = JSON.parse(localStorage.getItem('tareas'));
    let tasksView = document.getElementById('getTarea');

    tasksView.innerHTML = '';
    for (let i = 0; i < getTareas.length; i++) {
      console.log(getTareas[i]);
      let title = getTareas[i].title;
      let descripcción = getTareas[i].descripcción;

      tasksView.innerHTML += `
      <div id="getTarea">
      <div id="descripccionDeLasTareas">
      <p>${title} - ${descripcción}</p>
      </div>

    <!-- BOTONES -->
    <div id="botones">
      <button class="btn">Urgente</button>
      <button class="btn">Importante</button>
      <button class="btn">hecho</button>
    </div>

    <!-- BOTONES (V.2) -->
    <div id="botones">
      <div class="tipoDeTarea">
        <label>
          <select id="select">
            <option>Hacer el ...</option>
            <option value="lunes"> Hacer el lunes</option>
            <option value="martes">Hacer el martes</option>
            <option value="miercoles">Hacer el miércoles</option>
            <option value="jueves">Hacer el jueves</option>
            <option value="viernes">Hacer el viernes</option>
            <option value="sábado">Hacer el sábado</option>
            <option value="domingo">Hacer el domingo</option>
          </select>
        </label>
        </div>
          <button id="btnE">Eliminar</button>
        </div>
      </div>`;

    }
  },

  eliminarTarea(title) {
    console.log(title);
  },

};

app.init();
app.getTarea();
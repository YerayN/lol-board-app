document.getElementById("campeones").addEventListener("click", () => {
  document.getElementById("pantallaCampeones").style.display = "block";

  fetch("champions.json")
    .then(response => response.json())
    .then(data => {
      const lista = document.getElementById("listaCampeones");
      lista.innerHTML = ""; // limpiar antes de cargar

      data.forEach(campeon => {
        const div = document.createElement("div");
        div.innerHTML = `
          <h3>${campeon.nombre}</h3>
          <p>Rol: ${campeon.rol}</p>
          <button onclick="verDetalles('${campeon.nombre}')">Ver Detalles</button>
          <hr>
        `;
        lista.appendChild(div);
      });
    });
});

document.getElementById("cerrarCampeones").addEventListener("click", () => {
  document.getElementById("pantallaCampeones").style.display = "none";
});

function verDetalles(nombre) {
  fetch("champions.json")
    .then(response => response.json())
    .then(data => {
      const campeon = data.find(c => c.nombre === nombre);
      alert(`
        ${campeon.nombre} - ${campeon.rol}
        Vida: ${campeon.vidaBase}
        Velocidad: ${campeon.velocidad}
        Lore: ${campeon.lore}
      `);
    });
}

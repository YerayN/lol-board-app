let campeonesData = [];

document.getElementById("campeones").addEventListener("click", () => {
  document.getElementById("pantallaCampeones").style.display = "block";
  document.getElementById("perfilCampeon").style.display = "none";

  fetch("champions.json")
    .then(response => response.json())
    .then(data => {
      campeonesData = data;
      const lista = document.getElementById("listaCampeones");
      lista.innerHTML = "";

      data.forEach(campeon => {
        const img = document.createElement("img");
        img.src = campeon.imagen;
        img.alt = campeon.nombre;
        img.addEventListener("click", () => mostrarPerfil(campeon));
        lista.appendChild(img);
      });
    });
});

function mostrarPerfil(campeon) {
  document.getElementById("pantallaCampeones").style.display = "none";
  document.getElementById("perfilCampeon").style.display = "block";

  const perfil = document.getElementById("contenidoPerfil");
  perfil.innerHTML = `
    <img src="${campeon.imagen}" alt="${campeon.nombre}">
    <h2>${campeon.nombre}</h2>
    <p><strong>Rol:</strong> ${campeon.rol}</p>
    <p><strong>Vida:</strong> ${campeon.vidaBase}</p>
    <p><strong>Velocidad:</strong> ${campeon.velocidad}</p>
    <h3>Habilidades:</h3>
    ${campeon.habilidades ? campeon.habilidades.map(h => `
      <div class="habilidad">
        <strong>${h.nombre}</strong> (CD: ${h.cooldown})
        <p>${h.descripcion}</p>
      </div>
    `).join('') : ''}
    <h3>Lore</h3>
    <p>${campeon.lore}</p>
  `;
}

document.getElementById("volverGaleria").addEventListener("click", () => {
  document.getElementById("perfilCampeon").style.display = "none";
  document.getElementById("pantallaCampeones").style.display = "block";
});

document.getElementById("cerrarCampeones").addEventListener("click", () => {
  document.getElementById("pantallaCampeones").style.display = "none";
});

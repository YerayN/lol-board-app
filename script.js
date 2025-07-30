document.getElementById("campeones").addEventListener("click", () => {
  document.getElementById("pantallaCampeones").style.display = "block";

  fetch("champions.json")
    .then(response => response.json())
    .then(data => {
      const lista = document.getElementById("listaCampeones");
      lista.innerHTML = ""; 

      data.forEach(campeon => {
        const img = document.createElement("img");
        img.src = campeon.imagen;
        img.alt = campeon.nombre;
        img.addEventListener("click", () => verDetalles(campeon));
        lista.appendChild(img);
      });
    });
});

function verDetalles(campeon) {
  alert(`
    ${campeon.nombre} - ${campeon.rol}
    Vida: ${campeon.vidaBase}
    Velocidad: ${campeon.velocidad}
    Lore: ${campeon.lore}
  `);
}

document.getElementById("cerrarCampeones").addEventListener("click", () => {
  document.getElementById("pantallaCampeones").style.display = "none";
});
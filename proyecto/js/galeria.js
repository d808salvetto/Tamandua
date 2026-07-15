document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("gallery-grid");
  if (!container) return;

  try {
    const response = await fetch("./galeria.json");
    if (!response.ok) throw new Error("No se pudo cargar galeria.json");
    const data = await response.json();
    const imagenes = data.imagenes || [];

    container.innerHTML = imagenes
      .map(
        (item) => `
          <article class="gallery-card overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-xl">
            <img src="${item.src}" alt="${item.alt}" class="h-64 w-full object-cover" />
            <div class="p-5">
              <p class="text-sm font-medium text-slate-300">${item.alt}</p>
            </div>
          </article>
        `,
      )
      .join("");
  } catch (error) {
    console.warn("Fallo al cargar galeria.json.", error);
    container.innerHTML =
      '<p class="text-slate-400">No pudimos cargar la galería en este momento.</p>';
  }
});

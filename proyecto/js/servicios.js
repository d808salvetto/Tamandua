document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("services-list");
  const featuredContainer = document.getElementById("featured-services-list");

  if (!container && !featuredContainer) return;

  try {
    const response = await fetch("./servicios.json");
    if (!response.ok) throw new Error("No se pudo cargar servicios.json");
    const data = await response.json();
    const items = data.items || [];

    const markup = items
      .map(
        (item, index) => `
          <article class="service-card rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl ${index === 0 ? "md:col-span-2" : ""}">
            <div class="flex items-center justify-between gap-4">
              <h3 class="text-xl font-semibold text-white">${item.nombre}</h3>
              <span class="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-slate-200">${item.precio}</span>
            </div>
            <p class="mt-4 text-sm leading-7 text-slate-400">${item.descripcion}</p>
          </article>
        `,
      )
      .join("");

    if (container) container.innerHTML = markup;
    if (featuredContainer) {
      const featuredItems = items.slice(0, 3);
      featuredContainer.innerHTML = featuredItems
        .map(
          (item) => `
            <article class="service-card rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl">
              <div class="flex items-center justify-between gap-4">
                <h3 class="text-xl font-semibold text-white">${item.nombre}</h3>
                <span class="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-slate-200">${item.precio}</span>
              </div>
              <p class="mt-4 text-sm leading-7 text-slate-400">${item.descripcion}</p>
            </article>
          `,
        )
        .join("");
    }
  } catch (error) {
    console.warn("Fallo al cargar servicios.json.", error);
    if (container) {
      container.innerHTML =
        '<p class="text-slate-400">No pudimos cargar los servicios en este momento.</p>';
    }
    if (featuredContainer) {
      featuredContainer.innerHTML =
        '<p class="text-slate-400">No pudimos cargar los servicios destacados.</p>';
    }
  }
});

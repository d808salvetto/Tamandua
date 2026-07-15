document.addEventListener("DOMContentLoaded", async () => {
  const defaults = {
    empresa: "Barbería Tamandúa",
    eslogan: "Estilo y tradición desde 2010",
    telefono: "099123456",
    whatsapp: "59899123456",
    instagram: "barberiatamandua",
    direccion: "Av. 18 de Julio 1234, Montevideo, Uruguay",
    horarios: "Lun a Vie 9:00–20:00 · Sáb 9:00–14:00",
    colorPrimario: "#1E293B",
  };

  try {
    const response = await fetch("./config.json");
    if (!response.ok) throw new Error("No se pudo cargar config.json");
    const data = await response.json();

    const config = { ...defaults, ...data };

    document.documentElement.style.setProperty(
      "--color-primary",
      config.colorPrimario,
    );

    document.querySelectorAll('[data-config="empresa"]').forEach((el) => {
      el.textContent = config.empresa;
    });

    document.querySelectorAll('[data-config="eslogan"]').forEach((el) => {
      el.textContent = config.eslogan;
    });

    document.querySelectorAll('[data-config="telefono"]').forEach((el) => {
      el.textContent = config.telefono;
      el.setAttribute("href", `tel:${config.telefono}`);
    });

    document.querySelectorAll('[data-config="direccion"]').forEach((el) => {
      el.textContent = config.direccion;
    });

    document.querySelectorAll('[data-config="horarios"]').forEach((el) => {
      el.textContent = config.horarios;
    });

    document.querySelectorAll('a[href*="wa.me"]').forEach((anchor) => {
      anchor.href = `https://wa.me/${config.whatsapp}?text=Hola%20quiero%20reservar`;
    });

    document.querySelectorAll('a[href*="instagram.com"]').forEach((anchor) => {
      anchor.href = `https://www.instagram.com/${config.instagram}`;
    });
  } catch (error) {
    console.warn(
      "Fallo al cargar config.json, usando valores por defecto.",
      error,
    );
    const config = defaults;

    document.documentElement.style.setProperty(
      "--color-primary",
      config.colorPrimario,
    );

    document.querySelectorAll('[data-config="empresa"]').forEach((el) => {
      el.textContent = config.empresa;
    });

    document.querySelectorAll('[data-config="eslogan"]').forEach((el) => {
      el.textContent = config.eslogan;
    });

    document.querySelectorAll('[data-config="telefono"]').forEach((el) => {
      el.textContent = config.telefono;
      el.setAttribute("href", `tel:${config.telefono}`);
    });

    document.querySelectorAll('[data-config="direccion"]').forEach((el) => {
      el.textContent = config.direccion;
    });

    document.querySelectorAll('[data-config="horarios"]').forEach((el) => {
      el.textContent = config.horarios;
    });

    document.querySelectorAll('a[href*="wa.me"]').forEach((anchor) => {
      anchor.href = `https://wa.me/${config.whatsapp}?text=Hola%20quiero%20reservar`;
    });

    document.querySelectorAll('a[href*="instagram.com"]').forEach((anchor) => {
      anchor.href = `https://www.instagram.com/${config.instagram}`;
    });
  }
});

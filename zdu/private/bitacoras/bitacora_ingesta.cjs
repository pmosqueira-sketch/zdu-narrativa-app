// Bitácora de Ingesta técnica de logs desde contenedor Docker (App Service Azure)
// Periodo cubierto: 25 al 29 de julio de 2025
// Módulo activo: ZDU‑GENIE

export const registros_ingesta = [
  {
    fecha: "2025-07-25",
    archivo: "azure_logs_2025_07_25.json",
    descripcion: "Logs iniciales del contenedor con errores de arranque detectados. Se identifican timestamps claves para correlación narrativa."
  },
  {
    fecha: "2025-07-26",
    archivo: "azure_logs_2025_07_26.json",
    descripcion: "Ciclo de vida corto del contenedor. Muestra limpieza de memoria temporal y fallos esporádicos en ping interno."
  },
  {
    fecha: "2025-07-27",
    archivo: "azure_logs_2025_07_27.json",
    descripcion: "Primer despliegue operativo con respuesta HTTP externa. Se detecta inicio de interacción externa al sistema (GET /api)."
  },
  {
    fecha: "2025-07-28",
    archivo: "azure_logs_2025_07_28.json",
    descripcion: "Despliegue exitoso con hook personalizado. Eventos internos de verificación completados sin error crítico."
  },
  {
    fecha: "2025-07-29",
    archivo: "azure_logs_2025_07_29.json",
    descripcion: "Bloque 1 – Actividad inicial de día, respuesta positiva desde el contenedor a solicitudes externas."
  },
  {
    fecha: "2025-07-29",
    archivo: "azure_logs_2025_07_29_b2.json",
    descripcion: "Bloque 2 – Reinicio del contenedor, seguimiento de eventos recurrentes e interacción con endpoints internos."
  },
  {
    fecha: "2025-07-29",
    archivo: "azure_logs_2025_07_29_b3.json",
    descripcion: "Bloque 3 – Inspección avanzada del estado de salud y tráfico en consola. Se activa control simbólico por GENIE."
  },
  {
    fecha: "2025-07-29",
    archivo: "azure_logs_2025_07_29_b4.json",
    descripcion: "Bloque 4 – Última secuencia de validaciones. GENIE cierra la auditoría con marcador narrativo cruzado."
  }
];

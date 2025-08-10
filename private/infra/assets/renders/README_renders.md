
# Renders Simbióticos · ZDU

📂 Ruta sugerida: `/private/infra/assets/renders/README.md`  
🖼️ Estado: Estructura activa, en fase de organización semántica  
📅 Checkpoint: `ZDU_AUDIT_INFRA_010825`

---

## 🧠 Propósito

Esta carpeta almacena todos los **renders visuales simbióticos** utilizados en el universo ZDU.  
Los renders son esenciales para representar gráficamente:

- Casos CDU narrativos
- Campañas tácticas
- Villanos activos (Top 25 y otros validados)
- Héroes del universo
- Escenarios operativos o temáticos

Cada render debe tener relación directa con una entidad estructurada en Supabase y estar indexado en `assets_blob_index`.

---

## 🧩 Estructura esperada

```bash
/renders/
├── casos/
│   ├── zdu-002.jpg
│   └── zdu-003.jpg
├── campañas/
│   ├── salud-zero.jpg
│   └── educacion-defensa.jpg
├── heroes/
│   ├── luna-varela.png
│   ├── regulator.jpg
├── villanos/
│   ├── blackcat.jpg
│   └── infostealer-y.png
├── global/
│   ├── universo-completo.svg
│   └── muta-core-diagrama.svg
└── README.md
```

---

## 🔁 Integración esperada

Cada imagen debe:

- Estar registrada en Supabase (`assets_blob_index`)
- Tener vínculo a `caso_id`, `campaña_id` o `nombre_villano`
- Ser nombrada con convención lógica (`zdu-XXX.jpg`, `villano-nombre.jpg`)
- Respetar licencias, estilos y candados estéticos definidos en el universo

---

## 🔐 Candados simbólicos

- Solo se aceptan imágenes asociadas a entidades activas (`casos`, `campañas`, `villanos`, `heroes`)
- Prohibido duplicado de nombres
- Estilo visual cyberpunk realista o hiperrealista (salvo cuando IFRL dicte lo contrario)
- Imagen debe incluir metadatos si es render generado por IA (PromptIA opcional)

---

## 🧠 Siguientes pasos

1. Crear `README.md` individual en cada subcarpeta (`casos/`, `campañas/`, etc.)
2. Activar crawler de renders si aplica (para ingestión masiva)
3. Registrar manualmente o por script las rutas en `assets_blob_index`
4. Asociar a publicaciones HTML en `zdu.qma.mx`

---

**Responsable simbólico:** ZDU Operator · Unidad Visual Narrativa  
**Fecha:** 2025-08-01

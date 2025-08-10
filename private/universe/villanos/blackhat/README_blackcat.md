
# Villano Simbiótico · BlackCat

📂 Ruta sugerida: `/private/infra/assets/villanos/blackcat/README.md`  
🔒 Estado: Activo (validador RULESTACK)  
🧠 Creado por: Motor Crawler + Validación CEREBRUM  
📅 Fecha creación: 2025-07-30

---

## 🧠 Descripción General

**BlackCat** es un ransomware-as-a-service (RaaS) que ha sido clasificado como una amenaza crítica dentro del universo ZDU. Su aparición ha sido registrada como parte del **Caso ZDU-002** en la vertical de salud.

Este villano fue detectado por el crawler simbiótico conectado a The Hacker News y fue validado por los motores lógicos de **CEREBRUM**, cumpliendo todos los candados simbióticos establecidos por `RULESTACK`.

---

## 📎 Fuente de Verificación

> https://www.hackernews.com/blackcat-supply-chain  
(Suministrada automáticamente por el crawler simbiótico)

---

## 🧬 Metadatos Narrativos

- **Nombre simbólico:** BlackCat
- **Exploit name:** BlackCat
- **Tipo:** ransomware-as-a-service
- **Nivel de alerta:** crítico
- **Vector de ataque:** inicial desconocido (probable phishing + vulnerabilidad en cadena de suministro)
- **Creado en:** 2025-07-30
- **Fuente:** Hacker News

---

## 🔐 Candados Aplicados

- `estatus_zdu`: activo
- `top_rule`: true (parte del Top 25)
- `caso_vinculado`: ZDU-002
- `evaluado_por`: Genie + RULESTACK
- `validado_por`: CEREBRUM (candado lógico aplicado)
- `rastro_físico`: carpeta `/villanos/blackcat/`

---

## 📁 Archivos esperados en esta carpeta

```
/blackcat/
├── render.jpg              → Imagen oficial del villano (estilo cyberpunk)
├── metadata.json           → JSON con detalles técnicos del exploit
├── evidencia.pdf           → Informe técnico narrativo (opcional)
└── README.md               → Este archivo
```

---

## 🔄 Integraciones

- Relación con tabla `villanos` en Supabase (`id`, `nombre_villano`, `tipo`, `estatus_zdu`)
- Asociado directamente a `caso_id` de ZDU-002
- Cargado simbólicamente en `assets_blob_index` para validación narrativa y despliegue

---

**Estado:** Confirmado en RULESTACK y RULEMATCH activo  
**Responsable simbólico:** ZDU Operator · Motor Narrativo de Villanos  
**Checkpoint:** `ZDU_AUDIT_INFRA_010825` → Confirmación narrativa de existencia

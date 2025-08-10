# Roadmap y Arquitectura AI · Docs

Este directorio contiene los recursos clave para visualizar y entender el roadmap estratégico del componente de inteligencia artificial dentro del universo ZDU. Se incluyen tanto interfaces visuales como descripciones estructurales de su arquitectura REST y evolución prevista.

---

## 🌐 Versiones del Roadmap Visual (HTML)

Se presentan dos versiones del archivo `index-roadmap-ai.html`, ambas muestran el mismo contenido con diferentes estilos visuales:

1. `index-roadmap-ai.html` – Tema claro.
2. `index-roadmap-ai_dark.html` – Tema oscuro.

Estas páginas proporcionan una vista gráfica de la planificación, nodos y componentes del sistema AI, integrados en la narrativa táctica.

---

## 📄 Estructura Técnica y REST API (Markdown)

Los archivos Markdown relacionados son:

### `README-AI-ROADMAP.md`
Describe los elementos visuales del roadmap de inteligencia artificial y cómo se relacionan con los componentes simbióticos del sistema ZDU.

### `README-AI-REST.md`
Introduce conceptos relacionados con la interfaz REST o componentes funcionales técnicos que sustentan el módulo de AI, como endpoints, interacción con servicios y despliegue.

---

## ✅ Resultado Consolidado

Este archivo README consolida ambos enfoques: la narrativa visual (HTML) y la descripción técnica (REST) para proporcionar un entendimiento completo de este módulo AI.

Los archivos individuales se mantienen por referencia histórica pero este README debe considerarse como **la descripción oficial del directorio `/docs`**.

---


# 🧠 ZDU · AI MODULES ROADMAP

Este documento define el roadmap estratégico, técnico y simbiótico del módulo de Inteligencia Artificial dentro del universo ZDU. Sirve como bitácora viva para la evolución del subsistema CEREBRUM ↔ IFRL ↔ MUTA·CORE ↔ Supabase.

---

## ✅ ESTADO ACTUAL

- Supabase conectado
- Tabla `ai_modules` activada
- RLS activado con políticas seguras
- REST API funcional (POST vía .http y Terminal)
- Primer manifiesto cargado con éxito

---

## 🔭 ROADMAP DE FASES SIMBIÓTICAS

### 🧩 FASE 1 · Visualizador REST simbiótico

- Crear un servicio Flask o script para consultar los `ai_modules` existentes.
- Objetivo: lectura viva desde CEREBRUM, IFRL u otro agente narrativo.

### 🔄 FASE 2 · Inserción Condicional (if_exists → UPDATE)

- Agregar lógica condicional al `.sh` o a una función AI.
- Reemplaza `POST` por `UPSERT` (o `PATCH`).
- Objetivo: mantener manifiestos AI siempre actualizados.

### ☁️ FASE 3 · Integración con Azure Functions

- Activar una función que:
    - escuche cambios en Blob Storage,
    - inserte o actualice manifiestos simbióticos.
- Objetivo: activación automática sin intervención humana.

### 🧠 FASE 4 · Activación narrativa

- Que el manifiesto AI active otros nodos:
    - alertas,
    - generación de casos,
    - activación de `ZDU-RECALC`, `RULESTACK`, etc.
- Objetivo: IA que impulsa la evolución narrativa.

### ♻️ FASE 5 · Retroalimentación IA

- Que CEREBRUM o una IA externa lea, interprete y proponga ajustes narrativos.
- Inclusión de validadores simbióticos.
- Objetivo: evolución narrativa con autocorrección dinámica.

---

## 🔒 POLÍTICAS DE SEGURIDAD ACTIVAS

- INSERT solo permitido con `service_role`
- SELECT solo para usuarios autenticados
- UPDATE controlado por backend

---

## 📂 RUTA RECOMENDADA DE ESTE DOCUMENTO

Guardar en:

```
/private/infra/ai/docs/README-AI-ROADMAP.md
```

Puede ser consumido por cualquier IA o agente lógico para comprender el plan de despliegue AI dentro de ZDU.

---

## ✍️ Última actualización: 2025-08-02

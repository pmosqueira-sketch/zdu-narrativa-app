# README-JAVA-ENV.md

## ZDU · Entorno Validado para AI + Seguridad

**Fecha de validación:** 2025-08-02

Este documento confirma la correcta instalación, validación e integración del entorno **Java 21.0.4** en el **Mac Studio M4 Max** utilizado como centro de comando del universo ZDU. Esta instalación es esencial para el despliegue de tecnologías AI, seguridad activa y ejecución de componentes del ecosistema Clerk + Supabase + DAST/IAST.

---

## 🧠 Plataforma de Comando

| Componente        | Detalle                                  |
|-------------------|-------------------------------------------|
| Equipo            | Mac Studio (2025)                         |
| Chip              | Apple M4 Max                              |
| Memoria           | 36 GB                                     |
| Sistema Operativo | macOS Sequoia 15.5                        |
| Java Instalado    | JDK 21.0.4 (ARM64, Oracle)                |
| Instalador usado  | https://download.oracle.com/java/21/archive/jdk-21.0.4_macos-aarch64_bin.dmg |

---

## 🚀 Capacidades habilitadas

1. Ejecución de microservicios locales en Flask o Spring Boot.
2. Verificación y firma JWT con Supabase y Clerk.
3. Integración de agentes AI embebidos para:
   - Escaneo de seguridad (DAST/IAST)
   - Validación de Markdown técnico (manifiestos .md)
   - Procesos simbióticos de decisión.
4. Ciclo activo Fast Response.
5. Puntos de inyección para INTELIGEN + CRAWLER AI.

---

## 🛡️ Seguridad Proactiva

Este entorno es apto para integrar herramientas de análisis continuo como:
- **DAST:** Dynamic Application Security Testing (Java embebido)
- **IAST:** Interactive Application Security Testing para flujos AI
- **JWT Signing Clerk ↔ Supabase** con llaves ECC activas
- **Webhooks inteligentes** (entrada de nuevas amenazas, CVEs)

---

## ✅ Confirmación Técnica

```bash
java -version
java version "21.0.4" 2024-07-16 LTS
Java(TM) SE Runtime Environment (build 21.0.4+9-LTS-1234)
Java HotSpot(TM) 64-Bit Server VM (build 21.0.4+9-LTS-1234, mixed mode)
```

---

Este README debe guardarse en:  
`/private/infra/validation/README-JAVA-ENV.md`  
y queda amarrado al sistema de recalibración **ZDU‑RECALC**.


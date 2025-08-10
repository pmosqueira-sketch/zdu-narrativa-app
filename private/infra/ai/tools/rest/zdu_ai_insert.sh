#!/bin/bash
curl -X POST 'https://lilxvmvykdssotolctbl.supabase.co/rest/v1/ai_modules' \
  -H "apikey: $SUPABASE_SERVICE_ROLE" \
  -H "Authorization: Bearer $SUPABASE_SERVICE_ROLE" \
  -H "Content-Type: application/json" \
  -d '{
    "manifest_name": "ZDU_AI_MANIFEST",
    "generated_on": "2025-08-02T05:56:29",
    "ai_root": "private/infra/ai/",
    "components": ["README-AI-MASTER.md"],
    "status": ["activo"]
  }'

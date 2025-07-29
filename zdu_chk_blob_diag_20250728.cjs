// ZDU Checkpoint de Diagnóstico Blob
module.exports = {
  checkpoint_id: 'ZDU-CHK-BLOB-DIAG-20250728',
  tipo: 'diagnostico_blob',
  descripcion: 'Configuración de diagnóstico activada para trazabilidad de blobs ZDU.',
  nombre: 'log_blob_zdu',
  recurso: 'zdustorage',
  destino: 'zdustoragecases',
  logs: ['Storage Read', 'Storage Write', 'Storage Delete'],
  estado: 'habilitado',
  fecha: '2025-07-28',
  id: '/subscriptions/b33199f7-e319-4d70-adaa-178206bb2b97/resourceGroups/ZDU-GROUP/providers/Microsoft.Storage/storageAccounts/zdustorage/blobServices/default/providers/microsoft.insights/diagnosticSettings/log_blob_zdu'
}

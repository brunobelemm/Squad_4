# Padrão de Logs - Cardápio Dinâmico

Este projeto utiliza logs estruturados no backend para garantir rastreabilidade, facilitar troubleshooting e integração com sistemas de monitoramento e observabilidade.

---

## 🧱 Formato dos Logs

Todos os logs são emitidos no formato **JSON**, seguindo o padrão abaixo:

### 🔹 Exemplo de Log de Requisição (INFO)

```json
{
  "timestamp": "2025-06-03T17:00:00.000Z",
  "method": "GET",
  "route": "/api/produtos",
  "status": 200,
  "responseTimeMs": 123,
  "trace_id": "c6a4e6be-6f82-4d9e-8133-df53d6243a75",
  "span_id": "28c70e0b-7bc3-4f15-893d-926580caa70f"
}

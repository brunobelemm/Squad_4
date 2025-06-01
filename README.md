# Tratamento Global de Erros

Este projeto implementa um middleware global para capturar e tratar erros no backend (Node.js + Express).

## Funcionamento

- Todas as exceções são capturadas por `errorHandler.js`.
- Os erros são registrados automaticamente no console.
- A resposta para o cliente é padronizada.

## Formato da Resposta de Erro

```json
{
  "statusCode": 500,
  "message": "Erro interno do servidor",
  "error": "Error",
  "path": "/rota",
  "timestamp": "2025-05-30T15:00:00.000Z",
  "trace_id": "abc123def"
}
```

## Tratamentos Específicos

- 400 - Requisição inválida
- 404 - Rota não encontrada
- 422 - Entidade não processável
- 500 - Erro interno do servidor

## Testes

Acesse as rotas:
- `/erro400`
- `/erro404`
- `/erro422`
- `/erro500`
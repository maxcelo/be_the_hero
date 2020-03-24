/**
 * 
 * Rota / Recurso
*/

/**
 * 
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end.
 * POST: Criar uma informação no back-end.
 * PUT: Alterar uma informação no back-end.
 * DELETE: Deletar uma informação no back-end.
*/

/**
 * Tipos de parâmetros: 
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação).
 * Route Params: Parâmetros utilizados para identificar recursos.
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */

/**
* Acessando o Query Params:
app.get('/users', (request, response) => {
  const params = request.query;
  
  console.log(params);
  
  return response.json({
    evento: 'Semana OmneiStack 11.0',
    aluno: 'Marcelo'
  });
});
*/

/**
* Acessando o Route Params:
app.get('/users/:id', (request, response) => {
  const params = request.params;
  console.log(params);
  
  return response.json({
    evento: 'Semana OmneiStack 11.0',
    aluno: 'Marcelo'
  });
});
*/

/**
* Acessando o Request Body:
app.post('/users', (request, response) => {
  const body = request.body;
  
  console.log(body);

  return response.json({
    evento: 'Semana OmneiStack 11.0',
    aluno: 'Marcelo'
  });
});
*/

/**
 * Banco de dados: 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL server.
 * NoSQL: MongoBD, CouchBD, etc.
 */
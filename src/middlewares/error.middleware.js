/**
 * Middleware global de tratamento de erros.
 */
function errorMiddleware(err, req, res, next) {
  console.error(err);

  const statusCode = err.status || 500;
  const message = err.message || 'Erro interno do servidor.';

  return res.status(statusCode).json({
    erro: statusCode === 500 ? 'Erro interno do servidor.' : message
  });
}

export default errorMiddleware;
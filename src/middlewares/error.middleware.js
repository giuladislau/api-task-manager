/**
 * Middleware global de tratamento de erros.
 */
function errorMiddleware(err, req, res, next) {
  console.error(err);

  res.status(500).json({
    erro: 'Erro interno do servidor.'
  });
}

export default errorMiddleware;
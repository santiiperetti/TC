function errorHandler(err, req, res, next) {
  console.error('Unhandled error:', err);

  const statusCode = err?.statusCode ?? err?.status ?? 500;
  const message = err?.message ?? 'Error interno del servidor';

  res.status(statusCode).json({
    message,
    error: process.env.NODE_ENV === 'production' ? undefined : err?.stack,
  });
}

module.exports = errorHandler;

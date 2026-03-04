import app from './app.js';
import { initDatabase } from './config/init.js';

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await initDatabase();

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar servidor:', error.message);
    process.exit(1);
  }
}

startServer();
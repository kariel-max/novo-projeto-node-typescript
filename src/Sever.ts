import {app} from './server/app';
import { Knex } from './server/database';

const startServer = () => {
    app.listen(process.env.PORT || 3333, () => {
      console.log(`App rodando na porta ${process.env.PORT || 3333}`);
    });
  };
  
  if (process.env.IS_LOCALHOST !== 'true') {
    console.log('Rodando migrations');
  
    Knex.migrate
      .latest()
      .then(() => {
        Knex.seed.run()
          .then(() => startServer())
          .catch(console.log);
      })
      .catch(console.log);
  } else {
    startServer();
  }
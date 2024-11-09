const hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async() => {
    const server = hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
              origin: ['*'],
            },
          },
    });

    server.route(routes);

    await server.start();
    console.log(`server sedang berjalan pada ${server.info.uri}`);
};
init();
import auth from './auth.route';

export default routes = (app) => {
  app.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'Authorization, Origin, Content-Type, Accept',
    );

    next();
  });

  auth(app);
};

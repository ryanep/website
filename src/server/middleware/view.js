export default function setupViewMiddleware(app) {
  app.set('views', `${process.cwd()}/server/views`);
  app.set('view engine', 'ejs');
}

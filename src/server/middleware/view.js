export default function setupViewMiddleware(app) {
    app.set('views', `${process.cwd()}/src/server/views`);
    app.set('view engine', 'ejs');
}
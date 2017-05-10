import compression from 'compression';
import minifyHTML from 'express-minify-html';

export default function setupGeneralMiddleware(app) {
    app.use(compression());
    app.use(minifyHTML({
        override: true,
        htmlMinifier: {
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true,
            minifyJS: true
        }
    }));
}
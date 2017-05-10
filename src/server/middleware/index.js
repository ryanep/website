import general from './general';
import statics from './statics';
import view from './view';

export function setup(app) {
    const middlewares = [general, statics, view];
    middlewares.forEach(middleware => middleware(app));
}
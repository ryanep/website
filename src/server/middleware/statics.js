import express from 'express';

export default function setupStaticMiddleware(app) {
    app.use(express.static('dist/public'));
    app.use(express.static('static'));
}
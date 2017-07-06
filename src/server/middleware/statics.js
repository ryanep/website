import express from 'express';

export default function setupStaticMiddleware(app) {
  app.use(express.static('dist/client/'));
  app.use(express.static('static'));
}

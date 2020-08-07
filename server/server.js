import fs from 'fs';
import express from 'express';
import React from 'react';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import "regenerator-runtime/runtime";
import { Provider } from 'react-redux';

import RouterHOC from './../src/router';


import configureStore from './../src/store';
import rootSaga from './../src/saga';

const {store} = configureStore();
store.runSaga(rootSaga);

const app  = express();
const port = 8000;

app.get("/:pageNumber", (req, res, next) => {
    const context = {
      initialData: store
    };
        
    const app = ReactDOMServer.renderToString(
          <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <RouterHOC />
            </StaticRouter>
          </Provider>
        );
      
       const indexFile = path.resolve('./build/index.html');
  
       fs.readFile(indexFile, 'utf8', (err, data) => {
          if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
          }
          res.setHeader('Content-Type', 'text/html');
          return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
          );
        });

      }) 
    
app.use(express.static(path.resolve(__dirname, './..', 'build')))

app.listen(process.env.port || port, () => {
    console.log("App launched on ", process.env.port || port);
} )
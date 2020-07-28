import fs from 'fs';
import express from 'express';
import React from 'react';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import { ConnectedRouter } from 'react-router-redux';
import {RouterHOC} from './../src/router/router.js';

const app  = express();
const port = 8000;




app.use("*", (req, res, next) => {
    const context = {};
    fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
        if(err){
            console.log(err);
            return res.status(500).send("Error ocurred");
        }

        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${ReactDOMServer.renderToString(
                    <ConnectedRouter 
                        location={req.url}
                        context={context}
                        >
                        <RouterHOC />
                    </ConnectedRouter>
                
                )}</div>`
            )
        )
    })
})

app.use(express.static(path.resolve(__dirname, './..', 'build')))

app.listen(process.env.port || port, () => {
    console.log("App launched on ", process.env.port || port);
} )
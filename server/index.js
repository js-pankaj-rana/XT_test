import React from "react";
import fs from "fs";
import express from "express";
import path from "path";
import { renderToString } from "react-dom/server";

import { StaticRouter } from "react-router-dom/server";
import "regenerator-runtime/runtime";

import { Provider } from "react-redux";

import RouterHOC from "../src/router";
import configureStore from "../src/store";
import rootSaga from "../src/saga";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(path.resolve(__dirname, "../build")));

app.get("/", async (req, res) => {
  const { store } = configureStore();

  // Start saga
  const sagaTask = store.runSaga(rootSaga);

  // Tell sagas there will be no more actions
  store.close();

  // Wait for all sagas to finish
  await sagaTask.toPromise();

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <RouterHOC />
      </StaticRouter>
    </Provider>,
  );

  const indexFile = path.resolve(__dirname, "../build/index.html");

  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>`),
    );
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

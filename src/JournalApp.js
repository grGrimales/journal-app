import React from "react";
import { Provider } from "react-redux";

import { store } from "./store/store";
import { AppRouter } from "./routers/AppRouter";

export default function JournalApp() {
  return (
    <Provider store={store}>
      <div>
        <AppRouter />
      </div>
    </Provider>
  );
}

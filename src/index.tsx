import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import  App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllPokemons } from "./pages/AllPokemons/allPokemons";
import { FavoritesPokemons } from "./pages/FavoritesPokemons/favoritesPokemons";
import {Provider} from 'react-redux'
import {store} from './redux/store'

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<AllPokemons />}/>
        {/* <Route path="/post/:id" element={<PostPage />} /> */}
          <Route path="/favorites" element={<FavoritesPokemons />} />
        </Route>
        <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Not Found</p>
              </main>
            }
          />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

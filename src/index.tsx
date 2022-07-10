import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import  App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllPokemons } from "./pages/AllPokemonsPage/allPokemonsPage";
import { FavoritesPage } from "./pages/FavoritesPage/favoritesPage";
import { OnePokemon } from "./pages/OnePokemonPage/onePokemonPage";
import { SignInPage } from "./pages/SignInPage/signinPage";
import { SignUpPage } from "./pages/SignUpPage/signupPage";
import { VerifyPage } from "./pages/VerifyPage/verifyPage";
import { NewPasswordPage } from "./pages/NewPasswordPage/newPasswordPage";
import { ResetPasswordPage } from "./pages/ResetPasswordPage/resetPasswordPage";
import {Provider} from 'react-redux'
import {store} from './redux/store'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'


const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<App />}>
        <Route path="/pokemon/:id" element={<OnePokemon />} /> 
          <Route path="/" element={<AllPokemons />}/>
          <Route path="/favorites" element={<FavoritesPage/>} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="verify" element={<VerifyPage />} />
          <Route path="newpassword" element={<NewPasswordPage />} />
          <Route path="resetpassword" element={<PrivateRoute><ResetPasswordPage/></PrivateRoute>}/>
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

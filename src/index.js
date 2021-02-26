import { StrictMode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { SITEKEY_V3 } from "../config/app/default";

const captchaLang = "fr";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey={SITEKEY_V3} language={captchaLang}>
      <App />
    </GoogleReCaptchaProvider>
  </StrictMode>,
  rootElement
);

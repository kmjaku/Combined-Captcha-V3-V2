import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { SITEKEY_V2 } from "../../../../config/app/default";
import { verifyCaptcha } from "../../../services/recaptcha";

export default function CaptchaV2({ googleCaptchaResponse }) {
  const handleChange = async (token) => {
    try {
      const { data } = await verifyCaptcha(token);

      googleCaptchaResponse({ data, captchaVersion: 2 });
    } catch (error) {
      console.error(error);
    }
  };
  return <ReCAPTCHA onChange={handleChange} sitekey={SITEKEY_V2} />;
}

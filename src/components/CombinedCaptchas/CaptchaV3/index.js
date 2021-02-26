import { useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { verifyCaptcha } from "../../../services/recaptcha";

function CaptchaV3({ action, googleCaptchaResponse }) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    const getResponse = async () => {
      if (!executeRecaptcha) {
        console.warn("executeRecaptcha not defined");
        return;
      }
      if (!googleCaptchaResponse) {
        console.warn("googleCaptchaResponse not defined in CaptchaV3");
        return;
      }

      try {
        const token = await executeRecaptcha(action);

        const { data } = await verifyCaptcha(token);

        googleCaptchaResponse({ data, captchaVersion: 3 });
      } catch (error) {
        console.error(error);
      }
    };

    getResponse();
  }, [action, executeRecaptcha, googleCaptchaResponse]);

  return null;
}

export default CaptchaV3;

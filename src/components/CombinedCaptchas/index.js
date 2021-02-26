import React, { useState, useEffect } from "react";
import CaptchaV2 from "./CaptchaV2";
import CaptchaV3 from "./CaptchaV3";

export default function CombinedCaptchas({ setAuthorizeToSubmit }) {
  const [googleCaptchaResponse, setGoogleCaptchaResponse] = useState({});
  const [isCaptchaV2, setIsCaptchaV2] = useState(false);
  const [isCaptchaV3, setIsCaptchaV3] = useState(true);

  useEffect(() => {
    if (googleCaptchaResponse) {
      const { data, captchaVersion } = googleCaptchaResponse;

      if (captchaVersion === 3 && isCaptchaV3) {
        const { success, score } = data;

        if (success && score >= 0.5) {
          setAuthorizeToSubmit({ authorize: true, captchaVersion });
          return;
        } else {
          setIsCaptchaV3(false);
          setIsCaptchaV2(true);
          setGoogleCaptchaResponse({});
        }
      }

      if (captchaVersion === 2 && isCaptchaV2) {
        const { success } = data;

        if (success) {
          setAuthorizeToSubmit({ authorize: true, captchaVersion });
          return;
        }
      }
    }
  }, [
    setIsCaptchaV3,
    googleCaptchaResponse,
    isCaptchaV3,
    isCaptchaV2,
    setAuthorizeToSubmit,
  ]);

  return (
    <div>
      {isCaptchaV3 && (
        <CaptchaV3 googleCaptchaResponse={setGoogleCaptchaResponse} />
      )}
      {isCaptchaV2 && (
        <CaptchaV2 googleCaptchaResponse={setGoogleCaptchaResponse} />
      )}
    </div>
  );
}

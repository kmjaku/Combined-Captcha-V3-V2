import axios from "axios";

import { LEPARISIEN_API } from "../../../config/app/default";

export const verifyCaptcha = async (tokenCaptcha) => {
  const response = await axios({
    method: "POST",
    url: `${LEPARISIEN_API}/recaptcha`,
    headers: {
      "Content-Type": "application/json",
    },
    data: { tokenCaptcha },
  });

  return response;
};

import { useState } from "react";
import { Form, Field } from "react-final-form";
import CombinedCaptchas from "./components/CombinedCaptchas";

export default function App() {
  const [authorizeToSubmit, setAuthorizeToSubmit] = useState({
    authorize: false,
    captchaVersion: null,
  });
  const [messageWhenSubmit, setMessageWhenSubmit] = useState(null);
  const onSubmit = (formData) => {
    console.log(authorizeToSubmit);
    if (formData && authorizeToSubmit.authorize) {
      setMessageWhenSubmit(
        `Captcha V${authorizeToSubmit.captchaVersion} working`
      );
    }
  };

  return (
    <div className="container">
      <div className="content">
        <Form onSubmit={onSubmit}>
          {({ handleSubmit }) => {
            return (
              <form className="formContainer" onSubmit={handleSubmit}>
                <h1 className="title">Captcha V3 & V2</h1>
                <Field
                  component="input"
                  name="email"
                  placeholder="email"
                  className="input"
                  type="password"
                />
                <Field
                  component="input"
                  name="password"
                  placeholder="password"
                  className="input"
                />
                <CombinedCaptchas setAuthorizeToSubmit={setAuthorizeToSubmit} />
                <button className="button" type="submit">
                  Envoyer
                </button>
                {messageWhenSubmit && (
                  <h2 className="successMessage">{messageWhenSubmit}</h2>
                )}
              </form>
            );
          }}
        </Form>
      </div>
    </div>
  );
}

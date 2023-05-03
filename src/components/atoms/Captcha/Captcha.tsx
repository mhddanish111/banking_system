import React from 'react';
import { isEmpty } from 'lodash';
import ReCAPTCHA from 'react-google-recaptcha';

type captchaProps = {
  setReCaptchaStatus: any;
};

const Captcha: React.FC<captchaProps> = ({ setReCaptchaStatus }) => {
  const siteKey = '6Lc7_dsjAAAAAPAvV1UPgFBBQ3VSoGxZcx3y-uDg';
  const onChange = (value: any): void => {
    let valid = false;
    let showErrorMsg = true;
    if (!isEmpty(value)) {
      valid = true;
      showErrorMsg = false;
    }
    setReCaptchaStatus({ valid, showErrorMsg });
  };
  return <ReCAPTCHA onChange={onChange} sitekey={siteKey} />;
};

export default Captcha;

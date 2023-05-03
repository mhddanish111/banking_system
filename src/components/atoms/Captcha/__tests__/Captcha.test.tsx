import React from 'react';
import { shallow } from 'enzyme';
import ReCAPTCHA from 'react-google-recaptcha';
import Captcha from '../index';

const props = {
  isoCode: '',
  setReCaptchaStatus: jest.fn(),
};

describe('<Captcha />', () => {
  let CaptchaComponent = '';

  beforeEach(() => {
    CaptchaComponent = shallow(<Captcha {...props} />);
  });

  test('should render correctly', () => {
    expect(CaptchaComponent).toMatchSnapshot();
  });

  test('should call onChange event', () => {
    const setReCaptchaStatus = jest.fn();
    CaptchaComponent.setProps({ setReCaptchaStatus });
    const event = { preventDefault: jest.fn(), value: 'abc' };
    CaptchaComponent.find(ReCAPTCHA).simulate('change', event);
    expect(setReCaptchaStatus).toHaveBeenCalled();
  });
});

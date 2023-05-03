import { shallow } from 'enzyme';
import CreditCardApply from '../CreditCardApply';

describe('<CreditCardApply />', () => {
  const wrapped = shallow(<CreditCardApply />);
  it('should render the CreditCardApply Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
});

import { shallow } from 'enzyme';
import CreditCard from '../CreditCard';

describe('<CreditCard />', () => {
  const wrapped = shallow(<CreditCard />);
  it('should render the CreditCard Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
});

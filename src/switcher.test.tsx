import { shallow } from 'enzyme';
import Switcher from './switcher';

describe('<Switcher />', () => {
  const wrapped = shallow(<Switcher />);
  it('renders Switcher Component', () => {
    expect(wrapped).toMatchSnapshot();
  });
});

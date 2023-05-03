import { shallow } from 'enzyme';
import AccountOpen from '../AccountOpen';

describe('<AccountOpen />', () => {
  const wrapped = shallow(<AccountOpen />);
  it('should render the AccountOpen Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
});

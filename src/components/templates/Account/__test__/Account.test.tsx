import { shallow } from 'enzyme';
import Account from '../Account';

describe('<Account />', () => {
  const wrapped = shallow(<Account />);
  it('should render the Account Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
});

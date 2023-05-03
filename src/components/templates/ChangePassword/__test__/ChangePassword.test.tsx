import { shallow } from 'enzyme';
import ChangePassword from '../ChangePassword';

describe('<ChangePassword />', () => {
  const wrapped = shallow(<ChangePassword />);
  it('should render the ChangePassword Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
});

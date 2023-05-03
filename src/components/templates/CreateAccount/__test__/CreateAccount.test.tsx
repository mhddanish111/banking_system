import { shallow } from 'enzyme';
import CreateAccount from '../CreateAccount';

describe('<CreateAccount />', () => {
  const wrapped = shallow(<CreateAccount />);
  it('should render the CreateAccount Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
});

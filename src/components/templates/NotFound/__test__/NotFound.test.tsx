import { shallow } from 'enzyme';
import NotFound from '../NotFound';

describe('<NotFound />', () => {
  const wrapped = shallow(<NotFound />);
  it('should render the NotFound Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
});

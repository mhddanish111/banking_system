import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  const wrapped = shallow(<App />);
  it('renders App Component', () => {
    expect(wrapped).toMatchSnapshot();
  });
});

import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../Navigation';

describe('<Navigation />', () => {
  const mockedUsedNavigate = jest.fn();
  jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate,
  }));
  const wrapped = shallow(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>,
  );
  it('should render the Title Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
});

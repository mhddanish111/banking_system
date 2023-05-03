import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

describe('<Header />', () => {
  const mockedUsedNavigate = jest.fn();
  jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate,
  }));
  const wrapped = shallow(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  it('should render the Title Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
  it('should call hamburger click event', () => {
    const handler = jest.fn();
    wrapped.find('.hamburger').simulate('click', handler);
  });
});

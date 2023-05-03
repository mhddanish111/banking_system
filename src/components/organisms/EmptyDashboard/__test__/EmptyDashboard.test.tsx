import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import EmptyDashboard from '../EmptyDashboard';

describe('<EmptyDashboard />', () => {
  const mockedUsedNavigate = jest.fn();
  jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate,
  }));
  const wrapped = shallow(
    <BrowserRouter>
      <EmptyDashboard />
    </BrowserRouter>,
  );
  it('should render the Title Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
});

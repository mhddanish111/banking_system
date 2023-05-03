import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../Layout';

describe('<Layout />', () => {
  const props = {
    pageHeading: 'Test',
  };
  const mockedUsedNavigate = jest.fn();
  jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate,
  }));
  const wrapped = shallow(
    <BrowserRouter>
      <Layout {...props}>
        <div>Test</div>
      </Layout>
    </BrowserRouter>,
  );
  it('should render the Layout Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
});

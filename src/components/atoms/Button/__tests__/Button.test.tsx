import { shallow } from 'enzyme';
import Button from '../Button';

describe('<Button />', () => {
  const title = 'submit';
  const props = {
    className: '',
    children: <div />,
    ariaLabel: 'button',
    disabled: false,
    onClick: jest.fn(),
  };
  const wrapped = shallow(
    <Button {...props} type="submit">
      {title}
    </Button>,
  );
  it('should render the Title Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
});

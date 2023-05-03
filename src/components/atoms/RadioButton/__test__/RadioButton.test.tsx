import { shallow } from 'enzyme';
import RadioButton from '../RadioButton';

describe('<RadioButton />', () => {
  const onSelect = jest.fn();
  const props = {
    className: '',
    value: 'test',
    ariaLabel: 'radio-btn',
    checked: true,
    name: 'test',
    id: 'test',
    tabIndex: 0,
    children: <div />,
    onSelect,
  };
  const wrapper = shallow(<RadioButton {...props} />);
  it('should render the Heading Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call onChange event', () => {
    const event = { target: { disabled: false } };
    const disabledEvent = {
      preventDefault: jest.fn(),
      target: { disabled: true },
    };
    const handleChange = jest.fn();
    wrapper
      .find('.radio-button')
      .simulate('change', event, handleChange(event));
    wrapper
      .find('.radio-button')
      .simulate('change', disabledEvent, handleChange(disabledEvent));
    expect(handleChange).toHaveBeenCalled();
  });
});

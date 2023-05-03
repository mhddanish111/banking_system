import { shallow } from 'enzyme';
import SelectDropdown from '../SelectDropdown';

describe('<SelectDropdown />', () => {
  const onChange = jest.fn();
  const options = [{ label: 'test', value: 'test' }];
  const props = {
    className: '',
    value: 'test',
    ariaLabel: 'select dropdown',
    name: 'test',
    label: 'test',
    id: 'test',
    placeholder: 'Select',
    options,
    onChange,
  };
  const wrapper = shallow(<SelectDropdown {...props} />);
  it('should render the SelectDropdown Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

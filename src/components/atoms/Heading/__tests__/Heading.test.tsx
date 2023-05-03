import { shallow } from 'enzyme';
import Heading from '../Heading';

describe('<Heading />', () => {
  const props = {
    className: '',
    ariaLabel: 'heading',
  };
  const wrapper = shallow(
    <Heading HeadingType="h1" {...props}>
      Heading
    </Heading>,
  );
  it('should render the Heading Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

import { shallow } from 'enzyme';
import AppContextWrapper from '../index';

describe('Context', () => {
  const wrapper = shallow(<AppContextWrapper />);
  test('AppContextWrapper', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

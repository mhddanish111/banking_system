import { shallow } from 'enzyme';
import Pagination from '../Pagination';

describe('<Pagination />', () => {
  const props = {
    className: '',
    totalCount: 50,
    currentPage: 1,
    pageSize: 10,
    onPageChange: jest.fn(),
  };
  const wrapper = shallow(<Pagination {...props}>Heading</Pagination>);
  it('should render the Pagination Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call next button', () => {
    const onNext = jest.fn();
    wrapper.find('.arrow-right').simulate('onClick', onNext());
    expect(onNext).toHaveBeenCalled();
  });
  it('should call previous button', () => {
    const onPrevious = jest.fn();
    wrapper.find('.arrow-left').simulate('onClick', onPrevious());
    expect(onPrevious).toHaveBeenCalled();
  });
  it('should call pagination item button', () => {
    const onPageChange = jest.fn();
    wrapper.find('.selected').simulate('onClick', onPageChange(1));
    expect(onPageChange).toHaveBeenCalled();
  });
});

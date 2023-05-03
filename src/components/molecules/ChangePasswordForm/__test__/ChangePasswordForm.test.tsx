import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import ChangePasswordForm from '../ChangePasswordForm';
import { CHANGE_PASSWORD } from '../../../../constant/Mutation';

describe('<ChangePasswordForm />', () => {
  const changePasswordData = {
    oldPassword: 'test',
    newPassword: 'test@123',
  };
  const mocks = [
    {
      request: {
        query: CHANGE_PASSWORD,
        variables: {
          changePasswordInput: changePasswordData,
        },
      },
      result: {
        data: {
          changePassword: {
            message: 'test',
            success: true,
          },
        },
      },
    },
  ];
  const wrapper = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ChangePasswordForm />
    </MockedProvider>,
  ).toJSON;
  it('should render the ChangePasswordForm Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

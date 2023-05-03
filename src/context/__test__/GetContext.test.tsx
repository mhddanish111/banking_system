import React from 'react';
import GetContext from '../GetContext';

describe('GetContext', () => {
  test('GetContext', () => {
    const contextValues = { state: {}, dispatch: jest.fn() };
    jest.spyOn(React, 'useContext').mockImplementation(() => contextValues);
    expect(GetContext()).toEqual(contextValues);
  });
});

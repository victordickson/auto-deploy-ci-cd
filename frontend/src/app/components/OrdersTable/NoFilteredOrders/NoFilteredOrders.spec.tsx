<<<<<<< HEAD
import { ShallowWrapper, shallow } from 'enzyme';
import { NoFilteredOrders } from '.';
import * as React from 'react';
import { Button } from 'app/components/Button';

const mockHandleResetOrders = jest.fn();
describe('<NoFilteredOrders>', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <NoFilteredOrders
        searchText=''
        handleResetOrders={mockHandleResetOrders}
      />,
    );
  });

  describe('when reset button is clicked', () => {
    it('should called handleResetOrders with empty string', () => {
      wrapper.find(Button).simulate('click');
      expect(mockHandleResetOrders).toBeCalledWith('');
    });
  });
});
=======
import { ShallowWrapper, shallow } from 'enzyme';
import { NoFilteredOrders } from '.';
import * as React from 'react';
import { Button } from 'app/components/Button';

const mockHandleResetOrders = jest.fn();
describe('<NoFilteredOrders>', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <NoFilteredOrders
        searchText=''
        handleResetOrders={mockHandleResetOrders}
      />,
    );
  });

  describe('when reset button is clicked', () => {
    it('should called handleResetOrders with empty string', () => {
      wrapper.find(Button).simulate('click');
      expect(mockHandleResetOrders).toBeCalledWith('');
    });
  });
});
>>>>>>> c66a194ed828982ae51a56ee1c6a93206da232a9

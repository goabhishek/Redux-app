import { ActionType } from '../constants/action-type';

const initialState = {
  products: [
    {
      id: 1,
      title: 'Dipesh',
      category: 'programmer',
    },
  ],
};

export const productReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};

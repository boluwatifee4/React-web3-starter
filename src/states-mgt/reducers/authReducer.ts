import * as types from "../types"

const initialState = {
  states: null,
  loading: true
};

 type ActionResponse = {
  type: string;
  payload: any;
};

export default (state = initialState, { type, payload }: ActionResponse) => {
  switch (type) {
    case types.METAMASK_SIGNIN.REQUEST :
      return {
        ...state,
        loading: true
      }
      default:
        return state;
    }
};

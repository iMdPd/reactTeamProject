/* selectors */
export const getCurrentViewportMode = ({ viewportMode }) => viewportMode;

/* action name creator */
const createActionName = actionName => `app/viewportMode/${actionName}`;

/* action types */
const UPDATE_MODE = createActionName('UPDATE_MODE');

/* action creators */
export const updateViewportMode = payload => ({ type: UPDATE_MODE, payload });

/* reducer */
const viewportModeReducer = (statePart = {}, action) => {
  switch (action.type) {
    case UPDATE_MODE:
      return action.payload;
    default:
      return statePart;
  }
};

export default viewportModeReducer;

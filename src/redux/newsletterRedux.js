/* selectors */
export const getNewsleterByEmail = ({ newsletter }, email) =>
  newsletter.find(confirmedUser => confirmedUser === email);

/* action name creator */
const reducerName = 'newsletter';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_NEWSLETTER = createActionName('ADD_NEWSLETTER');

/* action creators */
export const addNewsletter = payload => ({ payload, type: ADD_NEWSLETTER });

/* reducer */
export default function reducer(statePart = [], action = '') {
  switch (action.type) {
    case ADD_NEWSLETTER:
      return [...statePart, action.payload];

    default:
      return statePart;
  }
}

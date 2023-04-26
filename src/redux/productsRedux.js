/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getComparedProducts = ({ products }) =>
  products.filter(product => product.compare === true);

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getSaleProducts = ({ products }) =>
  products.filter(({ price, oldPrice }) => price < oldPrice);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const TOGGLE_FAVORITE = createActionName('TOGGLE_FAVORITE');
const TOGGLE_COMPARE = createActionName('TOGGLE_COMPARE');
const UPDATE_USER_RATING = createActionName('UPDATE_USER_RATING');

/* action creators */
export const toggleFavorite = payload => ({ payload, type: TOGGLE_FAVORITE });
export const toggleCompare = payload => ({ payload, type: TOGGLE_COMPARE });
export const updateUserRating = (id, rating) => ({
  type: UPDATE_USER_RATING,
  payload: { id, rating },
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_USER_RATING:
      return statePart.map(product => {
        if (product.id === action.payload.id) {
          return { ...product, userRating: action.payload.rating };
        }
        return product;
      });
    case TOGGLE_FAVORITE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, favorite: !product.favorite }
          : product
      );

    case TOGGLE_COMPARE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, compare: !product.compare }
          : product
      );

    default:
      return statePart;
  }
}

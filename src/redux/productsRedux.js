/* Action types */
const UPDATE_CLIENT_RATING = 'products/UPDATE_CLIENT_RATING';

/* Action creators */
export const updateClientRating = (id, rating) => ({
  type: UPDATE_CLIENT_RATING,
  payload: { id, rating },
});

/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_CLIENT_RATING:
      return statePart.map(product => {
        if (product.id === action.payload.id) {
          return { ...product, userRating: action.payload.rating };
        }
        return product;
      });
    default:
      return statePart;
  }
}

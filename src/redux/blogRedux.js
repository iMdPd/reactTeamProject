/* selector */
export const getAll = ({ blogs }) => blogs;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

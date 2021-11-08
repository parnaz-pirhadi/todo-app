export const createAction = (type, withAuth = false) => (payload = {}) => ({
  type,
  payload,
  withAuth,
});
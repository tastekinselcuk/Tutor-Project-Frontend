import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    user: null,
  },
  getters: {
    _isAuthenticated: state => state.user !== null,
    _getCurrentUser(state) {
      return state.user;
    },
    _currentUserRole: state => state.user?.role,
    getUserDto(state) {
      if (state.user) {
        return {
          firstname: state.user.firstname,
          lastname: state.user.lastname
        };
      } else {
        return null;
      }
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    logoutUser(state) {
      state.user = null;
    },
  },
  actions: {
  },
  plugins: [createPersistedState()]
});

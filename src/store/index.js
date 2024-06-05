import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
  },
  getters: {
    _isAuthenticated: state => state.user !== null,
    _getCurrentUserRole: state => state.user ? state.user.role : null,
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
    _getCurrentUserEmailPrefix(state) {
      if (state.user && state.user.email) {
        return state.user.email.split('@')[0];
      } else {
        return null;
      }
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },

    logoutUser(state) {
      state.user = null;
      localStorage.removeItem('user');
    }
  },
  actions: {
    login({ commit }, { user }) {
      commit('setUser', user);
    },
    logout({ commit }) {
      commit('logoutUser');
    }
  },
  plugins: [createPersistedState()]
});

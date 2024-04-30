import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    user: null,
    username : null,
    userRole : null,
  },
  getters: {
    _isAuthenticated: state => state.user !== null,
    _getCurrentUser(state) {
      const user = state.user;
      return user;
    },
    _currentUserId: state => state?.user?.id,
  },
  mutations: {
    setUser(state, user){
      state.user = user;
    },
    logoutUser(state) {
      state.user = null;
    },
    setUserRole(state, role) {
      state.userRole = role;
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})

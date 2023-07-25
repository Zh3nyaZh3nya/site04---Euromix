export const state = () => ({
  cartData: [],
})

export const mutations = {
  SELECT_CARD(state, data) {
    state.cartData.push(data)
  },
  DELETE_OBJECT(state, data) {
    state.cartData.splice(data, 1)
  },
}

export const actions = {
  selectCard({commit}, data) {
    commit('SELECT_CARD', data)
  },
  deleteObject({commit}, data) {
    commit('DELETE_OBJECT', data)
  }
}

export const getters = {
  getCartData: (state) => state.cartData,
  getCounter: (state) => state.count,
};

export const state = () => ({
  payerData: []
})

export const mutations = {
  UPDATE_PAYER(state, data) {
    state.payerData.push(data)
  },
  CHANGE_DATA(state, { index, newData }) {
    if (index >= 0 && index < state.payerData.length) {
      state.payerData[index] = { ...state.payerData[index], ...newData };
    }
  },
  DELETE_PAYER(state, index) {
    state.payerData.splice(index, 1)
  }
}

export const actions = {

}

export const getters = {
  getPayerData: (state) => state.payerData,
  getSelectData: (state) => state.payerData.fio,
}

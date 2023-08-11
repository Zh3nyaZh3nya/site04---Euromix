export const state = () => ({
  addressData: [],
  deliveryData: [
    {
      id: 1,
      img: "/cartImg/image1.png",
      name: "ПЭК",
    },
    {
      id: 2,
      img: "/cartImg/image2.png",
      name: "dhl"
    },
    {
      id: 3,
      img: "/cartImg/image1.png",
      name: "пэк",
    },
    {
      id: 4,
      img: "/cartImg/image2.png",
      name: "DHL"
    },
  ],
  selectedAddress: {
    id: 1,
  }
})

export const mutations = {
  UPDATE_ADDRESS(state, data) {
    state.addressData.push(data)
  },
  CHANGE_ADDRESS(state, { index, newData }) {
    if (index >= 0 && index < state.addressData.length) {
      state.addressData[index] = { ...state.addressData[index], ...newData };
    }
  },
  DELETE_ADDRESS(state, index) {
    state.addressData.splice(index, 1)
  },
  SELECTED_ADDRESS(state, item) {
    state.selectedAddress = Object.assign({}, state.selectedPayer, item);
  }
}

export const actions = {

}

export const getters = {
  getAddressData: (state) => state.addressData,
  getDeliveryData: (state) => state.deliveryData,
  getSelectedAddress: (state) => state.selectedAddress,
}

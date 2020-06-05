export default {
  addPet: ({ commit }, payload) => {
    // commit is from vuex, pet is our custom parameter
    commit('appendPet', payload) // create mutation
  }
}

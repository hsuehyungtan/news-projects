import axios from 'axios'
import { getHost, getProtocol } from '../../../../src/util/comm'

const host = getHost()
const protocal = getProtocol()

export default {
  namespaced: true,
  state() {
    return {
      articleData: {},
      isSearching: false
    }
  },
  mutations: {
    SET_ARTICLE_DATA(state, posts) {
      state.articleData = posts
    },
    SET_IS_SEARCHING(state, value) {
      state.isSearching = value
    }
  },
  actions: {
    async SEARCH_ARTICLE({ commit }, payload) {
      commit('SET_IS_SEARCHING', true)
      const res = await axios.post(
        `${protocal}//${host}/readr-search`,
        payload
      )
      commit('SET_IS_SEARCHING', false)
      commit('SET_ARTICLE_DATA', res.data)
      return res
    }
  }
}
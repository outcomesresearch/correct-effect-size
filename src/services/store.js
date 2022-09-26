import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  outcomeMeasure: undefined,
  focusOfAnalysis: undefined,
  furtherChoices: undefined,
};

const getters = {
  getOutcomeMeasure(state) {
    return state.outcomeMeasure;
  },
  getFocusOfAnalysis(state) {
    return state.focusOfAnalysis;
  },
  getFurtherChoices(state) {
    return state.furtherChoices;
  },
};

const actions = {
  SET_OUTCOMEMEAURE({ commit }, value) {
    commit('SET_OUTCOMEMEAURE_MUTATION', value);
  },
  SET_FOCUSOFANALYSIS({ commit }, value) {
    commit('SET_FOCUSOFANALYSIS_MUTATION', value);
  },
  SET_FURTHERCHOICES({ commit }, value) {
    commit('SET_FURTHERCHOICES_MUTATION', value);
  },
};

const mutations = {
  SET_OUTCOMEMEAURE_MUTATION(state, value) {
    state.outcomeMeasure = value;
  },
  SET_FOCUSOFANALYSIS_MUTATION(state, value) {
    state.focusOfAnalysis = value;
  },
  SET_FURTHERCHOICES_MUTATION(state, value) {
    state.furtherChoices = value;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

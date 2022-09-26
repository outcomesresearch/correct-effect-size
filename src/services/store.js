import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  outcomeMeasure: undefined,
  focusOfAnalysis: undefined,
  furtherChoice: undefined,
};

const getters = {
  getOutcomeMeasure(state) {
    return state.outcomeMeasure;
  },
  getFocusOfAnalysis(state) {
    return state.focusOfAnalysis;
  },
  getFurtherChoice(state) {
    return state.furtherChoice;
  },
};

const actions = {
  SET_OUTCOMEMEAURE({ commit }, value) {
    commit('SET_OUTCOMEMEAURE_MUTATION', value);
  },
  SET_FOCUSOFANALYSIS({ commit }, value) {
    commit('SET_FOCUSOFANALYSIS_MUTATION', value);
  },
  SET_FURTHERCHOICE({ commit }, value) {
    commit('SET_FURTHERCHOICE_MUTATION', value);
  },
};

const mutations = {
  SET_OUTCOMEMEAURE_MUTATION(state, value) {
    state.outcomeMeasure = value;
  },
  SET_FOCUSOFANALYSIS_MUTATION(state, value) {
    state.focusOfAnalysis = value;
  },
  SET_FURTHERCHOICE_MUTATION(state, value) {
    state.furtherChoice = value;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

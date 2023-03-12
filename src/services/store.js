import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  outcomeMeasure: undefined,
  focusOfAnalysis: undefined,
  furtherChoice: undefined,
  showDescriptions: true,
  chosenEffectSizeMeasure: undefined,
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
  getShowDescriptions(state) {
    return state.showDescriptions;
  },
  getChosenEffectSizeMeasure(state) {
    return state.chosenEffectSizeMeasure;
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
  SET_SHOWDESCRIPTIONS({ commit }, value) {
    commit('SET_SHOWDESCRIPTIONS_MUTATION', value);
  },
  SET_CHOSENEFFECTSIZEMEASURE({ commit }, value) {
    commit('SET_CHOSENEFFECTSIZEMEASURE_MUTATION', value);
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
  SET_SHOWDESCRIPTIONS_MUTATION(state, value) {
    state.showDescriptions = value;
  },
  SET_CHOSENEFFECTSIZEMEASURE_MUTATION(state, value) {
    state.chosenEffectSizeMeasure = value;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

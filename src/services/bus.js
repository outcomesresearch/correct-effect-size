import Vue from 'vue';

export const MODAL_CLOSED = 'closed by either "Close" or clicking outside';
export const STEP_CHANGED = 'step change';
export const GO_BACK = 'emitted when one step wants to go back';
export const ADVANCE = 'emitted when one step wants to go forward a step';
export const bus = new Vue();

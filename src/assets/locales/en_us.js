import keys from './keys.js';
import { en } from 'vuetify/lib/locale/';

export default {
  ...en, // existing vuetify translation entries
  [keys.FOOTER_COPYRIGHT]:
    'Copyright © 2020 Washington University School of Medicine, St. Louis, Missouri',
  [keys.NEXT]: 'Next',
  [keys.BACK]: 'Back',
  [keys.BEGIN]: 'Begin',
};

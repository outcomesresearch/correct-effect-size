import {
  CORRELATION_WITH_CONTINUOUS_MEASURE,
  COMPARISON_OF_TWO_GROUPS,
  COMPARISON_OF_THREEMORE_GROUPS,
  REGRESSION_MODEL,
} from './focusOfAnalysisConstants';

import {
  REPORTING_PAIRWISE_DIFFERENCES,
  REPORITNG_OVERALL_EFFECT,
  ADJUSTED_ASSOCIATION,
  OVERALL_MODEL,
} from './furtherChoicesConstants';

let pointBSerial = {
  displayName: 'Point Bi-serial correlation',
  description: 'Point Bi-serial correlation description',
};

let OR = {
  displayName: 'OR',
  description: 'OR Description',
};

let PR = {
  displayName: 'PR',
  description: 'PR Description',
};

let riskDifference = {
  displayName: 'Risk Difference',
  description: 'Risk Difference Description',
};

let phi = {
  displayName: 'Phi',
  description: 'Phi Description',
};

const effectSizeMeasuresGroup2 = [
  {
    header: 'general',
    items: [OR, PR, riskDifference, phi],
  },
];

let cramersV = {
  displayName: "Cramer's V",
  description: 'phi Description',
};

let goodmanKruskalLamda = {
  displayName: 'Goodman-Kruskal Lamda',
  description: 'Goodman-Kruskal Lamda Description',
};

let cliffsDelta = {
  displayName: "Cliff's delta",
  description: "Cliff's delta Description",
};

let kendallsTau = {
  displayName: "Kendall's tau",
  description: "Kendall's tau Description",
};

const effectSizeMeasuresGroup3 = [
  {
    header: 'Nominal',
    items: [cramersV, goodmanKruskalLamda],
  },
  {
    header: 'Ordinal',
    items: [cliffsDelta, kendallsTau],
  },
];

const pseudoRSquared = {
  displayName: 'Pseudo R Squared',
  description: 'Pseudo R Squared description',
};

const cIndex = {
  displayName: 'C-Index',
  description: 'C-Index description',
};

const percentCorrectlyClassified = {
  displayName: 'Percent correctly classified',
  description: 'Percent Correctly Classified description',
};

export default {
  name: 'categorical',
  displayName: 'Categorical',
  description:
    'These are dependent variables that have mutually exclusive outcomes. That is, the choice of one outcome means non-use of the other outcome. An example is a household that may choose to use charcoal, LPG, or electricity for cooking but not the use of two of these categories at a time.',
  focusOfAnalysis: [
    {
      ...CORRELATION_WITH_CONTINUOUS_MEASURE,
      furtherChoices: [
        {
          name: 'skip',
          appropriateEffectSizeMeasures: [
            {
              header: 'general',
              items: [pointBSerial],
            },
          ],
        },
      ],
    },
    {
      ...COMPARISON_OF_TWO_GROUPS,
      furtherChoices: [
        {
          name: 'skip',
          appropriateEffectSizeMeasures: effectSizeMeasuresGroup2,
        },
      ],
    },
    {
      ...COMPARISON_OF_THREEMORE_GROUPS,
      furtherChoices: [
        {
          ...REPORTING_PAIRWISE_DIFFERENCES,
          appropriateEffectSizeMeasures: effectSizeMeasuresGroup2,
        },
        {
          ...REPORITNG_OVERALL_EFFECT,
          appropriateEffectSizeMeasures: effectSizeMeasuresGroup3,
        },
      ],
    },
    {
      ...REGRESSION_MODEL,
      furtherChoices: [
        {
          ...ADJUSTED_ASSOCIATION,
          appropriateEffectSizeMeasures: [
            {
              header: 'general',
              items: [OR],
            },
          ],
        },
        {
          ...OVERALL_MODEL,
          appropriateEffectSizeMeasures: [
            {
              header: 'general',
              items: [pseudoRSquared, cIndex, percentCorrectlyClassified],
            },
          ],
        },
      ],
    },
  ],
};

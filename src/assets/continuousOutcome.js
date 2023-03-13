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

let pearsonCorrelationCoefficientR = {
  displayName: 'Pearson Correlation Coefficient r',
};

let spearmansRho = {
  displayName: 'Spearman’s rho (non-parametric)',
};

let coefficientOfDeterminationR2 = {
  displayName: 'Coefficient of determination R<sup>2</sup>',
};

let meanDifference = {
  displayName: 'Mean difference',
};

let medianDifference = {
  displayName: 'Median difference (non parametric)',
};

let cohensD = {
  displayName: "Cohen's d",
};

let glassDelta = {
  displayName: "Glass's Δ",
};

let hedgesG = {
  displayName: "Hedges' g",
};

let rNonParametric = {
  displayName: 'r (non parametric)',
};

let eta2 = {
  displayName: 'Eta squared (η<sup>2</sup>)',
};

let omega2 = {
  displayName: 'Omega squared (ω<sup>2</sup>)',
};

let betaCoefficientStandardizedOrUnstandardized = {
  displayName: 'Beta coefficient standardized or unstandardized',
  description:
    'description for Beta coefficient standardized or unstandardized',
};

let r2 = {
  displayName: 'R<sup>2</sup>',
};

let adjustedR2 = {
  displayName: 'Adjusted R<sup>2</sup>',
};

let effectSizeMeasuresGroup2 = [
  {
    header: 'Simple Measures',
    items: [meanDifference, medianDifference],
  },
  {
    header: 'Standardized Measures',
    items: [cohensD, glassDelta, hedgesG, rNonParametric],
  },
];

export default {
  name: 'continuous',
  displayName: 'Continuous',
  description:
    'A continuous outcome measure is a type of outcome measure used in clinical studies to quantify changes in a continuous variable such as blood pressure, weight, or height.  It is typically analyzed using statistical methods such a mean, median, or regression analysis.',
  focusOfAnalysis: [
    {
      ...CORRELATION_WITH_CONTINUOUS_MEASURE,
      furtherChoices: [
        {
          name: 'skip',
          appropriateEffectSizeMeasures: [
            {
              header: 'general',
              items: [
                pearsonCorrelationCoefficientR,
                spearmansRho,
                coefficientOfDeterminationR2,
              ],
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
          appropriateEffectSizeMeasures: [
            {
              header: 'general',
              items: [eta2, omega2],
            },
          ],
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
              items: [betaCoefficientStandardizedOrUnstandardized],
            },
          ],
        },
        {
          ...OVERALL_MODEL,
          appropriateEffectSizeMeasures: [
            {
              header: 'general',
              items: [r2, adjustedR2],
            },
          ],
        },
      ],
    },
  ],
};

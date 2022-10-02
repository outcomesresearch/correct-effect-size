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
  description: 'description of pearson correlation coefficient r',
};

let spearmansRho = {
  displayName: 'Spearman’s rho (non-parametric)',
  description: 'description of Spearman’s rho (non-parametric)',
};

let coefficientOfDeterminationR2 = {
  displayName: 'Coefficient of determination R^2',
  description: 'description of Coefficient of determination R^2',
};

let meanDifference = {
  displayName: 'Mean difference',
  description: 'description of Mean Difference',
};

let medianDifference = {
  displayName: 'Median difference (non parametric)',
  description: 'description of median difference (non-parametric)',
};

let cohensD = {
  displayName: "Cohen's d",
  description: "description for Cohen's D",
};

let glassDelta = {
  displayName: "Glass's delta",
  description: "description of for Glass's Delta",
};

let hedgesG = {
  displayName: "Hedge's g",
  description: "description for Hedge's G",
};

let rNonParametric = {
  displayName: 'r (non parametric)',
  description: 'description for non parametric R',
};

let eta2 = {
  displayName: 'Eta squared',
  description: 'description for eta squared',
};

let omega2 = {
  displayName: 'Omega squared',
  description: 'description for omega squared',
};

let betaCoefficientStandardizedOrUnstandardized = {
  displayName: 'Beta coefficient standardized or unstandardized',
  description:
    'description for Beta coefficient standardized or unstandardized',
};

let r2 = {
  displayName: 'R^2',
  description: 'description for R^2',
};

let adjustedR2 = {
  displayName: 'Adjusted R^2',
  description: 'description for adjusted R^2',
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
    'Continuous outcomes are often measured at both baseline and followup time points. Results of continuous data can be reported as means, mean differences, or differences in change score from baseline, and measures of precision are reported as standard deviation (SD), standard error (SE), or confidence intervals.',
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

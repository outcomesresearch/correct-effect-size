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
  displayName: "Beta coefficient standardized or unstandardized",
  description: `In regression models, the beta coefficient (β) quantifies the expected change in the outcome for a one-unit increase in a predictor, holding other variables constant.

Unstandardized β is expressed in the outcome’s units and is most useful for direct, real-world interpretation (e.g., “+3.2 mmHg per 1 kg”). Its magnitude depends on how variables are scaled.

Standardized β (often β*) rescales variables to standard-deviation units, so it reflects the change (in SDs) in the outcome per 1 SD increase in the predictor. This facilitates comparison of relative importance across predictors within the same model.

Sign indicates direction of association; magnitude reflects strength on the chosen scale. Estimates are conditional on the other predictors in the model and can be affected by multicollinearity and variable scaling/centering.

Model family matters: in linear regression, β is in outcome units; in logistic regression, β is on the log-odds scale and is commonly exponentiated to report an odds ratio (OR = e^β); in Cox regression, e^β is a hazard ratio (HR). Report β with confidence intervals and, where helpful, standardized and unstandardized forms.`,
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

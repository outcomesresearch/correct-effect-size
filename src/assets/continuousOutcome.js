let pearsonCorrelationCoefficientR = {
  displayName: 'Pearson Correlation Coefficient R',
  description: 'description of pearson correlation coefficient R',
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
  displayName: 'Mean Difference',
  description: 'description of Mean Difference',
};

let medianDifference = {
  displayName: 'Median Difference (non parametric)',
  description: 'description of median difference (non-parametric)',
};

let cohensD = {
  displayName: "Cohen's D",
  description: "description for Cohen's D",
};

let glassDelta = {
  displayName: "Glass' Delta",
  description: "description of for Glass's Delta",
};

let hedgesG = {
  displayName: "Hedge's G",
  description: "description for Hedge's G",
};

let rNonParametric = {
  displayName: 'r (non parametric)',
  description: 'description for non parametric R',
};

let eta2 = {
  displayName: 'Eta Squared',
  description: 'description for eta squared',
};

let omega2 = {
  displayName: 'Omega Squared',
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
      name: 'correlationWithContinuousMeasure',
      displayName: 'Correlation with continuous measure',
      description: 'correlationWithContinuousMeasure description',
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
      name: 'comparisonOfTwoGroups',
      displayName: 'Comparison of 2 groups',
      description: 'comparisonOfTwoGroups description',
      furtherChoices: [
        {
          name: 'skip',
          appropriateEffectSizeMeasures: effectSizeMeasuresGroup2,
        },
      ],
    },
    {
      name: 'comparisonOfThreeOrMoreGroups',
      displayName: 'Comparison of 3 or more groups',
      description: 'comparisonOfThreeOrMoreGroups description',
      furtherChoices: [
        {
          name: 'reportingPairWiseDifferences',
          displayName: 'Reporting Pairwise Differences',
          description: 'reportingPairWiseDifferences description',
          appropriateEffectSizeMeasures: effectSizeMeasuresGroup2,
        },
        {
          name: 'reportingOverallEffect',
          displayName: 'Reporting Overall Effect',
          description: 'reportingOverallEffect description',
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
      name: 'regressionModel',
      displayName: 'Regression model',
      description: 'regressionModel description',
      furtherChoices: [
        {
          name: 'adjustedAssociationWithPredictor',
          displayName: 'Adjusted Association with predictor',
          description: 'Adjusted Association with predictor description',
          appropriateEffectSizeMeasures: [
            {
              header: 'general',
              items: [betaCoefficientStandardizedOrUnstandardized],
            },
          ],
        },
        {
          name: 'reportingOverallEffect',
          displayName: 'Reporting Overall Effect',
          description: 'Reporting Overall Effect description',
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

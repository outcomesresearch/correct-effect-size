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
  description:
    'Point biserial correlation coefficient quantifies the strength of association between a continuous and a  dichotomous variable.',
};

let OR = {
  displayName: 'Odds Ratio',
  description:
    '<p>Odds Ratio (OR) is a measure of effect size used in case-control studies. OR quantifies how much higher are the odds for exposure (risk factor) among cases as compared to controls.</p><p>OR = 1 indicates that odds are the same for cases and controls, and there is no association between the 2 variables.</p><p>OR > 1, the odds for the event of interest are higher for cases as compared to controls.</p><p>OR < 1, the odds for the event of interest are lower for cases as compared to controls.</p>',
};

let RR = {
  displayName: 'Risk Ratio',
  description:
    '<p>Risk Ratio (RR) is a measure of the strength of association between 2 categorical variables calculated as the ratio of the probability of the outcome occurring in one group (exposed group) compared to the probability of the outcome occurring in the other (not exposed) group(s).</p><p>RR = 1 indicates that the probability of the outcome is the same in the 2 groups being compared, and there is no association between the 2 variables.</p><p>RR > 1, the probability or risk for the outcome is higher in the exposed group.</p><p>RR < 1, the probability or risk for the outcome is lower in the exposed group.</p>',
};

let riskDifference = {
  displayName: 'Risk Difference',
  description:
    'Risk difference is the difference between the risk of an outcome of interest occurring in two groups.',
};

let phi = {
  displayName: 'Phi coefficient',
  description:
    '<p>The phi coefficient (ɸ) is a measure of the strength of association between two dichotomous variables.</p><p>Phi coefficient has a range from 0-1 with 0 value displaying no correlation between the two variables.</p><p>A value of 0.1 is considered a small effect, 0.3 medium effect, and 0.5 large effect.</p>',
};

const effectSizeMeasuresGroup2 = [
  {
    header: 'general',
    items: [OR, RR, riskDifference, phi],
  },
];

let cramersV = {
  displayName: "Cramer's 𝑉",
  description:
    '<p>Cramer’s 𝑉 measures the strength of correlation between two nominal variables and values range from 0 to 1, with 0 indicating no association between the two variables and 1 a perfect association.</p><p>Cramer’s 𝑉 values of > 0.05 indicate weak, > 0.10 moderate, > 0.15 strong, and > 0.25 very strong association.</p>',
};

let goodmanKruskalLamda = {
  displayName: 'Goodman-Kruskal λ',
  description:
    '<p>Goodman and Kruskal’s Lambda (λ) measures the association between 2 nominal variables based on proportional reduction of error. Values of lambda are interpreted as percentages.</p><p>Range is from 0 to 1 (0 to 100%) with zero displaying no improvement in prediction of the dependent variable based on the values of the independent variable, and 100% displaying perfect prediction or association between variables.</p>',
};

let cliffsDelta = {
  displayName: "Cliff's Δ",
  description:
    '<p>Cliff’s delta (Δ) is a measure of effect size that quantifies the amount of difference in the distribution of the values of an ordinal variable, between two groups of observations.</p><p>Cliff’s delta range is -1 to 1, with zero indicating no difference and 1 indicating that values in the first group are larger than values in the second group.</p>',
};

let kendallsTau = {
  displayName: "Kendall's 𝝩",
  description:
    '<p>Kendall’s tau (𝝩) rank correlation coefficient is a measure of the strength of association between ordinal variables.</p><p>Kendall’s tau ranges from 0 to 1, with 0 indicating no association and 1 is a perfect association between the two variables.</p>',
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
  description:
    '<p>Pseudo R-squared statistics are measures of model fit when the dependent variable is categorical. As a measure of effect size, the pseudo R-squared quantifies the proportion of variance that is explained by the variables in the model as compared to a model with no variables in it.</p><p>Pseudo R-squared should not be reported alone and are of value when comparing performance of different models.</p>',
};

const cIndex = {
  displayName: 'C-Index',
  description:
    '<p>The c-index is a measure of the discriminative power of a prediction model. C-statistic is equivalent to AUC in ROC analysis.</p><p>If subjects with different outcomes are paired, c-index is the proportion of pairs where the subjects with the larger predicted probability are the subjects that experience the outcome.</p><p>C-index ranges from 0.5 to 1, with 0.5 shown no better discrimination than chance alone, and 1 indicating perfect discriminative power of the model.</p>',
};

const percentCorrectlyClassified = {
  displayName: 'Percent correctly classified',
  description:
    '<p>The percent correctly classified is a measure of model fit that quantifies what percentage of the cases in the sample data are correctly classified by the prediction model.</p><p>Percent correctly classified should be reported together with correctly classified for each of the categories of the dependent variable.</p>',
};

export default {
  name: 'categorical',
  displayName: 'Categorical',
  description:
    'Categorical level variables are qualitative variables that are organized in groups (e.g., gender, TNM stage).',
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

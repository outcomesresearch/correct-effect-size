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
  SKIP_FURTHER_CHOICES,
} from './furtherChoicesConstants';

export const pointBSerial = {
  displayName: 'Point Bi-serial correlation',
  name: 'point_bi_serial_correlation',
  description:
    'Point biserial correlation is used to assess the degree to which the continuous variable differs between the two groups defined by the binary variable.',
};

export const OR = {
  displayName: 'Odds Ratio',
  name: 'odds_ratio',
  description:
    '<p>Odds Ratio (OR) is a measure of effect size used in case-control studies. OR quantifies how much higher are the odds for exposure (risk factor) among cases as compared to controls.</p><p>OR = 1 indicates that odds are the same for cases and controls, and there is no association between the 2 variables.</p><p>OR > 1, the odds for the event of interest are higher for cases as compared to controls.</p><p>OR < 1, the odds for the event of interest are lower for cases as compared to controls.</p>',
};

export const RR = {
  displayName: 'Risk Ratio',
  name: 'risk_ratio',
  description: `<p>The Risk Ratio (also known as Relative Risk) is a measure of the strength of association between 2 categorical variables calculated as the ratio of the probability of the outcome occurring in one group (exposed group) compared to the probability of the outcome occurring in the other (not exposed) group(s).</p><p>RR = 1 indicates that the probability of the outcome is the same in the 2 groups being compared, and there is no association between the 2 variables.</p><p>RR > 1 indicates that the probability or risk for the outcome is higher in the exposed group.</p><p>RR < 1 indicates that the probability or risk for the outcome is lower in the exposed group.</p>`,
};

export const riskDifference = {
  displayName: 'Risk Difference',
  name: 'risk_difference',
  description:
    'The magnitude of the difference between the risk of an outcome of interest occurring in two or more groups.',
};

export const phi = {
  displayName: 'Phi coefficient',
  name: 'phi_coefficient',
  description:
    '<p>The phi coefficient (ɸ) is a measure of the strength of association between two dichotomous variables.</p><p>Phi coefficient has a range from 0-1 with 0 value displaying no correlation between the two variables.</p><p>A value of 0.1 is considered a small effect, 0.3 medium effect, and 0.5 large effect.</p>',
};

const effectSizeMeasuresGroup2 = [
  {
    header: 'general',
    items: [OR, RR, riskDifference, phi],
  },
];

export const cramersV = {
  displayName: "Cramer's 𝑉",
  name: 'cramers_v',
  description:
    '<p>Cramer’s 𝑉 measures the strength of correlation between two nominal variables and values range from 0 to 1, with 0 indicating no association between the two variables and 1 a perfect association.</p><p>Cramer’s 𝑉 values of > 0.05 indicate weak, > 0.10 moderate, > 0.15 strong, and > 0.25 very strong association.</p>',
};

export const goodmanKruskalLamda = {
  displayName: 'Goodman-Kruskal λ',
  name: 'goodman-krushkal_lamda',
  description:
    '<p>Goodman and Kruskal’s Lambda (λ) measures the association between 2 nominal variables based on proportional reduction of error. Values of lambda are interpreted as percentages.</p><p>Range is from 0 to 1 (0 to 100%) with zero displaying no improvement in prediction of the dependent variable based on the values of the independent variable, and 100% displaying perfect prediction or association between variables.</p>',
};

export const cliffsDelta = {
  displayName: "Cliff's Δ",
  name: 'cliffs_delta',
  description:
    '<p>Cliff’s delta (Δ) is a measure of effect size that quantifies the amount of difference in the distribution of the values of an ordinal variable, between two groups of observations.</p><p>Cliff’s Δ range is -1 to 1, with zero indicating no difference and 1 indicating that values in the first group are larger than values in the second group.</p>',
};

export const kendallsTau = {
  displayName: "Kendall's 𝑡",
  name: 'kendalls_tau',
  description:
    '<p>Kendall’s (𝑡) is a measure of the strength of association between ordinal variables.</p><p>Kendall’s 𝑡 ranges from 0 to 1, with 0 indicating no association and 1 is a perfect association between the two variables.</p>',
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

export const pseudoRSquared = {
  displayName: 'Pseudo <i>R<sup>2</sup></i>',
  name: 'pseudo_r_squared',
  description:
    '<p>Pseudo <i>R<sup>2</sup></i> statistics are measures of model fit when the dependent variable is categorical. As a measure of effect size, the Pseudo <i>R<sup>2</sup></i> statistics quantify the proportion of variance that is explained by the variables in the model as compared to a model with no variables in it.</p><p>Pseudo <i>R<sup>2</sup></i> statistics should not be reported alone.  They are of value when comparing performance of different models.</p>',
};

export const cIndex = {
  displayName: 'C-Statistic',
  name: 'c_index',
  description:
    '<p>The c-statistic is a measure of the discriminative power of a prediction model. C-statistic is equivalent to AUC in ROC analysis.</p><p>C-statistic ranges from 0.5 to 1, with 0.5 shown no better discrimination than chance alone, and 1 indicating perfect discriminative power of the model.</p>',
};

export const percentCorrectlyClassified = {
  displayName: 'Percent correctly classified',
  name: 'percent_correctly_classified',
  description:
    '<p>The percent correctly classified quantifies what percentage of the cases in the sample data are correctly classified by the prediction model.</p><p>Percent correctly classified should be reported together with correctly classified for each of the categories of the dependent variable.</p>',
};

export default {
  name: 'categorical',
  displayName: 'Categorical',
  description:
    'A categorical variable takes on a limited number of discrete values or categories. Categorical variables are often used to represent qualitative or nominal data such as sex, race, disease severity, and treatment group.',
  focusOfAnalysis: [
    {
      ...CORRELATION_WITH_CONTINUOUS_MEASURE,
      furtherChoices: [
        {
          ...SKIP_FURTHER_CHOICES,
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
          ...SKIP_FURTHER_CHOICES,
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
              items: [OR, RR],
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

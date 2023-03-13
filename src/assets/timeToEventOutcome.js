import {
  CORRELATION_WITH_CONTINUOUS_MEASURE,
  COMPARISON_OF_TWO_GROUPS,
  COMPARISON_OF_THREEMORE_GROUPS,
  REGRESSION_MODEL,
} from './focusOfAnalysisConstants';

import {
  REPORTING_PAIRWISE_DIFFERENCES,
  ADJUSTED_ASSOCIATION,
  OVERALL_MODEL,
} from './furtherChoicesConstants';

let HR = {
  displayName: 'HR',
  description: 'HR Description',
};

let survivalRateDifference = {
  displayName: 'Survival rate difference',
};

let medianSurvivalTime = {
  displayName: 'Median survival time',
};

let restrictedMeanSurvivalTime = {
  displayName: 'Restricted mean survival time',
};

const effectSizeMeasuresGroup2 = [
  {
    header: 'general',
    items: [
      survivalRateDifference,
      medianSurvivalTime,
      restrictedMeanSurvivalTime,
    ],
  },
];

let harrellsCIndex = {
  displayName: "Harrell's C-index",
};

export default {
  name: 'timeToEvent',
  displayName: 'Time To Event',
  description:
    'A time-to-event outcome measure is a type of clinical trial outcome that captures the time it takes for an event to occur, such as disease progression or death.  It is a powerful measure that allows for the analysis of the duration of the event and provides insights into the treatment effect over time.',
  focusOfAnalysis: [
    {
      ...CORRELATION_WITH_CONTINUOUS_MEASURE,
      furtherChoices: [
        {
          name: 'skip',
          appropriateEffectSizeMeasures: [
            {
              header: 'general',
              items: [HR],
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
              items: [HR],
            },
          ],
        },
        {
          ...OVERALL_MODEL,
          appropriateEffectSizeMeasures: [
            {
              header: 'general',
              items: [harrellsCIndex],
            },
          ],
        },
      ],
    },
  ],
};

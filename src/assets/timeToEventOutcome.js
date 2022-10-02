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
  description: 'Survival rate difference Description',
};

let medianSurvivalTime = {
  displayName: 'Median survival time',
  description: 'Median survival time Description',
};

let restrictedMeanSurvivalTime = {
  displayName: 'Restricted mean survival time',
  description: 'Restricted mean survival time description',
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
  description: " Harrell's C-index description",
};

export default {
  name: 'timeToEvent',
  displayName: 'Time To Event',
  description:
    'Time-to-event outcomes take account of whether an event takes place and also the time at which the event occurs, such that both the event and the timing of the event are important',
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

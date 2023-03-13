import OUTCOME_MEASURE from '../categoricalOutcome';
import {
  pointBSerial,
  OR,
  RR,
  riskDifference,
  phi,
  cramersV,
  goodmanKruskalLamda,
  cliffsDelta,
  kendallsTau,
  pseudoRSquared,
  cIndex,
  percentCorrectlyClassified,
} from '../categoricalOutcome';

import {
  CORRELATION_WITH_CONTINUOUS_MEASURE,
  COMPARISON_OF_TWO_GROUPS,
  COMPARISON_OF_THREEMORE_GROUPS,
  REGRESSION_MODEL,
} from '../focusOfAnalysisConstants';

import {
  REPORTING_PAIRWISE_DIFFERENCES,
  REPORITNG_OVERALL_EFFECT,
  ADJUSTED_ASSOCIATION,
  OVERALL_MODEL,
  SKIP_FURTHER_CHOICES,
} from '../furtherChoicesConstants';

const examples = {
  [CORRELATION_WITH_CONTINUOUS_MEASURE.name]: {
    [SKIP_FURTHER_CHOICES.name]: {
      [pointBSerial.name]: {
        outcomeMeasure:
          '<p>A researcher enrolled 60 subjects with bothersome tinnitus in a study. There were 22 females and 38 males. The change in Tinnitus Functional Index (TFI) pre-and post-intervention was assessed.</p>',
        focusOfAnalysis:
          '<p>The researcher is interested in exploring correlation between sex and change in TFI after intervention.</p>',
        chosenEffectSizeMeasure:
          '<p>The researcher determined that the point biserial correlation coefficient is the appropriate measure effect size when examining a dichotomous variable and a continuous normally distributed variable, with homogenous variances in the levels of the dichotomous variable and no presence of outliers.</p><p>The researcher reported a weak correlation between TFI change and sex (rpb = 0.29, 95% CI: 0.10 to 0.57), and could state with 95% confidence that the parameter (i.e., true value in the population) for the correlation between the 2 variables ranged from a weak correlation (rpb= 0.10) to a moderate positive correlation (rpb=0.57), suggesting potential moderate correlation in the population.</p>',
      },
    },
  },
  [COMPARISON_OF_TWO_GROUPS.name]: {
    [SKIP_FURTHER_CHOICES.name]: {
      [OR.name]: {
        outcomeMeasure:
          '<p>A surgical oncologist conducted a case-control study with oropharyngeal cancer patients and healthy controls. HPV-16 status was categorized as sero-positive or sero-negative.</p>',
        focusOfAnalysis:
          '<p>The surgical oncologist is interested in evaluating the strength of association between oropharyngeal cancer and HPV-16 sero-positivity.</p>',
        chosenEffectSizeMeasure:
          '<p>The surgical oncologist reported a strong association between HPV-16 and oropharyngeal cancer (OR=17.6, 95% CI: 9.0 to 34.5). HPV-16 seropositive patients have nearly 18 times higher odds for oropharyngeal cancer than seronegative patients.</p><p>Even the lower bound of the confidence interval (9.0) allows the researcher to conclude that, with 95% confidence, for a clinically meaningful effect in the population.</p>',
      },
      [RR.name]: {
        outcomeMeasure:
          '<p>A surgical oncologist conducted a cohort study enrolling cancer patients with prognostic comorbidities and patients with no prognostic comorbidities at the time of surgery. The primary outcome was development of complications within 30 days of surgery.</p>',
        focusOfAnalysis:
          '<p>The surgical oncologist is interested in evaluating the strength of relationship between prognostic comorbidities and surgical complications.</p>',
        chosenEffectSizeMeasure:
          '<p>Risk Ratio is the appropriate measure of effect size used in cohort studies.</p><p>The surgical oncologist reported a weak association between prognostic comorbidities and surgical complications. The risk for surgical complications was 1.34 times (RR=1.34, 95% CI: 1.11 to 1.62) higher for patients with prognostic comorbidities at time of surgery as compared to patients with no comorbidities.</p><p>Even the upper bound of the 95% confidence interval confirms only a weak relationship between the two variables in the population.</p>',
      },
      [riskDifference.name]: {
        outcomeMeasure:
          '<p>A vascular surgeon is interested in comparing the risk for renal complications between patients who undergo endovascular aortic aneurysm or open repair.</p>',
        focusOfAnalysis:
          '<p>A vascular surgeon is interested in comparing the risk for renal complications between patients who undergo endovascular aortic aneurysm or open repair.</p>',
        chosenEffectSizeMeasure:
          '<p>The vascular surgeon reported that patients who underwent EVAR had 1% risk while those who underwent an open repair had a 4% risk (Risk Difference = 3%, 95% CI: 1.9% to 5.1%).</p><p>The vascular surgeon can state that the parameter (ie., true value) for the difference in risk of renal complications is as small as 1.9% or as large as 5.1%.</p>',
      },
      [phi.name]: {
        outcomeMeasure:
          '<p>Epidemiologists seek to investigate the possible association between history of COVID-19 infection and self-reported smell loss.</p>',
        focusOfAnalysis:
          '<p>The epidemiologist is interested in the strength of correlation between COVID-19 infection and smell loss.</p>',
        chosenEffectSizeMeasure:
          '<p>Phi coefficient is the appropriate effect size measure between the two dichotomous variables.</p><p>There was a strong correlation between COVID-19 infection and smell loss (ɸ = 0.83; 95% CI = 0.73 to 0.94).</p><p>The estimates from this study are precise and indicate clinically important effect size in the population (95% CI 0.73 to 0.94).</p>',
      },
    },
    [REPORITNG_OVERALL_EFFECT.name]: {
      [cliffsDelta.name]: {
        outcomeMeasure:
          '<p>A researcher conducted a clinical trial exploring the efficacy of a treatment for smell loss. Participants were randomized to Treatment or Placebo. Patients’ perceived change in smell due to treatment was assessed using Clinical Global Impression (CGI) of Change with a range 1-7.</p>',
        focusOfAnalysis:
          '<p>The efficacy of a treatment for smell loss will be evaluated through comparison of CGI score between the 2 study groups.</p>',
        chosenEffectSizeMeasure:
          '<p>There was a no clinically important relationship between patients’ perceived change in smell and treatment group (d=0.14, 95% CI: -0.48 to 0.67).</p>',
      },
    },
  },
  [COMPARISON_OF_THREEMORE_GROUPS.name]: {
    [REPORITNG_OVERALL_EFFECT.name]: {
      [goodmanKruskalLamda.name]: {
        outcomeMeasure:
          '<p>A researcher collected data on the type of surgery and development of post-surgical complications for adults with papillary thyroid cancer.</p>',
        focusOfAnalysis:
          '<p>The researcher is interested in the association between three different types of surgery and development of post-surgical complications for adults patients with papillary thyroid cancer.</p>',
        chosenEffectSizeMeasure:
          '<p>There was a 20% reduction in error of prediction of post-surgical complications based on type of surgery (λ = 0.2).</p><p>This research showed a weak relationship between type of surgery and development of post-surgical complications (λ = 0.2; 95% CI 0.1 to 0.3).</p>',
      },
      [cramersV.name]: {
        outcomeMeasure:
          '<p>A state infectious disease epidemiologist collected data on antibiotic consumption at each health care facility (HCF) in the state and examined whether there was an association between type of antibiotic and type of HCF.</p>',
        focusOfAnalysis:
          '<p>The state epidemiologist is interested in assessing the strength of association between type of antibiotic use and type of health care facility.</p>',
        chosenEffectSizeMeasure:
          '<p>The state epidemiologist is interested in assessing the strength of association between type of antibiotic use and type of health care facility.</p><p>The state epidemiologist reported 𝑉 = 0.28; 95% CI 0.19 to 0.37. The epidemiologist can state, with 95% confidence, that the observed moderate effect size is also true in the population with the range of values between 0.19 and 0.37.</p>',
      },
      [kendallsTau.name]: {
        outcomeMeasure:
          '<p>A researcher collects socioeconomic status and TNM stage in a sample of adult patients with esophageal cancer. Her primary interest is exploring the relationship between socioeconomic status and TNM stage at presentation.</p>',
        focusOfAnalysis:
          '<p>Socio-economic status is divided into 3 categories: low, middle, and high. The researcher is interested in comparing the distribution of socioeconomic status within each TNM stage.</p>',
        chosenEffectSizeMeasure:
          '<p>The researcher choose Kendall’s 𝝩 as the effect size measure for the relationship between the two ordinal variables. Cancer stage ranges from I to IV. Socio-economic status is divided into 3 categories: low, middle, and high.</p><p>The researcher obtained a 𝝩 value of 0.86 (95% CI 0.83 to 0.92) and concludes there is a large effect for the association between cancer stage and socioeconomic status.</p>',
      },
    },
  },
  [REGRESSION_MODEL.name]: {
    [OVERALL_MODEL.name]: {
      [pseudoRSquared.name]: {
        outcomeMeasure:
          '<p>A surgery resident was interested in which diagnostic test – ultrasound or MRI - was better at differentiating benign versus malignant thyroid cancer. He also was interested in the performance of clinical exam.</p>',
        focusOfAnalysis:
          '<p>The resident ran a logistic regression model to predict the type of cancer (benign versus malignant) based on: 1) clinical characteristics and MRI, 2) clinical characteristics and ultrasound.</p>',
        chosenEffectSizeMeasure:
          '<p>One of the statistics the resident reported for comparison of the models was Negelkerke’s R-squared, type of Pseudo R-squared.</p><p>Ultrasound and clinical characteristics combined (Pseudo R‑Square = 0.147) are more predictive of the post‑operation histology outcome than MRI and clinical characteristics (Pseudo R‑Square = 0.052).</p>',
      },
      [OR.name]: {
        outcomeMeasure:
          '<p>A surgeon aimed to identify risk factors associated with 30-day unplanned hospital readmission after surgery for cancer patients.</p>',
        focusOfAnalysis:
          '<p>The surgeon used binary logistic regression to explore the adjusted association of each of the risk factors with the 30-day unplanned readmission.</p>',
        chosenEffectSizeMeasure:
          '<p>After controlling for other variables in the model, the odds ratio of being readmitted was 2.68 (95% CI: 1.08 to 6.09) for patients on psychotropic medications as compared to patients not using these medications.</p><p>Patients using psychotropic medications are nearly three times more likely to be readmitted as compared to patients not using these medications. This estimate is not very precise and clinically definitive, but the upper limit of the confidence interval suggest an important association is possible in the population.</p>',
      },
      [percentCorrectlyClassified.name]: {
        outcomeMeasure:
          '<p>A trauma surgeon is interested in predicting the presence of permanent nerve damage based on 4 clinical symptoms and the trauma location evaluated at the bedside of the acutely injured patient.</p>',
        focusOfAnalysis:
          '<p>The surgeon used the Binary Logistic Regression to predict presence of permanent nerve damage (dichotomous dependent variable) and clinical characteristics at presentation.</p>',
        chosenEffectSizeMeasure:
          '<p>The overall model with trauma location and clinical characteristics at presentation correctly classified 92% of the cases.</p><p>This was a good model as it correctly classified 81% of the cases with permanent nerve damage and 96% of the cases with no permanent nerve damage.</p>',
      },
    },
    [SKIP_FURTHER_CHOICES.name]: {
      [cIndex.name]: {
        outcomeMeasure:
          '<p>A researcher aimed to create a risk prediction model for acute appendicitis among adults presenting to the emergency department with right lower quadrant pain.</p>',
        focusOfAnalysis:
          '<p>The researcher used multivariable logistic regression to identify independent predictive factors associated with acute appendicitis.</p>',
        chosenEffectSizeMeasure:
          '<p>The risk prediction model for acute appendicitis among adults presenting to the emergency department with right lower quadrant pain had a c-index of 0.82 (95% CI 0.80 to 0.84), which indicates a strong predictive model.</p>',
      },
    },
  },
};

export default { [OUTCOME_MEASURE.name]: examples };

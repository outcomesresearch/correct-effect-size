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
        outcomeMeasure: `<p>Among adults with bothersome tinnitus, is there a difference between men and women in the change in Tinnitus Functional Index after an intervention?</p>`,
        focusOfAnalysis: `<p>Among adults with tinnitus, is there a difference between men and women in the change in TFI after an intervention.</p>`,
        chosenEffectSizeMeasure:
          '<p>The results showed a moderate positive correlation between gender and change in TFI (r_pb = 0.32, 95% CI: 0.03-0.57), indicating that males had a greater change in TFI compared to females. This suggests that gender may be a potential predictor or factor associated with the change in TFI after an intervention for bothersome tinnitus.</p><p>The study included 60 adults and the 95% confidence interval around the point biserial correlation coefficient suggests that the true correlation value lies between 0.03 and 0.57. This is quite wide and imprecise. The study suggests that gender may play a role in the response to interventions for bothersome tinnitus, much the imprecision of the estimate undermines the ability to make definitive conclusion.</p>',
      },
    },
  },
  [COMPARISON_OF_TWO_GROUPS.name]: {
    [SKIP_FURTHER_CHOICES.name]: {
      [RR.name]: {
        outcomeMeasure:
          '<p>A surgical oncologist conducted a cohort study enrolling cancer patients with prognostic comorbidities and patients with no prognostic comorbidities at the time of surgery. The primary outcome was development of complications within 30 days of surgery.</p>',
        focusOfAnalysis:
          '<p>The surgical oncologist is interested in evaluating the strength of relationship between prognostic comorbidities and surgical complications.</p>',
        chosenEffectSizeMeasure: `<p>Risk Ratio is the appropriate measure of effect size used in cohort studies.</p><p>The surgical oncologist reported a weak association between prognostic comorbidities and surgical complications. The risk for surgical complications was 1.34 times (RR=1.34, 95% CI: 1.11-1.62) higher for patients with prognostic comorbidities at time of surgery as compared to patients with no comorbidities.</p><p>The upper bound of the 95% confidence interval allows the researcher to conclude with 95% confidence that in the populations this relationship is weak.</p>`,
      },
      [OR.name]: {
        outcomeMeasure: `<p>Among patients with oropharyngeal cancer and healthy controls, what is the difference in HPV-16 status?</p>`,
        focusOfAnalysis:
          '<p>To assess the strength of association between oropharyngeal cancer and HPV-16 sero-positivity, the odds ratio is calculated.</p>',
        chosenEffectSizeMeasure:
          '<p>The surgical oncologist reported a strong association between HPV-16 and oropharyngeal cancer (OR=17.6, 95% CI: 9.0 to 34.5). HPV-16 seropositive patients have nearly 18 times higher odds for oropharyngeal cancer than seronegative patients.</p><p>The lower bound of the 95% confidence interval (9.0) allows the researcher to conclude that even the smallest estimate of the true value consistent with the observed result is clinically meaningful.</p>',
      },
      [riskDifference.name]: {
        outcomeMeasure: `<p>A vascular surgeon is interested in comparing rates of renal complications after endovascular aortic aneurysm versus open repair.</p>`,
        focusOfAnalysis:
          '<p>A vascular surgeon is interested in comparing the risk difference for renal complications between patients who undergo endovascular aortic aneurysm or open repair.</p>',
        chosenEffectSizeMeasure: `<p>The vascular surgeon reported that patients who underwent EVAR had 1 1% risk while those who underwent an open repair had a 4% risk (Risk Difference = 3%, 95% CI: 1.9% to 5.1%).</p><p>The vascular surgeon can state that the true value for the difference in rates of renal complications is as small as 1.9% or as large as 5.1%.</p>`,
      },
      [phi.name]: {
        outcomeMeasure: `<p>Epidemiologists seek to investigate the association between answers on a new self-report health questionnaire and a previously validated patient-reported outcome measure.</p>`,
        focusOfAnalysis:
          '<p>The epidemiologists seek to investigate the association between answers on a new self-report health questionnaire and a previously validated patient-reported outcome measure.</p>',
        chosenEffectSizeMeasure: `<p>The epidemiologists describe the strength of association between answers on a new self-report health questionnaire and a validated patient-reported outcome measure.</p><p>The two questionnaires showed high agreement (ɸ = 0.83; 95% CI = 0.73 to 0.94).</p><p>The narrow width of the confidence interval indicates that the study provides a precise estimate of where the true value for the association is likely to be. Furthermore, the entire range of the 95% CI includes values that indicate a strong agreement.</p>`,
      },
    },
    [REPORTING_PAIRWISE_DIFFERENCES.name]: {
      [OR.name]: {
        outcomeMeasure: `<p>A surgical oncologist conducted a case-control study with oropharyngeal cancer patients and healthy controls. HPV status was categorized as sero-positive or sero-negative.</p>`,
        focusOfAnalysis: `<p>The surgical oncologist is interested in evaluating the strength of association between oropharyngeal cancer and three different HPV sero strains: HPV-16, HPV-18, and HPV-33.</p>`,
        chosenEffectSizeMeasure:
          '<p>Odds Ratio is the appropriate measure of effect size used in case-control studies.</p><p>The surgical oncologist reported that individuals who tested positive for HPV-16 had a much higher risk of oropharyngeal cancer compared to those who tested negative (OR = 5.2, 95% CI: 2.8-9.7). Similarly, individuals who tested positive for HPV-18 had a higher risk of oropharyngeal cancer compared to those who tested negative (OR = 3.8, 95% CI: 1.9-7.6). However, she did not find a strong association between HPV-33 and oropharyngeal cancer (OR = 1.4, 95% CI: 0.7-2.9).</p>',
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
  },
  [COMPARISON_OF_THREEMORE_GROUPS.name]: {
    [REPORITNG_OVERALL_EFFECT.name]: {
      // [cliffsDelta.name]: {
      //   outcomeMeasure:
      //     '<p>A researcher conducted a clinical trial exploring the efficacy of a treatment for smell loss. Participants were randomized to Treatment or Placebo. Patients’ perceived change in smell due to treatment was assessed using Clinical Global Impression (CGI) of Change with a range 1-7.</p>',
      //   focusOfAnalysis:
      //     '<p>The efficacy of a treatment for smell loss will be evaluated through comparison of CGI score between the 2 study groups.</p>',
      //   chosenEffectSizeMeasure:
      //     '<p>The researcher found a small difference in perceived change in the smell between patients randomized to Treatment or Placebo groups (Δ = 0.14, 95% CI: -0.48 to 0.67). The width of the interval means the estimate is imprecise and no definitive conclusions can be made regarding the effectiveness of the treatment.</p>',
      // },
      [goodmanKruskalLamda.name]: {
        outcomeMeasure: `<p>A researcher collected data on recurrence free survival, type of surgery, and specialty of surgeon for patients with papillary thyroid cancer.</p>`,
        focusOfAnalysis: `<p>The researcher is interested in assessing the strength of association between type of surgery, specialty of surgeon, and development of recurrence for patients with papillary thyroid cancer.</p>`,
        chosenEffectSizeMeasure:
          '<p>The researcher found a weak relationship between type of surgery, specialty of surgeon, and development of recurrence for patients with papillary thyroid cancer. (λ = 0.2%; 95% CI 0.1% to 0.3%).</p>',
      },
      [kendallsTau.name]: {
        outcomeMeasure: `<p>A researcher collects data on demographic characteristics, socioeconomic status, and cancer stage in a sample of adult Head and Neck cancer patients.</p>`,
        focusOfAnalysis: `<p>His primary interest is exploring the strength of association between socioeconomic status and TNM stage. Socio-economic status is divided into 3 categories: low, middle, and high and TNM Stage is defined as I, II, III, and IV.</p>`,
        chosenEffectSizeMeasure:
          '<p>The researcher finds a strong association socioeconomic status and TNM Stage (𝑡 = 0.86; 95% CI 0.83 to 0.89).</p>',
      },
      [cramersV.name]: {
        outcomeMeasure:
          '<p>A state infectious disease epidemiologist collected data on antibiotic consumption at each health care facility in the state and examined whether there was an association between type of antibiotic and type of health care facility.</p>',
        focusOfAnalysis:
          '<p>The state epidemiologist is interested in assessing the strength of association between type of antibiotic use and type of health care facility.</p>',
        chosenEffectSizeMeasure:
          'The state epidemiologist found a very strong association between type of antibiotic used and type of health care facility (𝑉 = 0.28; 95% CI 0.19 to 0.37).</p>',
      },
    },
    [REPORTING_PAIRWISE_DIFFERENCES.name]: {
      [OR.name]: {
        outcomeMeasure:
          '<p>A surgical oncologist conducted a case-control study with oropharyngeal cancer patients and healthy controls. HPV status was categorized as sero-positive or sero-negative.</p>',
        focusOfAnalysis:
          '<p>The surgical oncologist is interested in evaluating the strength of association between oropharyngeal cancer and three different HPV sero strains: HPV-16, HPV-18, and HPV-33.</p>',
        chosenEffectSizeMeasure:
          '<p>Odds Ratio is the appropriate measure of effect size used in case-control studies.</p><p>The surgical oncologist reported that individuals who tested positive for HPV-16 had a much higher risk of oropharyngeal cancer compared to those who tested negative (OR = 5.2, 95% CI: 2.8-9.7).</p><p>Similarly, individuals who tested positive for HPV-18 had a higher risk of oropharyngeal cancer compared to those who tested negative (OR = 3.8, 95% CI: 1.9-7.6). However, she did not find a strong association between HPV-33 and oropharyngeal cancer (OR = 1.4, 95% CI: 0.7-2.9).</p>',
      },
      [RR.name]: {
        outcomeMeasure:
          '<p>A surgical oncologist conducted a cohort study enrolling cancer patients and sought to explore the association of TNM stage with 5-year survival rate.</p>',
        focusOfAnalysis:
          '<p>Evaluating the relationship between TNM Stage I, II, III, and IV and 5-year survival rate</p>',
        chosenEffectSizeMeasure:
          '<p>Risk Ratio is the appropriate measure of effect size used in cohort studies.</p><p>The results showed that patients with TNM stage I had a much higher 5-year survival rate compared to those with stage IV (RR = 5.2, 95% CI: 2.8-9.7). Patients with stage II also had much higher 5-year survival rate compared to those with stage IV (RR = 3.8, 95% CI: 1.9-7.6). However, the surgical oncologist found a very small difference in 5-year survival rate between patients with stage III and IV (RR = 1.4, 95% CI: 0.7-2.9).</p>',
      },
      [riskDifference.name]: {
        outcomeMeasure: `<p>A researcher wants to study whether there are any differences in 30-day mortality after cardiac surgery for patients in 3 different age groups.</p>`,
        focusOfAnalysis:
          '<p>Is there are difference in 30-day mortality young (18-40), middle-aged (41 to 65), and old (66 and older) patients after cardiac surgery?</p>',
        chosenEffectSizeMeasure: `<p>To calculate the pair-wise differences in risk of 30-day mortality between the three age groups, one would first calculate the 30-day mortality rates for each age group separately.</p><p>The study found that the 30-day mortality rate for the young age group was 3%, the middle-aged group was 6%, and the old age group was 10%. The pair-wise differences in risk:</p><ul><li>The difference in risk between the young and middle-aged groups would be 6% - 3% = 3% (95% CI 1% to 5%)</li><li>The difference in risk between the young and old groups would be 10% - 3% = 7% (5% to 9%)</li><li>The difference in risk between the middle-aged and old groups would be 10% - 6% = 4% (2% to 6%)</li></ul>`,
      },
      [phi.name]: {
        outcomeMeasure: `<p>The researcher is interested in studying the association between patient’s medical condition and adherence to medications.</p>`,
        focusOfAnalysis:
          '<p>Is there an association between types of medical conditions (patients with diabetes, hypertension), or neither diabetes nor hypertension and adherence to medications?</p>',
        chosenEffectSizeMeasure: `<p>The phi coefficient was 0.6 (95% CI 0.5 to 0.7), which indicates a strong association between medical condition and medication adherence. In this case, the results would suggest that having diabetes or hypertension significantly impacts medication adherence and that patients with these conditions are significantly less adherent to their medications compared to patients with neither condition.</p>`,
      },
    },
  },
  [REGRESSION_MODEL.name]: {
    [ADJUSTED_ASSOCIATION.name]: {
      [OR.name]: {
        outcomeMeasure:
          '<p>A researcher aimed to identify risk factors associated with 30-day unplanned hospital readmission after surgery for Head and Neck cancer.</p>',
        focusOfAnalysis:
          '<p>The researcher used Binary Logistic Regression to explore the independent (after controlling for other risk factors) association of each risk factors with unplanned readmission 30 days after surgery.</p>',
        chosenEffectSizeMeasure:
          '<p>After adjusting for other risk factors in the model, the adjusted odds ratio (aOR) of being readmitted are 2.7 times higher for patients with moderate-to-severe medical comorbidities as compared to patients with none-to-mild comorbidities aOR=2.7 (95% CI: 1.2 to 6.1).</p><p>This estimate is not very precise and clinically definitive, but the upper limit of the confidence interval suggest an important association is possible in the population.</p>',
      },
      [RR.name]: {
        outcomeMeasure: `<p>A researcher aimed to identify factors at time of presentation associated with 5-year survival for middle-aged women diagnosed with triple-negative breast cancer (TNBC).</p>`,
        focusOfAnalysis: `<p>Among women (aged 45-65 years old) diagnosed with TNBC what is the impact of marital status on overall survival?</p>`,
        chosenEffectSizeMeasure: `<p>The researcher found a RR of 0.6 (95% CI 0.5 to 0.7) for 5-year survival for unmarried women relative to married women. This means that unmarried women have a 40% lower risk of surviving 5 years compared to married women. These findings highlight the importance of social support and relationships in promoting health and well-being.</p>`,
      },
    },
    [OVERALL_MODEL.name]: {
      [pseudoRSquared.name]: {
        outcomeMeasure:
          '<p>A researcher wishes to assess the effectiveness of different interventions for Meniere’s disease.</p>',
        focusOfAnalysis:
          '<p>Among patients with Meniere’s disease, which factors contribute to success of diuretic therapy?</p>',
        chosenEffectSizeMeasure:
          '<p>The researcher used a logistic regression analysis that revealed that age, sex, hearing loss, and severity of comorbidities were significant predictors of treatment success. The Pseudo <i>R<sup>2</sup></i> statistic for the model was 0.30, indicating that 30% of the variance in treatment success was explained by the independent variables.</p>',
      },
      [cIndex.name]: {
        outcomeMeasure:
          '<p>A researcher aimed to create a risk prediction model for 30-day unplanned hospital readmission for Head and Neck cancer patients.</p>',
        focusOfAnalysis:
          '<p>The researcher used multivariable Binary Logistic Regression to predict 30-day unplanned readmission.</p>',
        chosenEffectSizeMeasure:
          '<p>The multivariable model with demographic and clinical characteristics had a good discriminatory power as indicated from a c-statistic of 0.84 (95% CI: 0.80 to 0.89). The estimate is precise and so the researcher can be certain that the true value of the c-statistic is somewhere between 0.80 and 0.89.</p>',
      },
      [percentCorrectlyClassified.name]: {
        outcomeMeasure:
          '<p>A researcher wanted to develop a prediction model for hearing loss among middle-aged adults.</p>',
        focusOfAnalysis:
          '<p>How well can various demographic and clinical features perform to predict hearing loss among middle-aged patients?</p>',
        chosenEffectSizeMeasure:
          '<p>The researcher was able to identify factors and create a prediction model that correctly classified 80% of the cases in the sample data, indicating good overall predictive accuracy. When examining classification by hearing loss severity, the model correctly classified 85% of patients with mild hearing loss, 75% of patients with moderate hearing loss, and 70% of patients with severe hearing loss.</p><p>By identifying variations in predictive accuracy across different levels of hearing loss severity, the researcher can better understand the strengths and limitations of the model and develop targeted interventions to improve diagnostic accuracy for patients with more severe forms of hearing loss.</p>',
      },
    },
  },
};

export default { [OUTCOME_MEASURE.name]: examples };

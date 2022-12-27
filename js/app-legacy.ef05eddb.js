(function(){var e={4883:function(e,t,i){var r={"./Shared.scss":847,"./apple-touch-icon.png":2642,"./favicon-32x32.png":8068,"./logo.svg":7125};function s(e){var t=n(e);return i(t)}function n(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=n,e.exports=s,s.id=4883},247:function(e,t,i){"use strict";var r={};i.r(r),i.d(r,{Step0:function(){return O},Step1:function(){return xe},Step2:function(){return Be},Step3:function(){return Ge},Step4:function(){return Ye}});var s,n=i(5957),a=(i(6992),i(8674),i(9601),i(7727),i(144)),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("outcomes-research-wrapper",{attrs:{_title:"Choosing the Correct Effect Size Measurement"}},[i("v-app",[i("outcomes-navbar"),i("div",{staticClass:"app-container"},[i("Stepper")],1),i("outcomes-footer",{attrs:{copyright:e.t(e.k.FOOTER_COPYRIGHT)}})],1)],1)},c=[],p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-stepper",{model:{value:e.currentStep,callback:function(t){e.currentStep=t},expression:"currentStep"}},[i("v-stepper-header",[i("v-stepper-step",{attrs:{complete:e.currentStep>1,step:"1"}},[e._v(" Outcome Measure ")]),i("v-stepper-step",{attrs:{complete:e.currentStep>2,step:"2"}},[e._v(" Focus of Analysis ")]),i("v-stepper-step",{attrs:{complete:e.currentStep>3,step:"3"}},[e._v(" Further modifiers ")]),i("v-stepper-step",{attrs:{complete:e.currentStep>4,step:"4"}},[e._v(" Results ")])],1),i("Step0"),i("Step1"),i("Step2"),i("Step3"),i("Step4")],1)},u=[],d=i(5082),l=(i(9826),i(1539),i(8309),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-stepper-content",{attrs:{step:"0"}},[i("v-card",{staticClass:"past-scores"},[i("v-container",{staticClass:"container-override"},[i("v-card-title",{staticClass:"text-h5"},[e._v(" Selecting the Correct Effect Size Measurement ")]),i("v-card-text",[i("div",[i("p",[e._v(" This wizard-based web tool helps investigators select the appropriate effect size measure for planning and reporting the results of their research. ")]),i("p",[e._v(" First, investigators will select the type of Outcome Measure (Continuous, Categorial, and Time to Event) ")]),i("p",[e._v(" Next, investigators identify the Focus of Analysis (correlation with continuous measure, comparison of 2 groups, or comparison of 3 or more groups) ")]),i("p",[e._v(" Lastly, define whether you are reporting pair-wise differences, an overall effect, an adjusted association with predictor, or overall model. ")]),i("p",[e._v(" After completing these steps, the app will provide the most accurate Effect Size measurement to use for the given inputs. ")])])]),i("v-card-actions",{staticClass:"show-on-desktop"},[i("div",{staticClass:"button-container"},[i("v-spacer"),i("v-btn",{attrs:{text:""},on:{click:e.prepareToAdvance}},[e._v(e._s(e.t(e.k.BEGIN)))])],1)]),i("v-card-actions",{staticClass:"show-on-mobile"},[i("div",{staticClass:"button-container"},[i("v-btn",{attrs:{text:""},on:{click:e.prepareToAdvance}},[e._v(e._s(e.t(e.k.BEGIN)))])],1)])],1)],1)],1)}),f=[],m="emitted when one step wants to go back",h="emitted when one step wants to go forward a step",v="clear the selection of a given step",C=new a["default"],S={components:{},computed:{},methods:{prepareToAdvance:function(){C.$emit(v,1),C.$emit(v,2),C.$emit(v,3),this.advanceStep()}}},g=S,y=i(1001),_=(0,y.Z)(g,l,f,!1,null,"22a63d98",null),O=_.exports,E=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-stepper-content",{attrs:{step:"1"}},[i("v-card",{staticClass:"past-scores"},[i("v-container",{staticClass:"container-override"},[i("v-card-title",[i("div",[i("h1",{staticClass:"text-h5"},[e._v(" Outcome Meaure ")]),i("h2",{staticClass:"text-h6 grey--text"},[e._v(" Select the type of outcome variable being analyzed or compared ")])])]),i("v-card-text",[i("div",{staticClass:"card-container"},e._l(e.outcomes,(function(t){return i("Card",{key:t.name,attrs:{identifier:t.name,title:t.displayName,currentlySelected:e.selected},on:{selected:function(i){return e.setOutcomeSelection(t.name)}}})})),1)]),i("v-card-actions",{staticClass:"show-on-desktop"},[i("div",{staticClass:"button-container"},[i("v-btn",{attrs:{text:""},on:{click:e.prepareToBackUp}},[e._v(e._s(e.t(e.k.BACK)))]),i("v-spacer"),i("v-btn",{attrs:{text:"",disabled:""===e.selected},on:{click:e.prepareToAdvance}},[e._v(e._s(e.t(e.k.NEXT)))])],1)]),i("v-card-actions",{staticClass:"show-on-mobile"},[i("div",{staticClass:"button-container"},[i("v-btn",{attrs:{text:""},on:{click:e.prepareToBackUp}},[e._v(e._s(e.t(e.k.BACK)))]),i("v-btn",{attrs:{text:"",disabled:""===e.selected},on:{click:e.prepareToAdvance}},[e._v(e._s(e.t(e.k.NEXT)))])],1)])],1)],1)],1)},T=[],k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"mx-auto card",class:e.unselectable?"unselectable":"",attrs:{width:"350",color:e.getBackgroundColor,dark:e.isSelected},on:{click:function(t){return e.$emit("selected",e.identifier)}}},[i("v-card-text",[i("p",{staticClass:"text-h6",class:e.getShowDescriptions?"":"justTitle"},[e._v(" "+e._s(e.title)+" ")]),i("span",{staticClass:"italic",domProps:{innerHTML:e._s(e.description)}})])],1)},N=[],M=i(3380),b=new M.Ap({sentencesPerParagraph:{max:3,min:1},wordsPerSentence:{max:15,min:10}}),A=b,Z=i(629),x={props:["identifier","currentlySelected","title","description","unselectable"],data:function(){return{fillerDescription:A.generateParagraphs(1)}},components:{},computed:(0,d.Z)((0,d.Z)({},(0,Z.Se)(["getShowDescriptions"])),{},{getBackgroundColor:function(){return this.isSelected?"success":"white"},isSelected:function(){return this.identifier===this.currentlySelected}})},w=x,F=(0,y.Z)(w,k,N,!1,null,"89a85404",null),R=F.exports,$={name:"correlationWithContinuousMeasure",displayName:"Correlation with continuous measure",description:"correlationWithContinuousMeasure description"},U={name:"comparisonOfTwoGroups",displayName:"Comparison of 2 groups",description:"comparisonOfTwoGroups description"},B={name:"comparisonOfThreeOrMoreGroups",displayName:"Comparison of 3 or more groups",description:"comparisonOfThreeOrMoreGroups description"},I={name:"regressionModel",displayName:"Regression model",description:"regressionModel description"},z={name:"reportingPairWiseDifferences",displayName:"Reporting pair-wise differences",description:"reportingPairWiseDifferences description"},D={name:"reportingOverallEffect",displayName:"Reporting overall effect",description:"reportingOverallEffect description"},P={name:"adjustedAssociationWithPredictor",displayName:"Adjusted association with predictor",description:"Adjusted Association with predictor description"},H={name:"overallModel",displayName:"Overall model",description:"Overall Model description"},G={displayName:"Pearson Correlation Coefficient r",description:"description of pearson correlation coefficient r"},j={displayName:"Spearman’s rho (non-parametric)",description:"description of Spearman’s rho (non-parametric)"},K={displayName:"Coefficient of determination R^2",description:"description of Coefficient of determination R^2"},L={displayName:"Mean difference",description:"description of Mean Difference"},W={displayName:"Median difference (non parametric)",description:"description of median difference (non-parametric)"},X={displayName:"Cohen's d",description:"description for Cohen's D"},Y={displayName:"Glass's delta",description:"description of for Glass's Delta"},q={displayName:"Hedge's g",description:"description for Hedge's G"},V={displayName:"r (non parametric)",description:"description for non parametric R"},J={displayName:"Eta squared",description:"description for eta squared"},Q={displayName:"Omega squared",description:"description for omega squared"},ee={displayName:"Beta coefficient standardized or unstandardized",description:"description for Beta coefficient standardized or unstandardized"},te={displayName:"R^2",description:"description for R^2"},ie={displayName:"Adjusted R^2",description:"description for adjusted R^2"},re=[{header:"Simple Measures",items:[L,W]},{header:"Standardized Measures",items:[X,Y,q,V]}],se={name:"continuous",displayName:"Continuous",description:"Continuous outcomes are often measured at both baseline and followup time points. Results of continuous data can be reported as means, mean differences, or differences in change score from baseline, and measures of precision are reported as standard deviation (SD), standard error (SE), or confidence intervals.",focusOfAnalysis:[(0,d.Z)((0,d.Z)({},$),{},{furtherChoices:[{name:"skip",appropriateEffectSizeMeasures:[{header:"general",items:[G,j,K]}]}]}),(0,d.Z)((0,d.Z)({},U),{},{furtherChoices:[{name:"skip",appropriateEffectSizeMeasures:re}]}),(0,d.Z)((0,d.Z)({},B),{},{furtherChoices:[(0,d.Z)((0,d.Z)({},z),{},{appropriateEffectSizeMeasures:re}),(0,d.Z)((0,d.Z)({},D),{},{appropriateEffectSizeMeasures:[{header:"general",items:[J,Q]}]})]}),(0,d.Z)((0,d.Z)({},I),{},{furtherChoices:[(0,d.Z)((0,d.Z)({},P),{},{appropriateEffectSizeMeasures:[{header:"general",items:[ee]}]}),(0,d.Z)((0,d.Z)({},H),{},{appropriateEffectSizeMeasures:[{header:"general",items:[te,ie]}]})]})]},ne={displayName:"Point Bi-serial correlation",description:"Point Bi-serial correlation description"},ae={displayName:"OR",description:"OR Description"},oe={displayName:"PR",description:"PR Description"},ce={displayName:"Risk Difference",description:"Risk Difference Description"},pe={displayName:"Phi",description:"Phi Description"},ue=[{header:"general",items:[ae,oe,ce,pe]}],de={displayName:"Cramer's V",description:"phi Description"},le={displayName:"Goodman-Kruskal Lamda",description:"Goodman-Kruskal Lamda Description"},fe={displayName:"Cliff's delta",description:"Cliff's delta Description"},me={displayName:"Kendall's tau",description:"Kendall's tau Description"},he=[{header:"Nominal",items:[de,le]},{header:"Ordinal",items:[fe,me]}],ve={displayName:"Pseudo R Squared",description:"Pseudo R Squared description"},Ce={displayName:"C-Index",description:"C-Index description"},Se={displayName:"Percent correctly classified",description:"Percent Correctly Classified description"},ge={name:"categorical",displayName:"Categorical",description:"These are dependent variables that have mutually exclusive outcomes. That is, the choice of one outcome means non-use of the other outcome. An example is a household that may choose to use charcoal, LPG, or electricity for cooking but not the use of two of these categories at a time.",focusOfAnalysis:[(0,d.Z)((0,d.Z)({},$),{},{furtherChoices:[{name:"skip",appropriateEffectSizeMeasures:[{header:"general",items:[ne]}]}]}),(0,d.Z)((0,d.Z)({},U),{},{furtherChoices:[{name:"skip",appropriateEffectSizeMeasures:ue}]}),(0,d.Z)((0,d.Z)({},B),{},{furtherChoices:[(0,d.Z)((0,d.Z)({},z),{},{appropriateEffectSizeMeasures:ue}),(0,d.Z)((0,d.Z)({},D),{},{appropriateEffectSizeMeasures:he})]}),(0,d.Z)((0,d.Z)({},I),{},{furtherChoices:[(0,d.Z)((0,d.Z)({},P),{},{appropriateEffectSizeMeasures:[{header:"general",items:[ae]}]}),(0,d.Z)((0,d.Z)({},H),{},{appropriateEffectSizeMeasures:[{header:"general",items:[ve,Ce,Se]}]})]})]},ye={displayName:"HR",description:"HR Description"},_e={displayName:"Survival rate difference",description:"Survival rate difference Description"},Oe={displayName:"Median survival time",description:"Median survival time Description"},Ee={displayName:"Restricted mean survival time",description:"Restricted mean survival time description"},Te=[{header:"general",items:[_e,Oe,Ee]}],ke={displayName:"Harrell's C-index",description:" Harrell's C-index description"},Ne={name:"timeToEvent",displayName:"Time To Event",description:"Time-to-event outcomes take account of whether an event takes place and also the time at which the event occurs, such that both the event and the timing of the event are important",focusOfAnalysis:[(0,d.Z)((0,d.Z)({},$),{},{furtherChoices:[{name:"skip",appropriateEffectSizeMeasures:[{header:"general",items:[ye]}]}]}),(0,d.Z)((0,d.Z)({},U),{},{furtherChoices:[{name:"skip",appropriateEffectSizeMeasures:Te}]}),(0,d.Z)((0,d.Z)({},B),{},{furtherChoices:[(0,d.Z)((0,d.Z)({},z),{},{appropriateEffectSizeMeasures:Te})]}),(0,d.Z)((0,d.Z)({},I),{},{furtherChoices:[(0,d.Z)((0,d.Z)({},P),{},{appropriateEffectSizeMeasures:[{header:"general",items:[ye]}]}),(0,d.Z)((0,d.Z)({},H),{},{appropriateEffectSizeMeasures:[{header:"general",items:[ke]}]})]})]},Me=[se,ge,Ne],be={components:{Card:R},computed:{},mounted:function(){var e=this;C.$on(v,(function(t){1===t&&(e.$store.dispatch("SET_OUTCOMEMEAURE",void 0),e.selected="")}))},methods:{prepareToAdvance:function(){C.$emit(v,2),C.$emit(v,3),this.advanceStep()},prepareToBackUp:function(){C.$emit(v,1),C.$emit(v,2),C.$emit(v,3),this.goBackStep()},setOutcomeSelection:function(e){this.$store.dispatch("SET_OUTCOMEMEAURE",e),this.selected=e}},data:function(){return{selected:"",outcomes:Me}}},Ae=be,Ze=(0,y.Z)(Ae,E,T,!1,null,"5cf00218",null),xe=Ze.exports,we=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-stepper-content",{attrs:{step:"2"}},[i("v-card",{staticClass:"past-scores"},[i("v-container",{staticClass:"container-override"},[i("v-card-title",[i("div",[i("h1",{staticClass:"text-h5"},[e._v(" Focus of Analysis ")]),i("h2",{staticClass:"text-h6 grey--text"},[e._v(" Select the focus of analysis ")])])]),i("v-card-text",[e.getOutcomeMeasure?i("div",{staticClass:"card-container"},e._l(e.validFociOfAnalysis,(function(t){return i("Card",{key:t.name,attrs:{identifier:t.name,title:t.displayName,currentlySelected:e.selected},on:{selected:function(i){return e.setFocusSelection(t.name)}}})})),1):e._e()]),i("v-card-actions",{staticClass:"show-on-desktop"},[i("div",{staticClass:"button-container"},[i("v-btn",{attrs:{text:""},on:{click:e.prepareToBackUp}},[e._v(e._s(e.t(e.k.BACK)))]),i("v-spacer"),i("v-btn",{attrs:{text:"",disabled:""===e.selected},on:{click:e.prepareToAdvance}},[e._v(e._s(e.t(e.k.NEXT)))])],1)]),i("v-card-actions",{staticClass:"show-on-mobile"},[i("div",{staticClass:"button-container"},[i("v-btn",{attrs:{text:""},on:{click:e.prepareToBackUp}},[e._v(e._s(e.t(e.k.BACK)))]),i("v-btn",{attrs:{text:"",disabled:""===e.selected},on:{click:e.prepareToAdvance}},[e._v(e._s(e.t(e.k.NEXT)))])],1)])],1)],1)],1)},Fe=[],Re={components:{Card:R},mounted:function(){var e=this;C.$on(v,(function(t){2===t&&(e.$store.dispatch("SET_FOCUSOFANALYSIS",void 0),e.selected="")}))},computed:(0,d.Z)((0,d.Z)({},(0,Z.Se)(["getOutcomeMeasure"])),{},{validFociOfAnalysis:function(){var e=this;return this.getOutcomeMeasure?Me.find((function(t){return t.name===e.getOutcomeMeasure})).focusOfAnalysis:[]}}),methods:{prepareToAdvance:function(){C.$emit(v,3),this.advanceStep()},prepareToBackUp:function(){C.$emit(v,2),C.$emit(v,3),this.goBackStep()},setFocusSelection:function(e){this.$store.dispatch("SET_FOCUSOFANALYSIS",e),this.selected=e}},data:function(){return{selected:""}}},$e=Re,Ue=(0,y.Z)($e,we,Fe,!1,null,"5a22c440",null),Be=Ue.exports,Ie=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-stepper-content",{attrs:{step:"3"}},[i("v-card",{staticClass:"past-scores"},[i("v-container",{staticClass:"container-override"},[i("v-card-title",[i("div",[i("h1",{staticClass:"text-h5"},[e._v(" Further modifiers ")]),i("h2",{staticClass:"text-h6 grey--text"},[e._v(" Select any relevant modifiers to the focus of analysis ")])])]),i("v-card-text",[e.getFocusOfAnalysis?i("div",{staticClass:"card-container"},e._l(e.validFurtherChoices,(function(t){return i("Card",{key:t.name,attrs:{identifier:t.name,title:t.displayName,currentlySelected:e.selected},on:{selected:function(i){return e.setFurtherChoiceSelection(t.name)}}})})),1):e._e()]),i("v-card-actions",{staticClass:"show-on-desktop"},[i("div",{staticClass:"button-container"},[i("v-btn",{attrs:{text:""},on:{click:e.prepareToBackUp}},[e._v(e._s(e.t(e.k.BACK)))]),i("v-spacer"),i("v-btn",{attrs:{text:"",disabled:""===e.selected},on:{click:e.advanceStep}},[e._v(e._s(e.t(e.k.NEXT)))])],1)]),i("v-card-actions",{staticClass:"show-on-mobile"},[i("div",{staticClass:"button-container"},[i("v-btn",{attrs:{text:""},on:{click:e.prepareToBackUp}},[e._v(e._s(e.t(e.k.BACK)))]),i("v-btn",{attrs:{text:"",disabled:""===e.selected},on:{click:e.advanceStep}},[e._v(e._s(e.t(e.k.NEXT)))])],1)])],1)],1)],1)},ze=[],De={components:{Card:R},mounted:function(){var e=this;C.$on(v,(function(t){3===t&&(e.$store.dispatch("SET_FURTHERCHOICE",void 0),e.selected="")}))},computed:(0,d.Z)((0,d.Z)({},(0,Z.Se)(["getOutcomeMeasure","getFocusOfAnalysis"])),{},{validFurtherChoices:function(){var e=this;return this.getOutcomeMeasure&&this.getFocusOfAnalysis?Me.find((function(t){return t.name===e.getOutcomeMeasure})).focusOfAnalysis.find((function(t){return t.name===e.getFocusOfAnalysis})).furtherChoices:[]}}),methods:{setFurtherChoiceSelection:function(e){this.$store.dispatch("SET_FURTHERCHOICE",e),this.selected=e},prepareToBackUp:function(){C.$emit(v,3),this.goBackStep()}},data:function(){return{selected:""}}},Pe=De,He=(0,y.Z)(Pe,Ie,ze,!1,null,"df97b116",null),Ge=He.exports,je=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-stepper-content",{attrs:{step:"4"}},[i("v-card",{staticClass:"past-scores"},[e.getFurtherChoice?i("v-container",{staticClass:"container-override"},[i("v-card-title",{staticClass:"text-h5"},[i("div",[i("h1",{staticClass:"text-h5"},[e._v(" Appropriate Effect Size Measurements ")]),i("h2",{staticClass:"text-h6 grey--text"},[e._v(" Based on the inputs you've given, these are the appropriate effect size measurements to consider for your investigation. ")])])]),e._l(e.validEffectSizeMeasures,(function(t){return i("div",{key:t.header},["general"!==t.header?i("v-toolbar",{attrs:{color:"black--text lighten-2 grey",dark:"",flat:""}},[i("v-toolbar-title",[e._v(e._s(t.header))])],1):e._e(),i("v-card-text",[i("div",{staticClass:"card-container"},e._l(t.items,(function(t){return i("Card",{key:t.name,attrs:{identifier:t.name,title:t.displayName,description:"<span class='italic'>Report with 95% CI as a measure of precision.<br>Interpret in light of clinical importance.</span>",currentlySelected:e.selected,unselectable:!0}})})),1)])],1)})),i("v-card-actions",{staticClass:"show-on-desktop"},[i("div",{staticClass:"button-container"},[i("v-btn",{attrs:{text:""},on:{click:e.goBackStep}},[e._v(e._s(e.t(e.k.BACK)))]),i("v-spacer")],1)]),i("v-card-actions",{staticClass:"show-on-mobile"},[i("div",{staticClass:"button-container"},[i("v-btn",{attrs:{text:""},on:{click:e.goBackStep}},[e._v(e._s(e.t(e.k.BACK)))])],1)])],2):e._e()],1)],1)},Ke=[],Le={components:{Card:R},computed:(0,d.Z)((0,d.Z)({},(0,Z.Se)(["getOutcomeMeasure","getFocusOfAnalysis","getFurtherChoice"])),{},{validEffectSizeMeasures:function(){var e=this;return this.getOutcomeMeasure&&this.getFocusOfAnalysis&&this.getFurtherChoice?Me.find((function(t){return t.name===e.getOutcomeMeasure})).focusOfAnalysis.find((function(t){return t.name===e.getFocusOfAnalysis})).furtherChoices.find((function(t){return t.name===e.getFurtherChoice})).appropriateEffectSizeMeasures:[]}}),methods:{hasSpecialHeaders:function(){this.validEffectSizeMeasures[0].header}},data:function(){return{selected:""}}},We=Le,Xe=(0,y.Z)(We,je,Ke,!1,null,"75ddc602",null),Ye=Xe.exports,qe={components:(0,d.Z)({},r),computed:(0,d.Z)({},(0,Z.Se)(["getOutcomeMeasure","getFocusOfAnalysis","getFurtherChoice","getShowDescriptions"])),mounted:function(){var e=this;this.fillerDescriptions=this.getShowDescriptions,C.$on(m,(function(){e.currentStep--,3===e.currentStep&&e.hasNoFurtherChoices()&&(C.$emit(v,3),e.$store.dispatch("SET_FURTHERCHOICE",void 0),e.currentStep--)})),C.$on(h,(function(){e.currentStep++,3===e.currentStep&&e.hasNoFurtherChoices()&&(e.$store.dispatch("SET_FURTHERCHOICE","skip"),e.currentStep++)}))},methods:{handleSwitchChange:function(e){this.$store.dispatch("SET_SHOWDESCRIPTIONS",e),this.fillerDescriptions=e},hasNoFurtherChoices:function(){var e=this,t=Me.find((function(t){var i=t.name;return i===e.getOutcomeMeasure})),i=t.focusOfAnalysis,r=i.find((function(t){var i=t.name;return i===e.getFocusOfAnalysis})),s=r.furtherChoices;return"skip"===s[0].name}},data:function(){return{currentStep:0,fillerDescriptions:!0}}},Ve=qe,Je=(0,y.Z)(Ve,p,u,!1,null,"ed352858",null),Qe=Je.exports,et={name:"App",components:{Stepper:Qe}},tt=et,it=(0,y.Z)(tt,o,c,!1,null,null,null),rt=it.exports,st=i(4309),nt=i(707),at=i.n(nt),ot=(i(8556),i(2482)),ct={FOOTER_COPYRIGHT:"copywright in footer",NEXT:"Next",BACK:"Back",BEGIN:"Begin"},pt=i(8308),ut=(0,d.Z)((0,d.Z)({},pt.Z),{},(s={},(0,ot.Z)(s,ct.FOOTER_COPYRIGHT,"Copyright © 2020 Washington University School of Medicine, St. Louis, Missouri"),(0,ot.Z)(s,ct.NEXT,"Next"),(0,ot.Z)(s,ct.BACK,"Back"),(0,ot.Z)(s,ct.BEGIN,"Begin"),s)),dt={en_us:ut};a["default"].use(at());var lt={lang:{locales:dt,current:"en_us"},theme:{themes:{light:{primary:"#A52714"}}}},ft=new(at())(lt),mt=[{data:function(){return{k:ct}},methods:{goBackStep:function(){C.$emit(m)},advanceStep:function(){C.$emit(h)},clearSelection:function(e){C.$emit(v,e)},t:function(e){return this.$vuetify.lang.t("$vuetify.".concat(e))}}}];a["default"].use(Z.ZP);var ht={outcomeMeasure:void 0,focusOfAnalysis:void 0,furtherChoice:void 0,showDescriptions:!1},vt={getOutcomeMeasure:function(e){return e.outcomeMeasure},getFocusOfAnalysis:function(e){return e.focusOfAnalysis},getFurtherChoice:function(e){return e.furtherChoice},getShowDescriptions:function(e){return e.showDescriptions}},Ct={SET_OUTCOMEMEAURE:function(e,t){var i=e.commit;i("SET_OUTCOMEMEAURE_MUTATION",t)},SET_FOCUSOFANALYSIS:function(e,t){var i=e.commit;i("SET_FOCUSOFANALYSIS_MUTATION",t)},SET_FURTHERCHOICE:function(e,t){var i=e.commit;i("SET_FURTHERCHOICE_MUTATION",t)},SET_SHOWDESCRIPTIONS:function(e,t){var i=e.commit;i("SET_SHOWDESCRIPTIONS_MUTATION",t)}},St={SET_OUTCOMEMEAURE_MUTATION:function(e,t){e.outcomeMeasure=t},SET_FOCUSOFANALYSIS_MUTATION:function(e,t){e.focusOfAnalysis=t},SET_FURTHERCHOICE_MUTATION:function(e,t){e.furtherChoice=t},SET_SHOWDESCRIPTIONS_MUTATION:function(e,t){e.showDescriptions=t}},gt=new Z.ZP.Store({state:ht,mutations:St,actions:Ct,getters:vt});a["default"].use(st.Z),a["default"].mixin.apply(a["default"],(0,n.Z)(mt)),a["default"].config.productionTip=!1,new a["default"]({vuetify:ft,store:gt,render:function(e){return e(rt)},mounted:function(){this.$vuetify.lang.defaultLocale="en_us"}}).$mount("#app-entry")}},t={};function i(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=e,function(){var e=[];i.O=function(t,r,s,n){if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],s=e[u][1],n=e[u][2];for(var o=!0,c=0;c<r.length;c++)(!1&n||a>=n)&&Object.keys(i.O).every((function(e){return i.O[e](r[c])}))?r.splice(c--,1):(o=!1,n<a&&(a=n));if(o){e.splice(u--,1);var p=s();void 0!==p&&(t=p)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,s,n]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){i.p="/correct-effect-size/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,n,a=r[0],o=r[1],c=r[2],p=0;if(a.some((function(t){return 0!==e[t]}))){for(s in o)i.o(o,s)&&(i.m[s]=o[s]);if(c)var u=c(i)}for(t&&t(r);p<a.length;p++)n=a[p],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(u)},r=self["webpackChunkcorrect_effect_size"]=self["webpackChunkcorrect_effect_size"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998],(function(){return i(247)}));r=i.O(r)})();
//# sourceMappingURL=app-legacy.ef05eddb.js.map
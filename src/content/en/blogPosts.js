// English copy for the blog, keyed by slug. Non-text fields (date, relatedTo) come from
// src/content/blogPosts.js.
export const blogPostsEn = {
  'automl-replace-or-complement-credit-scoring': {
    tag: 'AutoML',
    title: 'Will AutoML replace your credit scoring model, or complement it?',
    excerpt:
      'We compare the strengths of traditional scorecard methods and AutoML-based models, and look at practical ways to use the two side by side.',
    readTime: '6 min',
    body: [
      'Traditional scorecard methods have been the backbone of credit scoring for years: explainable, audit-friendly and trusted by the business. AutoML-based models can deliver stronger discriminatory power, but teams usually want that power without giving up explainability.',
      'In practice, the most effective approach is to use the two as complements rather than substitutes. The scorecard stays the reference point for existing processes and regulatory expectations, while the AutoML model is tested alongside it in a champion/challenger setup and phased in as its discriminatory power is proven.',
      'The most critical step in this transition is holding both models to the same audit standard: it must be clear how each variable affects the score, and model approval must go through a traceable workflow.',
    ],
    relatedLabel: 'See champion/challenger comparison in Experiment Pipeline',
  },
  'audit-trail-in-model-risk-management': {
    tag: 'Model Risk Management',
    title: 'Why the audit trail matters as much as accuracy in model risk management',
    excerpt:
      'It is not enough for a model to perform well — how that performance was achieved has to be traceable too. Here are the three core criteria regulators look at.',
    readTime: '5 min',
    body: [
      'However high a risk model’s Gini coefficient, it will not pass an audit if no one can explain how its scores are produced. Regulators and internal audit teams look at three things: what data the model was trained on, how much each variable contributes to the decision, and who approved the model, and when.',
      'Pulling these three pieces of information together by hand can take weeks. When the audit trail is a native part of the system — every experiment versioned automatically, every approval recorded — that process shrinks from days to hours.',
    ],
    relatedLabel: 'See how the Model Governance module keeps the audit trail',
  },
  'woe-binning-revisited': {
    tag: 'Feature Engineering',
    title: 'WOE/binning revisited: when is it still the best choice?',
    excerpt:
      'With complex machine learning models now widespread, WOE/binning may look out of favor — yet it remains a powerful tool wherever explainability is required.',
    readTime: '7 min',
    body: [
      'WOE (Weight of Evidence) and binning are techniques that credit scoring models have relied on for decades, making each interval’s contribution to the score directly readable. Although the rise of complex tree-based models has made them look "old-fashioned", they are still preferred, especially in heavily regulated scenarios.',
      'Practical advice: rather than abandoning WOE/binning altogether, keep it as an option in the feature engineering step and decide which variables to treat this way based on your data and regulatory requirements.',
    ],
    relatedLabel: 'Explore the feature engineering steps in Experiment Pipeline',
  },
  'explainability-in-credit-risk-models': {
    tag: 'Regulation',
    title: 'Explainability in credit risk models: what do regulators expect?',
    excerpt:
      'We summarize how interpretation techniques such as SHAP can be used in regulatory processes, and what model documentation needs to cover.',
    readTime: '6 min',
    body: [
      'When regulators assess a credit risk model, they typically look for answers to three questions: what data was the model trained on, how much does each variable contribute to the score, and how is the model monitored over time. SHAP-based contribution analysis can answer the second question numerically, for every single prediction.',
      'When model documentation (the model card) answers these three questions automatically, with up-to-date data, there is no longer any need to rebuild that documentation by hand for every new model version.',
    ],
    relatedLabel: 'Explore the interpretation screen in Model Governance',
  },
}

// English text for src/content/iremVideoGuides.js (keyed by slug; timings come from the Turkish file).

const p = (...sentences) => sentences.join(' ')

const TAGLINE = 'Convex. From data to decision, on one platform.'

const DATA = [
  'Unlock the value in your data.',
  'Convex: everything from data to models in production, on a single platform.',
  'Bring in your data in seconds, from a CSV file or straight from your database.',
  'Sync database-backed datasets with one click (Sync Dataset), so your models always run on the latest data.',
  'Add regions and locations as polygons (point in polygon) and bring geographic data into your analyses.',
  'Combine data from different sources into a single dataset (Merged dataset).',
  'With Synthetic Data Management, generate realistic synthetic data from your own data using CTGAN or CART.',
  'Measure quality with privacy, utility and similarity scores, and compare against the original data with the Evolution Report.',
  'Every change, synthetic data included, becomes a new version; use it in your experiments right away and always know which model was trained on which data.',
  'Sample large datasets based on your target variable (Create Sampling) to speed up your experiments.',
  'Get to know your data in one click with distributions, categorical charts and a correlation matrix (Visualize Dataset).',
  'Organize your work by portfolio and use case (Portfolio, Use Case), and assign projects to your teams (Department Assignment).',
]

const EXPERIMENT = [
  'In Experiments, build an end-to-end machine learning workflow without writing a single line of code.',
  'Classification, Regression or Clustering: choose your problem type and set your target variable.',
  'With Control of Data Balance, choose Oversampling, Undersampling or Class Weight so rare classes are never overlooked.',
  'In Data Exploration, see the statistics for every column at a glance.',
  'Turn raw data into powerful features with Feature Engineering, and change data types in one click with Basic Transformation.',
  'Find and remove outliers with methods such as Z-Score using Outlier Detection.',
  'With Feature Generation, create new variables using Adaptive Binning, Fixed Width Binning or your own formula.',
  'With Missing Value Imputation, fill in missing values with the most frequent value or a constant.',
  'With Encoding, convert categorical data to numbers using One-Hot or Label Encoding.',
  'With Scaling, scale values using Min Max, Standard, Robust or Mean Normalization.',
  'In Feature Selection, pick the most meaningful variables with nine methods, from correlation to VIF Analysis and from Univariate Gini to Recursive Feature Elimination.',
  'Track your workflow at every step, and see everything you have done on one screen in Pipeline Summary.',
  'Undo applied steps (Revert) or start the workflow over (Reset pipeline); feel free to experiment.',
  'Turn on distributed training with a single toggle (Distributed experiment) and split large data across multiple machines.',
  'In Model Configuration, choose your algorithm, from Logistic Regression to LightGBM and from CatBoost to XGBoost, and tune its parameters.',
  'Start training with Model Running and follow progress and logs live.',
  'Compare models with Interpret Model, and understand every decision through the ROC curve and feature importance.',
  'Fine-tune your model with Tune Model using Auto Optimize or Grid Search.',
]

const CUSTOM_MODELS = [
  'Bring models you trained elsewhere into Convex with Custom Models.',
  'Custom models are versioned too (Create Version), so you can track each version separately.',
  'Retrain your model on new data with Retrain, and test it on fresh data with Retest.',
  'After retraining, compare the new model side by side with the root model (Compare with Root Model): metrics, feature importance and SHAP values on one screen.',
]

const GOVERNANCE = [
  'Model Governance: every model transparent, auditable and under your control.',
  'Export the Model Report as a Word document in one click; review the Validation Report on screen, or email it as a PDF.',
  'In the Validation Report, validate your model with T-test, binomial test, stability, bootstrap and score distribution analyses.',
  'On the Interpret screen, explain every model decision with SHAP summary plots, correlation and reason charts.',
  'See the workflow behind the model (Pipeline) step by step.',
  'See the formula (Equation) clearly for logistic regression models.',
  'Automatically generate a Score Card from your credit models and export it in one click.',
  'Access all training logs (Logs) at any time.',
  "Keep the model's approval status and documents in one place with the Model Audit Log.",
  'Download test results as CSV (Download Test Results) and the model object as a zip (Download Model Object).',
  'Get batch predictions on a new dataset right away, without deploying (Make Prediction With New Dataset).',
  'Chain multiple models together with Model Flow and build your own decision flow.',
  'With the Scheduler, your models retrain automatically at regular intervals.',
  'In the Short flow, the results of previous rules are reapplied as is; in the Long flow, the rules run again on the new data.',
  'Use Build to turn your model into a production-ready package.',
  'Group your models around business needs with Applications and get them ready for deployment.',
]

const DEPLOYMENT = [
  'Add new environments yourself in the Infrastructure tab.',
  'Deploy your model to any environment in one click with Model Deployment.',
  'Alongside each prediction, also get the Raw Data and the values of your variables before they enter the model (Intermediate Variables).',
  'Score Card results and SHAP Values come in the same response.',
  'Turn on Auto Monitoring and set your own thresholds with Monitoring Profiles.',
  'Get Alert Emails when a threshold is crossed, and keep everything in view with Scheduled Report Emails.',
  "Track performance, PSI, distributions, SHAP and data quality in one place in the live model's Model Report.",
  'A single REST request returns your prediction and its explanation in seconds.',
]

const BATCH = [
  'With Batch, read data from your database, run it through the model and write the results back to the database.',
  'Build the flow yourself (Batch DAG); trigger it manually or run it on a schedule.',
]

export const iremVideoGuidesEn = {
  'product-film': {
    title: 'Convex product film',
    module: 'Introduction',
    thumbnailLabel: 'Product Film',
    description:
      'Every Convex capability, from data to models in production, in a single film: data, experiments, custom models, governance, deployment and batch scoring.',
    body: [
      p(...DATA.slice(0, 6)),
      p(...DATA.slice(6, 12)),
      p(...EXPERIMENT.slice(0, 6)),
      p(...EXPERIMENT.slice(6, 12)),
      p(...EXPERIMENT.slice(12, 18)),
      p(...CUSTOM_MODELS),
      p(...GOVERNANCE.slice(0, 6)),
      p(...GOVERNANCE.slice(6, 12)),
      p(...GOVERNANCE.slice(12, 16)),
      p(...DEPLOYMENT.slice(0, 6)),
      p(...DEPLOYMENT.slice(6, 8)),
      p(...BATCH, TAGLINE),
    ],
    steps: [...DATA, ...EXPERIMENT, ...CUSTOM_MODELS, ...GOVERNANCE, ...DEPLOYMENT, ...BATCH],
  },
  'intro-data': {
    title: 'Data: import, merging, synthetic data and versioning',
    module: 'Introduction · Data',
    thumbnailLabel: '01 · Data',
    description:
      'Importing data from CSV or a database, syncing, polygon merging, synthetic data and versioning.',
    body: [p(...DATA.slice(0, 4)), p(...DATA.slice(4, 8)), p(...DATA.slice(8, 12)), TAGLINE],
    steps: [...DATA],
  },
  'creating-a-portfolio': {
    title: 'Creating a portfolio',
    module: 'Portfolio',
    thumbnailLabel: 'Portfolio',
    description:
      'Organize your projects with portfolios: create a new portfolio and confirm it in the list, step by step.',
    body: [
      'Organize your projects with portfolios. On the Projects screen, switch to the Portfolio tab. Create a new portfolio in one click. Enter the portfolio name and description.',
      'Save it, and your portfolio is ready. Your new portfolio appears in the list with its name and description. Who created it is recorded too. Turn your data into value with Convex.',
    ],
    steps: [
      'Organize your projects with portfolios.',
      'On the Projects screen, switch to the Portfolio tab.',
      'Create a new portfolio in one click.',
      'Enter the portfolio name and description.',
      'Save it, and your portfolio is ready.',
      'Your new portfolio appears in the list with its name and description.',
      'Who created it is recorded too.',
    ],
  },
  'intro-experiments': {
    title: 'Experiments: a no-code machine learning workflow',
    module: 'Introduction · Experiment',
    thumbnailLabel: '02 · Experiment',
    description:
      'An end-to-end workflow, from problem definition through feature engineering and selection to model training, interpretation and fine-tuning.',
    body: [
      p(...EXPERIMENT.slice(0, 4)),
      p(...EXPERIMENT.slice(4, 8)),
      p(...EXPERIMENT.slice(8, 12)),
      p(...EXPERIMENT.slice(12, 16)),
      p(...EXPERIMENT.slice(16, 18), TAGLINE),
    ],
    steps: [...EXPERIMENT],
  },
  'creating-an-experiment': {
    title: 'Creating and starting an experiment',
    module: 'Experiment',
    thumbnailLabel: 'Creating an Experiment',
    description:
      'Create a new experiment in your project, select a dataset and launch the workflow in seconds.',
    body: [
      'Launch your first experiment in Convex in seconds. Open your project. Give your experiment a name with Create Experiment. Select the dataset and its version.',
      'Your experiment has been created. Prepare the environment with Start Experiment Setup. In a few moments, the experiment is ready. Start Experiment opens the workflow.',
    ],
    steps: [
      'Launch your first experiment in Convex in seconds.',
      'Open your project.',
      'Give your experiment a name with Create Experiment.',
      'Select the dataset and its version.',
      'Your experiment has been created.',
      'Prepare the environment with Start Experiment Setup.',
      'In a few moments, the experiment is ready.',
      'Start Experiment opens the workflow.',
    ],
  },
  'problem-and-data-exploration': {
    title: 'Problem definition and data exploration',
    module: 'Experiment',
    thumbnailLabel: 'Problem and Exploration',
    description:
      'Set the problem type and target variable, then review column statistics with Data Exploration.',
    body: [
      'First define the problem, then get to know your data. On the Data Preparation screen, the problem type is Classification. Select PD, the default indicator, as the target variable. Data Exploration presents statistics for all columns in a single table.',
      'Missing values, means and distributions at a glance.',
    ],
    steps: [
      'First define the problem, then get to know your data.',
      'On the Data Preparation screen, the problem type is Classification.',
      'Select PD, the default indicator, as the target variable.',
      'Data Exploration presents statistics for all columns in a single table.',
      'Missing values, means and distributions at a glance.',
    ],
  },
  'outlier-detection': {
    title: 'Outlier Detection',
    module: 'Experiment',
    thumbnailLabel: 'Outlier Detection',
    description: 'Detect outliers in numeric columns with Z-Score and remove them in one click.',
    comingNext: 'Feature Generation',
    body: [
      'Find and remove outliers in seconds. Outlier Detection shows numeric columns as box plots. Select the columns to analyze. Detect outliers in one click with the Z-Score method.',
      'Review the results and remove the outlier records.',
    ],
    steps: [
      'Find and remove outliers in seconds.',
      'Outlier Detection shows numeric columns as box plots.',
      'Select the columns to analyze.',
      'Detect outliers in one click with the Z-Score method.',
      'Review the results and remove the outlier records.',
    ],
  },
  'intro-custom-models': {
    title: 'Custom models: import, version, retrain',
    module: 'Introduction · Custom Models',
    thumbnailLabel: '03 · Custom Models',
    description:
      'Bringing externally trained models into Convex, versioning, Retrain/Retest and comparison with the root model.',
    body: [p(...CUSTOM_MODELS), TAGLINE],
    steps: [...CUSTOM_MODELS],
  },
  'intro-model-governance': {
    title: 'Model governance',
    module: 'Introduction · Model Governance',
    thumbnailLabel: '04 · Model Governance',
    description:
      'Reports, validation, interpretation, scorecards, audit log, model flow, scheduler and build: transparent, auditable models.',
    body: [
      p(...GOVERNANCE.slice(0, 4)),
      p(...GOVERNANCE.slice(4, 8)),
      p(...GOVERNANCE.slice(8, 12)),
      p(...GOVERNANCE.slice(12, 16)),
      TAGLINE,
    ],
    steps: [...GOVERNANCE],
  },
  'intro-deployment': {
    title: 'Infrastructure and model deployment',
    module: 'Introduction · Deployment',
    thumbnailLabel: '05 · Deployment',
    description:
      'Adding environments, one-click deployment, output options, auto monitoring, Model Report and REST API.',
    body: [p(...DEPLOYMENT.slice(0, 4)), p(...DEPLOYMENT.slice(4, 8)), TAGLINE],
    steps: [...DEPLOYMENT],
  },
  'intro-batch': {
    title: 'Batch scoring',
    module: 'Introduction · Batch',
    thumbnailLabel: '06 · Batch',
    description:
      'Batch scoring flows that read from your database, run the data through the model and write the results back to the database.',
    body: [p(...BATCH, TAGLINE)],
    steps: [...BATCH],
  },
}

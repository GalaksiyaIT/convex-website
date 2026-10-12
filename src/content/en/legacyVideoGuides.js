// English text for the legacy (hidden) video guides in videoGuides.js, keyed by slug.
export const legacyVideoGuidesEn = {
  giris: {
    title: 'Signing in to Convex and the Statistics Overview dashboard',
    module: 'Getting Started',
    thumbnailLabel: 'Getting Started',
    description:
      'The Statistics Overview dashboard you see after signing in summarizes all of the model work across your organization on a single screen.',
    body: [
      "Convex starts with a secure sign-in using your username and password. The Statistics Overview dashboard that opens next makes every module accessible from the left menu while giving you a real-time summary of your organization's AutoML activity.",
      "Department and project filters let you narrow the view from the whole organization down to a single team or project. Metrics such as the number of projects, experiments, models built, models in production and datasets give management teams real-time visibility into the organization's model portfolio.",
      'The lists of recent experiments and synthetic data experiments at the bottom of the dashboard let teams follow ongoing work at a glance, reducing the need for separate reporting and coordination.',
    ],
    steps: [
      'Secure sign-in with username and password',
      'The Statistics Overview dashboard opens; every module is accessible from the left menu.',
    ],
  },
  'dataset-yukleme': {
    title: 'Uploading a dataset and validating its schema',
    module: 'Dataset',
    thumbnailLabel: 'Dataset Upload',
    description:
      'The Data Sets module makes data upload, the first and most critical step of model development, secure and traceable.',
    body: [
      "Every model development process rests on an accurate, traceable data source. Using the 'New Data Set' button on the Data Sets screen, you first choose the source — in this example, 'File From Disk' to upload a CSV file from your computer. You then select your file, set the separator character and file format, and give the dataset a meaningful name.",
      "The 'Preview' feature lets you view the columns and first rows before uploading the data — a simple but critical checkpoint that catches a faulty or incomplete file before it enters the system.",
      "Once started with 'Upload', progress is tracked through a notification at the top of the screen; it stays visible while the upload is running and disappears automatically when it finishes.",
      "When the upload is complete, the dataset is recorded in the Data Sets list along with its size, row and column counts, and creation date — keeping all of the organization's data assets in a single, auditable inventory.",
    ],
    steps: [
      'Sign in to Convex; the Statistics Overview dashboard opens.',
      "On the Data Sets screen, click 'New Data Set' and choose 'File From Disk' as the data source.",
      'Select a CSV file from your computer and enter the dataset name and separator character.',
      "Use 'Preview' to check the columns and first rows before uploading.",
      "Start the 'Upload'; track the progress percentage in the notification at the top of the screen.",
      'The upload completes and the dataset is added to the list with its size and row/column counts.',
    ],
  },
  'veri-gorsellestirme': {
    title: 'Data visualization',
    module: 'Dataset',
    thumbnailLabel: 'Data Visualization',
    description:
      'Getting to know your data without writing code directly improves the quality of modeling decisions.',
    body: [
      'The visualization feature for a dataset in the Data Sets list lets data science teams explore their data without switching to a separate tool; charts generated automatically for each column are presented in a single window.',
      "Numeric columns are examined with histograms under 'Distribution Plots for Numeric Columns', and categorical columns with frequency charts under 'Distribution Plots for Category Columns' — so imbalances and outliers are spotted before modeling.",
      "The 'Correlation Matrix' tab summarizes the relationships between columns in a single table, revealing which variables depend on one another; these insights form the basis for later feature engineering decisions.",
    ],
    steps: [
      'Filter the Data Sets list by typing the dataset name in the search box',
      "Select 'Visualize Dataset' from the three-dot menu",
      'Numeric columns are examined with histograms and violin plots',
      "Categorical columns are examined with frequency charts under 'Count Plots'",
      "The 'Correlation Matrix' tab summarizes the relationships between columns in a single table",
      'The dataset can be exported as CSV from its versions',
    ],
  },
  'veri-ornekleme': {
    title: 'Data sampling',
    module: 'Dataset',
    thumbnailLabel: 'Data Sampling',
    description:
      "Teams working with large datasets don't need to run every experiment on the full data.",
    body: [
      'With datasets of hundreds of thousands or millions of rows, running every experiment on the full data is costly in both time and compute. The sampling feature in the Data Sets list creates a representative subset of a dataset in a single step.',
      "The sample is not a separate copy of the original dataset but a new version of it, shown with the '2 Versions' label — so the original data is preserved while you iterate on a smaller, faster version.",
      'This approach speeds up the experimentation and model development phase in particular; the final model can be revalidated on the full data when needed.',
    ],
    steps: [
      'Filter the Data Sets list by typing the dataset name in the search box',
      "Select 'Create Sampling' from the three-dot menu",
      'Set the Sample Size and Target Name',
      "The sample becomes a new version labeled '2 Versions', leaving the original data intact",
    ],
  },
  proje: {
    title: 'Creating and managing projects',
    module: 'Project',
    thumbnailLabel: 'Project',
    description:
      'Projects are the core organizational unit, bringing related data and experiments together in a single workspace.',
    body: [
      "The Projects screen — with its Projects, Portfolio and Use Case tabs at the top — is the central place where all of the organization's workspaces are managed. When creating a new project, you define its name, the Portfolio and Use Case it belongs to, and a short description.",
      'Access control can be applied to each project through Department Assignment: you decide which departments (within your own organization or among your partners) can see the project by moving them between the Available Departments and Assigned Departments lists. Only admin users can view and edit this screen.',
      'In a growing organization where many teams share the same platform, this structure keeps data and model access under control and ensures projects are managed with visibility for the right people.',
    ],
    steps: [
      "The Projects screen is the central place where all of the organization's workspaces are managed.",
      'When creating a new project, you define its name, Portfolio, Use Case and description.',
      'Access control can be applied to each project through Department Assignment.',
      'This is where you decide which departments can see the project; only admin users have this permission.',
      'In a growing organization, this structure keeps project and model access under control.',
    ],
  },
  portfoy: {
    title: 'Portfolio management',
    module: 'Portfolio',
    thumbnailLabel: 'Portfolio',
    description:
      'Portfolios group projects under a shared business area, making management reporting easier.',
    body: [
      "The Portfolio tab on the Projects screen lists every portfolio in the organization — predefined examples such as Retail, Corporate, SME and Agriculture are one way of bringing your organization's business-line structure into the platform.",
      "With 'New Portfolio' you can define a new portfolio tailored to your own business lines; by selecting it when creating projects, you can group those projects together.",
      'This grouping simplifies reporting for management and risk teams that want to track multiple projects within a single business area.',
    ],
    steps: [
      'The Portfolio tab lists every portfolio in the organization, including predefined examples such as Retail, Corporate, SME and Agriculture.',
      "With 'New Portfolio' you can define a portfolio for your own business line and select it in your projects.",
      'This grouping makes it easier to track and report on multiple projects under a single business area.',
    ],
  },
  'kullanim-senaryosu': {
    title: 'Defining use cases',
    module: 'Use Case',
    thumbnailLabel: 'Use Case',
    description: 'Use cases record which business problem each model serves.',
    body: [
      'The Use Case tab on the Projects screen lists the use cases defined in the organization (for example Marketing, Collections and Acquisition) — each one corresponds to a business problem.',
      "With 'New Use Case' you can define a new use case and link projects to it when creating them; every project and model is then tagged with the business need it serves.",
      "This context gives a direct, consistent answer to the question 'why does this model exist, and which decision does it support?', especially in Model Governance and audit processes.",
    ],
    steps: [
      'The Use Case tab lists the use cases defined in the organization, including examples such as Marketing, Collections and Acquisition.',
      "With 'New Use Case' you can define a new use case and link your projects to it.",
      'In Model Governance and audit processes, this context shows which need the model supports.',
    ],
  },
  'experiment-pipeline': {
    title: 'Setting up your first experiment with Experiment Pipeline',
    module: 'Experiment Pipeline',
    thumbnailLabel: 'Experiment Pipeline',
    description:
      'Experiment Pipeline brings the entire process, from data preparation to model training, into a single traceable flow.',
    body: [
      'When an experiment starts, all of the pipeline steps appear in order in the left menu, and the experiment moves forward through them. This structure lets data scientists make data cleaning, feature engineering and model selection decisions on the same screen and the same data, without switching between tools.',
      'In the Data Preparation and Data Exploration steps, the dataset is connected to the pipeline and the raw data gets a first review. The Feature Engineering stage is split into six sub-steps: Basic Transformation adjusts column names and data types; Outlier Detection identifies outliers; Feature Generation derives new features from existing columns; Missing Value Imputation fills in missing values according to column type (with methods such as "Most Frequent Value" for categorical columns and "Mean"/"Median"/"Constant" for numeric columns); Encoding converts categorical data to numeric form; and Scaling brings numeric columns to a common scale.',
      'In the Feature Selection stage, the set of features included in the model is narrowed down with a wide range of statistical methods: Missing Value Threshold and Single Unique Value Filter remove weak or uninformative columns; Variance Threshold and Correlation Based Filtering drop low-variance or highly correlated columns; VIF Analysis checks for multicollinearity; and Feature Importance Reduction, Univariate Gini Filtering, Stepwise Elimination and Recursive Feature Elimination eliminate features based on their contribution to model performance, aiming to find the strongest set of variables.',
      'The Pipeline Summary step provides a consolidated summary of every transformation and selection decision applied so far — a final checkpoint before training. In the Model step, one or more algorithms are configured (Model Configuration) and sent for training (Model Running); training is tracked with a live progress indicator and log screen, and once it reaches 100% you move on to the results.',
      "After training, the Interpret Model step visualizes which variables the model relies on and how it makes decisions, while the Tune Model step lets you optimize the selected algorithm's hyperparameters for one final performance boost.",
    ],
    steps: [
      'Creating a new experiment: a project and dataset are selected and a new experiment is started; the session is queued and becomes ready.',
      'Data Preparation: the dataset is connected to the pipeline and problem-type settings such as the target variable and train/test split are configured.',
      'Data Exploration: a first statistical review of the raw data is performed.',
      'Feature Engineering: Outlier Detection — outliers in numeric columns are identified with boxplots.',
      'Feature Engineering: Feature Generation — new features are derived from existing columns using methods such as binning.',
      'Feature Engineering: Basic Transformation — column names are adjusted and data types are converted.',
      'Feature Engineering: Scaling — numeric columns are brought to a common scale with the selected method.',
      'Feature Engineering: Missing Value Imputation — missing values are filled in with methods suited to each column type.',
      'Feature Engineering: Encoding — categorical data is converted to numeric form.',
      'Feature Selection: Missing Value Threshold — columns with a high share of missing values are found, selected and removed from the pipeline.',
      'Pipeline Summary & Model Configuration — the pipeline summary is reviewed and the configuration for model training is completed.',
      'Model Running: Training the model — a LightGBM model is trained on the selected data; progress and logs are monitored live.',
      'Interpret Model & Tune Model — once training is complete, the model moves on to the interpretation and hyperparameter tuning steps.',
    ],
  },
  'score-card': {
    title: 'Score Card',
    module: 'Score Card',
    thumbnailLabel: 'Score Card',
    description:
      'A scorecard turns a statistical model into a decision tool that business units can use directly.',
    body: [
      'When you select an experiment in Model Governance and start creating a scorecard, you can choose either Automatic Generation (generated automatically from the model calibration) or Custom Score Card (built manually to your own criteria).',
      'Along with calibration parameters such as Target Score, Target Odds and PDO, the resulting card splits each feature into bins and presents Score, Coefficient, WOE, Population % and Event Rate values — in a format that non-technical teams can also use with confidence.',
      'The card can be shared with Export Card or Send Score Card Email, making it easier to apply risk policies and decision thresholds consistently across the organization.',
    ],
    steps: [
      'Sign in to Convex; the Statistics Overview dashboard opens.',
      'Search for the experiment by name in Model Governance.',
      'Select Score Card and continue with Automatic Generation.',
      'The card is created with Target Score, Target Odds and PDO values.',
      'The card presents Score, Coefficient, WOE, Population % and Event Rate.',
      'The card is shared with Export Card and Send Score Card Email.',
    ],
  },
  application: {
    title: 'Creating an application',
    module: 'Application',
    thumbnailLabel: 'Application',
    description:
      'An application is the production endpoint where an approved model connects to real business processes.',
    body: [
      "The Applications screen in Model Governance lists every production endpoint (application) defined in the organization. With 'Create New Application', you define a new application along with the project it belongs to and a short description.",
      'Application names follow clear rules (at most 20 characters, letters and digits only, and the first character cannot be a digit) — keeping naming consistent in the production environment.',
      'Once the application is created, linking models to it continues on the Deployment screen; this separation matters for organizations that keep model development and deployment responsibilities apart.',
    ],
    steps: [
      'Sign in to Convex; the Statistics Overview dashboard opens.',
      'The Model Governance > Applications screen lists every defined application.',
      'Enter the application name; at most 20 characters, letters and digits only.',
      'Select the project it belongs to and enter a short description.',
      "Click 'Create' to create the application and add it to the list.",
    ],
  },
  'mg-deney-arama': {
    title: 'Model Governance – Experiment Search and Model Reports',
    module: 'Model Governance',
    thumbnailLabel: 'Experiment Search',
    description: 'The search and reporting tools in Model Governance keep past work accountable.',
    body: [
      'Finding the right experiment among the many that accumulate in an organization is the first step of the model governance process. The search box on the Model Governance screen filters instantly by experiment name.',
      'Once the experiment is found, you can use Generate Model Report in the Actions menu to produce a formal model report for it, or Send Model Report Email to send it directly to the relevant people.',
      'This flow keeps experiment history accessible and reportable at all times, so you can respond quickly to audit and risk committee requests.',
    ],
    steps: [
      'Sign in to Convex; the Statistics Overview dashboard opens.',
      'The search box on the Model Governance screen filters instantly by experiment name.',
      'Find the experiment and select Generate Model Report from the Actions menu on its row.',
      'In the dialog that opens, produce the formal report with Generate Model Report or send it to the relevant people with Send Model Report Email.',
    ],
  },
  'mg-interpret': {
    title:
      'Model Governance – Interpret: Summary Plot, Correlation Graph, Reason Plot, Summary Table',
    module: 'Model Governance',
    thumbnailLabel: 'Interpret',
    description:
      'The Interpret screen makes it possible to demonstrate why a model made a decision.',
    body: [
      'When you choose Show Interpret for an experiment in Model Governance, the Interpret screen opens and visualizes how the model makes its decisions.',
      'The Summary Plot shows the overall impact of each variable in magnitude and direction, the Correlation Graph shows the relationships between variables, and the Reason Plot reveals the reasoning behind a single prediction.',
      'The Summary Table summarizes these findings numerically — together, these four views form the technical backbone of the model documentation submitted to regulators or internal audit.',
    ],
    steps: [
      'Sign in to Convex; the Statistics Overview dashboard opens.',
      'Find the experiment in Model Governance and click the Interpret icon on its row.',
      'The Interpret report is prepared in the background; a notification appears when it is ready and the results load.',
      "The Summary Plot shows the impact of each variable on the model's predictions in magnitude and direction.",
      'On the Correlation Graph tab, select a variable to examine its relationship with the other variables.',
      'On the Reason Plot tab, enter an observation number and click Apply to see the reasoning behind that prediction.',
    ],
  },
  'mg-test-sonuclari': {
    title: 'Model Governance – Downloading Test Results',
    module: 'Model Governance',
    thumbnailLabel: 'Test Results',
    description:
      'Sharing test results across the organization allows the model to be validated independently.',
    body: [
      'Demonstrating how a model performed before deployment requires a concrete output that can be shared with the risk committee and audit teams.',
      'After finding the experiment by name on the Model Governance screen, you can access the option to download its test results from the Actions menu.',
      "The downloaded output can be stored in the internal archive as part of the model's formal approval and audit file.",
    ],
    steps: [
      'Sign in to Convex; the Statistics Overview dashboard opens.',
      'Search for the experiment by name on the Model Governance screen.',
      'Access the option to download test results from the Actions menu.',
    ],
  },
  'mg-model-indirme': {
    title: 'Model Governance – Downloading the Model Object',
    module: 'Model Governance',
    thumbnailLabel: 'Model Download',
    description:
      'Exporting the trained model object enables compatibility with environments outside Convex, as well as archiving.',
    body: [
      'Some organizations also want to run the trained model in test environments or on-premise systems. Once you find the experiment on the Model Governance screen, you can download the model object from the Actions menu.',
      'This lets the model run independently outside Convex, or be stored in line with long-term archiving policies.',
      "Model development therefore keeps its tie to the platform without being constrained by the organization's infrastructure choices.",
    ],
    steps: [
      'Sign in to Convex; the Statistics Overview dashboard opens.',
      'Search for the experiment by name on the Model Governance screen.',
      'Access the option to download the model object from the Actions menu.',
    ],
  },
  'mg-audit-log': {
    title: 'Model Governance – Creating and Validating a Model Audit Log',
    module: 'Model Governance',
    thumbnailLabel: 'Audit Log',
    description: "The audit log records a model's review process, meeting regulatory requirements.",
    body: [
      'In regulated organizations, every model decision needs an audit trail. The Model Audit Log dialog opened for an experiment in Model Governance lets you set one of the Pass, Fail, Reviewing or Cancelled statuses.',
      'A file supporting the review (for example, an assessment report) is uploaded and attached to the record, permanently documenting the rationale behind the decision.',
      'At the bottom of the dialog, all previous audit records for that experiment are listed with their date and user — directly meeting the traceability requirements expected by frameworks such as BRSA and Basel.',
    ],
    steps: [
      'Sign in to Convex; the Statistics Overview dashboard opens.',
      'Find the experiment using the search box on the Model Governance screen.',
      'Open Model Audit Log from the Actions menu; select Fail and attach a supporting file.',
      'The uploaded file is listed alongside previous audit records, with date and user information.',
    ],
  },
  'mg-model-build': {
    title: 'Model Governance – Model Build',
    module: 'Model Governance',
    thumbnailLabel: 'Model Build',
    description:
      'The build process turns an approved experiment into a model ready for deployment.',
    body: [
      'Once a model has passed the approval process, it must be built before it can be deployed. Find the experiment in Model Governance and start the model build from the Actions menu.',
      'The build process packages the model with all of its required dependencies, preparing a package that runs consistently across environments.',
      'When the build is complete, the model is ready to be linked to an application from the Deployment screen — bridging the governance and deployment steps.',
    ],
    steps: [
      'Sign in to Convex; the Statistics Overview dashboard opens.',
      'Find the experiment in Model Governance; an empty Deployment Status shows that the model has not been built yet.',
    ],
  },
  'mg-prediction': {
    title: 'Model Governance – Prediction with a New Dataset',
    module: 'Model Governance',
    thumbnailLabel: 'Prediction',
    description:
      'The Predictions screen runs a live model on new data, automating recurring scoring processes.',
    body: [
      "A model's real value shows when it can be run regularly on up-to-date data. The Make New Prediction flow on the Predictions screen lets you run the model on new data by selecting a dataset and its version.",
      'The Validation Test toggle marks the prediction as a validation run, while the Distributed experiment option runs the job in distributed mode to shorten processing time on large data volumes.',
      'The prediction is tracked in the Predictions list by its status (In Progress → Success), and the results can be downloaded once it completes — turning periodic scoring processes such as monthly portfolio reviews into a standard operation.',
    ],
    steps: [
      'Sign in to Convex; the Statistics Overview dashboard opens.',
      'Search for the experiment by name on the Model Governance screen and find it.',
      "'Make New Prediction' opens the Predict With Dataset dialog; select the dataset and its version.",
      "Enable Validation Test and click 'Continue' to start the prediction.",
      "The new prediction is tracked in the list with the 'In Progress' status; when it completes, the results become available for download.",
    ],
  },
  'custom-model': {
    title: 'Custom Model: creating, retraining and retesting',
    module: 'Custom Model',
    thumbnailLabel: 'Custom Model',
    description:
      "Custom Models brings your organization's existing model investments under Convex's governance and monitoring capabilities.",
    body: [
      'Every organization has models that were developed in other environments and are already in use. The New Model flow on the Custom Models screen brings these models into the platform together with their dataset.',
      "While the imported model is being processed, it appears in the list with the 'In Progress' status; once complete, it shows up on the Experiments screen as an experiment record with performance metrics such as Train Score and Test Score.",
      "When the model is retrained and retested on up-to-date data, a new version is created and the results can be compared — so the organization can benefit from Convex's audit and monitoring capabilities without rebuilding its existing model infrastructure from scratch.",
    ],
    steps: [
      'Go to the Custom Models screen.',
      "Upload the model file with 'New Model'; select the project, dataset, version and target column.",
      "The imported model appears in the list with the 'In Progress' status; once processing completes, the status changes to 'Ready'.",
      "To retrain the model, open 'Retrain Model'; enter the dataset and Cross Validation settings and start the job.",
      "Train Score and Test Score values appear in the retrained experiment's record; the steps can be followed in the log.",
      'When the model is updated again, another new version is created; the results of all versions can be compared in the list.',
      "Use 'Model Logs' to review the training steps and 'Display Model Results' to review performance metrics such as MAE, RMSE, R² and MAPE.",
    ],
  },
  deployment: {
    title: 'Deploying a model and creating an application',
    module: 'Deployment',
    description:
      'Deployment is the final step, where an approved model is connected to real business processes and starts delivering value.',
    body: [
      'Once a model has been approved through the Model Governance process, it is selected on the Deployment screen and deployed.',
      "It is then linked to an application, making it ready to integrate with the organization's existing systems via API for real-time or batch scoring.",
    ],
  },
}

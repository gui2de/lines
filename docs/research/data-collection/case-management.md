# Case management

Case management is how you track *who* still needs to be surveyed and *who* is responsible for
reaching them. Instead of enumerators working from a paper list, SurveyCTO holds a live dataset of
respondents on the server, assigns each one to an enumerator, and updates its status as calls are
attempted. It is what makes phone surveys — where a respondent may take a dozen attempts to reach —
manageable.

Training material specific to case management at gui2de:

- [SurveyCTO phone survey management](https://drive.google.com/drive/folders/1YjxuI1qK4gtJ3o29MoyrSudYvV31CnXw) — slides and a recorded session
- More in the [Surveys & SurveyCTO folder](https://drive.google.com/drive/folders/1yKRPgHhm54gG1QrhMEFodP-trJkY9GfF) of the students Shared Drive

## Case dataset

The case database (or dataset) is the list of respondents you are reaching with the phone survey.

### Initialization

One challenge with case management is that only one database can be created per team. This means
that every project may need a new team, or that different research managers on each project need to
coordinate to manage the same case database for their different projects.

### Specifications

The dataset must:

- be a csv
- include the following string variables
    - a unique identifier for observations called `id`
    - a name for observations called `label`
    - a variable called `formids` which takes the value of the ID in SurveyCTO of the form we want to collect data with; can have multiple forms comma separated
    - a variable called `users` which includes the SurveyCTO username of enumerators assigned the case/observation
        - while in the testing phase, it should include everyone involved in coding, testing and training (comma separated)
    - two empty variables called `roles` and `sortby` — default variables for case datasets that we do not use in this workflow
    - as many phone number variables as you have numbers, named `pn_1`, `pn_2`, `pn_3` and so on (store phone numbers as strings, to keep leading zeros)

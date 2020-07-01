
The Case database (or dataset) is the list of respondents you are reaching with the phone survey.

# Initialization
One challenge with the Case management is that only one database can be created per server. This means that every project may need a new server, or that different research manager on each project need to coordinate to manage the same Case database for their different projects.

# Specifications
- be a csv
- include the following string variables
    - a unique identifier for observations called `id`
    - a name for observations called `label`
    - a variable called `formids` which takes the value of the ID in surveycto of the form we want to collect data with; can have multiple forms comma separated
    - a variable called `users` which includes the surveycto username of enumerators assigned the case/observation
        - while we're in testing phase, it should include everyone involved in coding/testing/training (comma separated)
        - the process of assigning cases (respondents) to users (enumerators) is detailed in the [workplan](workplan-remote.md) instructions
    - two empty variables called `roles` and `sortby` (they are default variable for case datasets but we're not really using them in this workflow)
    - as many phone number variables as phone number available, called something like `pn_1` `pn_2` `pn_3` (phone numbers should be stored as string too to include the leading zeros)

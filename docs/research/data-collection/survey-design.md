# Survey design

Good survey design makes everything downstream easier — cleaner data, shorter interviews, less
work at cleaning. A few principles apply to every instrument:

- **Add a cover sheet with standard codes** for missing, don't know and refused. Choose codes that cannot overlap with a real answer — `-999` and `-888` rather than `0` or `99`.
- **Use explicit variable names.** A name should say what the variable holds and where it came from, so it is traceable back to the questionnaire.
- **Encrypt the survey with a public key** before collection starts — see [encryption](../data-management/encryption.md). A form's encryption status cannot be changed after publishing.

## Remote survey writing

Phone surveys need a shorter, simpler instrument than in-person ones.

- Keep the survey **short** — no more than 30 minutes, ideally closer to 15. On average that means no more than 200 questions, though it depends on question type and skip patterns.
    - One way to shorten it is to have some modules or questions **randomly alternate between respondents**, so not everyone is asked everything.
    - Another is to avoid free text responses, which take time. Replace "Other (specify)" with just "Other", without a follow-up.
- Replace multiple choice questions with **tables of single-choice yes/no questions**, going through each option in turn, so every option is clearly read out.

## Coding the form

!!! danger "Change the form ID before reusing an old survey"

    When building a new survey from an old Excel file, change the form ID and name in the **settings**
    tab first. Otherwise uploading it overwrites the old form — even if you click "Upload a new form".

- **Variable names** must start with a letter and contain only letters, numbers and underscores. Other characters break on import into Stata.
- **Do not end a variable name with a number**, especially inside a repeat group — the wide format appends numbers to repeated variables and the result is unreadable.
- **Image fields**: put `new` in the appearance column to force enumerators to take a fresh photo rather than upload an existing one.
- **Cascading drop-downs**: use `choice_filter` in the survey tab to name the variable the filter depends on, and `filter` in the choices tab to define it.

!!! warning "Avoid repeat groups"

    Do not use repeat groups unless genuinely necessary, and never nest them — seek advice first.
    They export as separate files that must be merged before analysis, which complicates everything
    downstream including [high frequency checks](hfc.md). If the number of repeats is known and
    small, handle it without a repeat group.

## Time variables

| Variable | Clock | What it captures |
| --- | --- | --- |
| `starttime` | Tablet | When the enumerator answered the first question |
| `endtime` | Tablet | When they answered the last question |
| `submissiontime` | Server (GMT) | When the server received the survey — depends on connectivity |
| `duration` | Calculated | Seconds actually spent filling the survey, excluding long pauses |

`duration` is the useful one for monitoring: if an enumerator stops for a day and resumes,
`endtime - starttime` includes the gap but `duration` does not.

All date and time variables are stored on the server in **server time (GMT)**, whatever the
collection timezone. Downloading through SurveyCTO Sync converts them to the timezone of the
computer doing the download; downloading from the server keeps server time.

## Editing a survey after collection has started

!!! danger "Exports follow the most recent survey design"

    Data already collected is never deleted — but if you modify, move or delete questions, that data
    may no longer export, because SurveyCTO cannot find a place for it in the new design.

- **To retire a question**, do not delete it. Put `0` in the relevance column: it stays in the survey and in your exports, but never appears to enumerators.
- **Renaming a variable** is equivalent to deleting the old one and adding a new one, because the name is what identifies the question. Set the old one to relevance `0` and add the renamed one.
- **Groups** identify variables as much as names do — think of a group as a path in front of the variable name. Editing groups mid-collection is not recommended. If you must, treat it as a major redesign: back up the existing data first, and consider deploying a separate survey.
- Either way the two datasets must be merged afterwards, and duplicates resolved. The `key` does not change between survey versions, so entries stay identifiable.

The "ignore groups so fields with same name export together" export option can recover some data
after reckless changes, but do not rely on it.

## Exporting with SurveyCTO Sync

Download SurveyCTO Sync from [gui2de.surveycto.com](https://gui2de.surveycto.com/) once your
account exists.

!!! warning "Do not put the Sync Storage folder inside Box"

    SurveyCTO creates a `/SurveyCTO Sync Storage` folder that it populates automatically on every
    sync, including a backup of the synced data. Keep it somewhere local — the Desktop works — and
    never edit it by hand.

The defaults are fine. The options worth understanding:

- **Enclosing groups in exports** — choose *exclude groups, but still use them internally*, so group names stay out of variable names while groups still define the variables. Use *ignore groups* only if you moved groups around mid-collection.
- **Stata templates** are generated under Export options; use them to get labelled variables.
- **Replace line-breaks with a space** in the csv options, to avoid Stata and Excel mis-reading line breaks.
- **Export repeat groups in wide format** adds a wide csv alongside the default long file and its per-repeat subfiles. Downloading from the server directly gives you wide format anyway.
- Note fields can be excluded from exports, though the Stata templates already do that.

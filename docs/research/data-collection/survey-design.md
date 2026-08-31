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

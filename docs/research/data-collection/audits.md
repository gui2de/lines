# Audits

Auditing is the strongest check on data quality. Take a random subset of observations — usually
**10%** — and enter them a second time, either by sending different enumerators to re-administer
the survey, or by re-entering from a copy of the original record (a photograph, say). Then compare
the two datasets.

## Building the audit survey

Use SurveyCTO's automated backcheck functions to generate the audit instrument.

## Comparing the datasets

- Match entries on a **key** — a unique identifier.
- `cf` and `cfout` compare datasets overall and export a dataset of the differences.
- Use `merge` on the key, or `cfout` with the key as ID.
- For string variables, use `strdist` to measure string distance, so that case and punctuation differences are not counted as real ones.
- Separate genuine differences from missing values — an observation that could not be found for audit is not a mismatch.

## What to report

- Percent of entries **not** audited (not found, or unreadable record)
- **Strict differences, variable by variable** — for each: number and percent of entries audited, and among those, the count and percent that differ
- **Fuzzy differences** for string variables, with the distribution of string distances
- A breakdown of every difference by cause:

    - not audited
    - negligible (fuzzy difference)
    - ambiguous original data — impossible to tell which is correct
    - original enumerator mistake
    - auditor mistake

That last breakdown is the point of the exercise: it separates data you can trust from data you
cannot, and tells you which enumerators need attention.

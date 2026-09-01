# High frequency checks

HFCs generate dashboards while data collection is ongoing, to check that enumerators' work is
done properly and to catch problems in the data early. Not everything below is relevant to every
survey — each survey needs its own do-file producing the dashboards you will review daily.

Past examples, with the code behind them, are indexed in the
[HFC library](https://drive.google.com/drive/folders/1iEymHFV_G8_xlTTHq-m4ahLZGim6aal1)
(see the [index sheet](https://docs.google.com/spreadsheets/d/1fREnSzJwosL1imPvalkM7rabBXtC5dWN2lGgmpl4200/edit)).
Start from one of those rather than from scratch.

## What to check, and how often

| Check | Frequency |
| --- | --- |
| Enumerator daily activity — number and length of surveys | Daily |
| Surveys by completion status | Daily |
| Percent completion by unit of analysis | Daily |
| Duplicates on identifying variables | Daily |
| Inconsistency between ID variables and known characteristics | Daily |
| Very short and very long surveys | Daily |
| Outliers on integer questions | Daily |
| Skip pattern logic | First few days |
| Missing value codes (-999, -888) on key variables | Weekly |
| Inconsistent values (calculated vs self-reported) | Weekly |
| Distribution of key outcomes by enumerator | Weekly |

Run data quality checks **both overall and by enumerator** — the first tracks the data, the second
tracks the fieldworker. For a survey with a defined sample frame, also track percent completed
against the full sample.

Alongside the checks, report the research outputs that matter for your design — balance between
arms for a recruitment survey, compliance rates for a compliance survey, percent matching for an
[audit](audits-and-backchecks.md).

## Writing the do-file

- You should be able to **re-run it daily without editing it** — lean on locals and globals.
- You will repeat the same calculation across enumerators and variables — lean on loops.
- Export with `putexcel` (small surveys) or `export excel` (calculate everything first, then collapse/reshape and export).

!!! tip "Do not reformat Excel by hand every day"

    Export raw, unformatted files from Stata to the *same* filenames each run, and keep a separate
    formatted master workbook that links to them. Copy the master if you want to keep older versions.

Exporting the flagged observations themselves (duplicates, outliers) is usually worth it — the
field team needs them to reconcile, and you will want them again at cleaning.

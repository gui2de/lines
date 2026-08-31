# Workflow

The research workflow consists of using good computer hygiene for the purpose of reproducibility
and transparency.

## Data workflow

Data moves through three stages, and each project folder is structured to match:

`0_scripts` · `1_raw` · `2_clean` · `3_outputs`

- **Raw** data are inviolate. Never modify them, and **never open them in Excel**.
- **Clean** data have had all substantive changes applied. Multiple analyses build on this common dataset, so they reach consistent conclusions.
- **Outputs** are pruned to the variables and observations one analysis needs, and stored alongside that analysis — not in the general data folder.

No substantive change — in particular no change to any value — happens downstream of the clean
dataset. Only derived variables, merges and filters. Add sub folders under each as needed; for
historical projects the structure may differ.

### Rules

More details in the [gui2de folder protocol](https://docs.google.com/document/d/1dP73iDZsJAcwM0IjeliZnXFk6kR-SeRrsbmF8_t-MZs/edit).

- **One active version of each file.** To refer to a file from two places, use a link or a shortcut — never copy, duplicate or download it.
- **Never clone a GitHub repo into Drive or Box.** Clone it locally.
- **Access files online or sync them locally** — do not download or email them.
- **Data folders are only shared with IRB-approved team members.** RAs and interns must be [added to the IRB](ethics/irb-account.md) first.
- **Folders must be gui2de-created.** If your project has no folder, or you cannot access it, ask your Research Manager. Existing folders are listed in the [gui2de folders list](https://docs.google.com/spreadsheets/d/1iq0d_jkqFv95JkLRjGV37CiFThAKxGvDZ8n-GPU7bdY/edit).
- New projects go in Shared Drives; Box and personal Drive folders are being phased out for project management files.

## Coding for reproducibility

Someone else should be able to run your do-files, on their machine, a year from now, without asking
you anything.

Keep cleaning and analysis in **separate do-files**, and maintain a **master do-file** that calls
every cleaning file in order. Run the master from time to time, not just its parts, so dependencies
stay documented and working.

- **Comment a lot.** Aim for roughly 40% of lines carrying a comment.
- **Comments are for intent.** A comment should explain the intent or reason behind a coding line or block, not state in plain english what the code does.
- **Use macros, like locals and globals.** Parameters that are used multiple times should be defined as macros, to make code easy to follow and update.
- **Use temp files** rather than saving intermediate `.dta` files that clutter the project.
- **Break lines at around 80 characters**, using `///` to continue and indenting the next line.
- **Name variables traceably.** A hybrid of mnemonic and questionnaire reference works well — `s2name` is the `name` defined in section 2 of the questionnaire.
- **Indent** inside loops and if-statements.
- Mark unfinished work with a searchable `// TODO:` followed by your initials and what needs doing.

### Scripts structure

While these rules apply to all coding languages, the examples below are with Stata. Start your script with a header giving date, author, purpose, inputs and outputs, and a version log:

```stata
/*
2016.01.01. AZ
Do file to clean gui2de data

Takes as input /raw/gui2de1.csv, /raw/gui2de2.csv
Saves as /raw/gui2de.dta (compiled, but not cleaned),
and  /clean/gui2de.dta (cleaned dataset)

Versions
- 2016.02.01 JH: fixed problems in identifiers to create unique ID
*/
```

Then a preliminaries section — the **only** place machine-specific paths appear:

```stata
clear all
if "`c(username)'" == "Andrew" {
    global root "x:/box/thisproject"
}
else if "`c(username)'" == "TheRA" {
    global root "c:/users/the RA/my documents"
}
global raw "$root/data/raw"
global clean "$root/data/clean"
```

This is what makes do-files **interoperable**: paths are resolved once, from `c(username)`, so the
same file runs unmodified for everyone. Globals and if conditions at the top of the file keep the
rest of it machine-independent.

### Versioning

Procedures vary by PI and project, so check with yours. A common approach is an `/archive/` folder
beside the do-files, with archived versions named by date and author initials —
`data_cleaning_20160501_AZ.do`.

Some projects use [Git/Github](../onboarding/tools/git-github.md) for version control. 

## Further reading

- Gentzkow & Shapiro, [Code and Data for the Social Sciences: A Practitioner's Guide](https://web.stanford.edu/~gentzkow/research/CodeAndData.pdf)

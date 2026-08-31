# Style guide

Conventions for writing analysis code. The principle behind all of them: someone else should be
able to run your do-files, on their machine, a year from now, without asking you anything.

## Three stages of data

`raw` → `clean` → `analysis`

- **Raw** data are inviolate. Never modify them, and **never open them in Excel**.
- **Clean** data have had all substantive changes applied. Multiple analyses build on this common dataset, so they reach consistent conclusions.
- **Analysis** datasets are pruned to the variables and observations one analysis needs, and stored alongside that analysis — not in the general data folder.

No substantive change — in particular no change to any value — happens downstream of the clean
dataset. Only derived variables, merges and filters.

Keep cleaning and analysis in **separate do-files**, and maintain a **master do-file** that calls
every cleaning file in order. Run the master from time to time, not just its parts, so dependencies
stay documented and working.

## Writing the code

- **Comment everything.** Aim for roughly 40% of lines carrying a comment explaining intent, not mechanics.
- **Prefer locals to globals.** Keep scope as narrow as possible — globals defined in another file and invoked accidentally are a common source of bugs.
- **Use temp files** rather than saving intermediate `.dta` files that clutter the project.
- **Break lines at around 80 characters**, using `///` to continue and indenting the next line.
- **Name variables traceably.** A hybrid of mnemonic and questionnaire reference works well — `s2name` is the `name` defined in section 2 of the questionnaire.
- **Indent** inside loops and if-statements.
- Mark unfinished work with a searchable `// TODO:` followed by your initials and what needs doing.

## Do-file structure

Start with a header giving date, author, purpose, inputs and outputs, and a version log:

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
same file runs unmodified for everyone.

## Versioning

Procedures vary by PI and project, so check with yours. A common approach is an `/archive/` folder
beside the do-files, with archived versions named by date and author initials —
`data_cleaning_20160501_AZ.do`.

## Further reading

- Gentzkow & Shapiro, [Code and Data for the Social Sciences: A Practitioner's Guide](http://www.brown.edu/Research/Shapiro/pdfs/CodeAndData.pdf)

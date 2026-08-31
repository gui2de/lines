# Storage

!!! warning Never download or email data.

    No data is ever downloaded to your personal machine outside of Box Sync or Box Drive
    Data is never shared over email. Data sharing folders are set up for each partner to drop data in it.
    

Details on folder structure and data storage are in the [gui2de folder protocol](https://docs.google.com/document/d/1dP73iDZsJAcwM0IjeliZnXFk6kR-SeRrsbmF8_t-MZs/edit). The essentials:

## Which platform holds what

- **Google Shared Drive** — programmatic and grant management files. One Shared Drive per project.
- **Box** — data, including PII. Folders are named `PROJECT NAME_Data`.
- **GitHub** — code. One private repo per project, plus a [sandbox repo](https://github.com/gui2de/sandbox) to practise in.

A project may have a second, GU-only Shared Drive for internal notes and budgets not shared with
partners or RAs.

## Rules

- **One active version of each file.** To refer to a file from two places, use a link or a shortcut — never copy, duplicate or download it.
- **Never clone a GitHub repo into Drive or Box.** Clone it locally.
- **Access files online or sync them locally** — do not download or email them.
- **Data folders are only shared with IRB-approved team members.** RAs and interns must be [added to the IRB](../../research/ethics/irb-account.md) first.
- **Folders must be gui2de-created.** If your project has no folder, or you cannot access it, ask your Research Manager. Existing folders are listed [here](https://docs.google.com/spreadsheets/d/1iq0d_jkqFv95JkLRjGV37CiFThAKxGvDZ8n-GPU7bdY/edit).
- New projects go in Shared Drives; Box and personal Drive folders are being phased out for project management files.

## Data folder structure

Add sub folders under each as needed:

`0_scripts` · `1_raw` · `2_clean` · `3_outputs`

- Admin data is stored on Box using the same structure
- For historical projects, the structure may differ
- Filepaths in do-files or scripts are written relative to the repo, so they run on any team member's machine. Globals and/or if conditions at the top of the file can be used to make sure they are fully *inter-operable*.

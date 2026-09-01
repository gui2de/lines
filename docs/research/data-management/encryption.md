# Encryption and key management

Encrypting data end-to-end in SurveyCTO keeps us compliant with the IRB: only people listed on the IRB
should be able to read the data, and is best practice for safe data handling.

## How it works

Encryption uses a **public/private key pair**, each key a short text file with a `.pem` extension:

- a **public key**, held on the SurveyCTO server, which encrypts the data (think of it as a lock)
- a **private key**, held only on the machines that will decrypt it (think of it as a key that opens the lock)

## Key management

- **Key pairs are created by Research Managers.** If you are joining a team and designing a new form, ask your Research Manager about the existing key(s) on the team. The Research Manager is in charge of creating the pair, keeping a safe, backed-up copy in the relevant gui2de-Departmental Box folder, and share it only with the people who need it.
- **One key pair per project or team.** A team with several forms and the same people on all of them can share a key pair, to avoid having too many keys to manage.
- Give keys **simple, explicit names**, so it is always clear which form uses which key.
- All key pairs are **backed up in a dedicated gui2de Box departmental folder**, ensuring against local machine failure and staff departures.
- People given access to the private key should not download, copy, or email it. They should only **access it by locally syncing the keys Box folder on their machine, using Box Drive**. If necessary, they can make the folder available offline via Box Drive.

!!! danger "Lose the private key and the data is gone"

    Nothing else can decrypt it, which is why the keys are backed up on a gui2de Box folder.

## Encrypting a SurveyCTO form

SurveyCTO encrypts data at the point of collection using your own 2048-bit keys, so the data is
not readable by SurveyCTO's own servers.

### Create the key pair

- **Online** — Design tab → *Tools* under "Your forms and datasets" → *Create new key*. Name the pair, then download the public and private keys. The pair is generated locally inside your browser, so the private key is never sent to the server.
- **Offline** — in SurveyCTO Sync, *Tools* → *Create a public/private key pair*.

### Encrypt the form

!!! warning "A form's encryption status cannot be changed after publishing"

    Not in either direction. To encrypt an existing form you must upload a new one.

- In the **form designer**: under *Advanced Options*, tick "Do you want this form's data to be encrypted?" and upload the **public** key.
- In the **spreadsheet form definition**: open the public key in a text editor and copy its *text* — not the filename — into the `public_key` column of the Settings tab, including the header and footer lines:

```
-----BEGIN PUBLIC KEY-----
PUBLIC KEY IS OVER HERE
-----END PUBLIC KEY-----
```

A single typo in the key text means the private key will not decrypt the data.

!!! danger "Always test before collection starts"

    Submit a mock entry, then download and decrypt it with the private key. Without this test you
    risk collecting data you cannot read — and the form's encryption status cannot be changed later.

### Access the data

- **Online console** (Export tab) — you are prompted to upload the private key, which is used locally only.
- **SurveyCTO Sync** — give the filepath of the private key just below the filepath of your CSV export folder.

### Publishable fields

Mark a field `yes` in the `publishable` column to have it appear decrypted on the server. This is
required for any field you want to pull to an online server, and lets those fields be downloaded
from the console without the private key. This matters a lot for **dynamic workflows**, for example case management, 
audits/backchecks, or other "pulldata" and "publish into" combination that requires a server dataset to be 
updated automatically with form submissions: any such field must be made "publishable", or the server dataset
will not be updated (as encrypted data cannot be read by the SurveyCTO server).


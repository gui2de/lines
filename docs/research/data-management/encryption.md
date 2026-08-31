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

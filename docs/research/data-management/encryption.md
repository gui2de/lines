# Encryption and key management

Encrypting data in SurveyCTO keeps us compliant with the IRB — only people listed on the IRB
should be able to read the data — and honours the non-disclosure terms partners share identifiable
data under.

## How it works

Encryption uses a **key pair**, each key a short text file with a `.pem` extension:

- a **public key**, held on the server, which encrypts the data
- a **private key**, held only on the machines that will decrypt it

## Handling the private key

!!! danger "Lose the private key and the data is gone"

    Nothing else can decrypt it. Back the key up — locally on the machine used to download data,
    and in a second secure location accessible only to IRB-approved users.

- **Never** share or upload the private key without a secure connection. Share it offline, or through a departmental Box folder.
- Give it to as few people as possible — ideally **one person**, who downloads the data and makes the decrypted version available to the team on Box. That avoids copies of the key proliferating.
- If several people must download from SurveyCTO directly, identify them explicitly and keep the number small.

## Key management

- **One key pair per IRB submission.** A team with several submissions and the same people on all of them can share one pair.
- Give keys **simple, explicit names**, so it is always clear which form uses which key.
- The **project coordinator** generates the pair, keeps a safe copy, and shares the private key only with the people who need it.
- The **data manager** keeps a backup of every pair, against local machine failure and staff departures.

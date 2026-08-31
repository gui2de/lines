# Equipment

Tablet setup for SurveyCTO data collection. Work through this before training, and check every
tablet against the list.

## Initialization

- Insert a SIM card
- Start the tablet and log in with the gui2de tablet Google account
- Turn off wifi and verify data connectivity
- Install **SurveyCTO Collect** — install from the Play Store, then follow the prompt to update to the full version from `gui2de.surveycto.com/collect`
- Install **Applock**

## Settings to check on every tablet

- **Camera resolution** — set the *lowest* usable resolution. Server space is limited. 640x480 is fine for photographing people or plates; reading text needs more, but not the maximum.
- **Clock** — must show correct local time. SurveyCTO uses the tablet clock for survey start and end times, and the server clock for submission time; if they disagree your monitoring data is incoherent.
- **Autofill** — disable predictive text in the keyboard settings.
- **Extra apps** — a barcode field requires the ZXing Barcode Scanner.
- **Applock** — block everything except what enumerators need: mobile data, wifi, system UI, SurveyCTO Collect, and camera or GPS if the survey uses them.

## Enumerator accounts

Set up a **collection-only** SurveyCTO account per enumerator during training. Each enumerator must
log in with their own username — it is how their work is monitored.

!!! warning "A username stays logged in indefinitely"

    It can also be logged in on several tablets at once. Make sure enumerators log out any previous
    user. Changing their password forces a logout and a fresh login.

## Before handing tablets out

Check each one: fully charged · latest SurveyCTO Collect · latest form version · camera resolution ·
local clock · autofill disabled · locked.

# lines
gui2delines for gui2de

# Principles of Data Management

- Program files go into Drive and data files go into Box
- No data is ever downloaded to your personal machine outside of Box Sync or Box Drive
- Filepaths in dofiles are generated relatively to be run from machines of different team members
- Surveycto forms are encrypted end-to-end using a public/private key pair stored in gui2de Box and shared only with team members who need to download the data
- The base data folder structure is as follows. You can add specific sub folders under each of these base folders as needed:
  - `0_scripts`
  - `1_raw`
  - `2_clean`
  - `3_outputs`
- Admin data is stored on Box using the same folder structure
- Data is never shared over email. Data sharing folders are set up for each partner to drop data in it.
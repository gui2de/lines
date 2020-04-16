# Server setup

The _gui<sup>2</sup>de_ remote server is a computer you can log into to do work and store files without having to install or store them on your own laptop.

### Server set up steps

1. **Connect to the internet**   
    - If you're on campus, you have to be connected to **SaxaNet**. No other network will work.  
    - If you are not on campus, any private wifi should work.  
      
1. **Connect to the Georgetown VPN**  
    1. Use the CISCO Client
        - Instructions on how to download and set up the CISCO client for the first time are [here](https://uis.georgetown.edu/security/vpn/)
    1. Type in `guvpn.georgetown.edu` or select `Georgetown VPN` to connect
    1. In the login box, select
        1. Group: `Duo-two-factor`
        1. Username: `your netid`
        1. Password: `your Georgetown password`
        1. Second password: either type `push` to open a push notification on your Duo app, or type a 6-digit fixed `passcode` from the Duo app

1. **Connect to the gui2de server**
    1. Open the Windows Remote Desktop app
        - If you are on Windows, it is installed on your computer by default and yuo can look for it by typing "Remote Desktop" in the Start Menu
        - If you are on Mac, you need to download it on the [appstore](https://apps.apple.com/us/app/microsoft-remote-desktop/id714464092) and set up the gui2de server as a remote PC with the credentials below
    1. Type in or select the Georgetown address: **`172.17.16.195`**
    1. Type in or select your username: **`GEORGETOWN\netid`**
    1. Type in your netid password
    1. Accept the certificate if you are prompted to

### Navigating the server

1. Open file navigator  
1. Navigate to E:/ and your netid  
    This is your personal folder where your personal files can sit. If you are working on projects that have github repos, you should clone the repos in your personal folder file and work from that local copy on the server. It means project folders will be duplicated multiple times on the server, which is fine for space management as long as no heavy data is stored on github (which it shouldn't, anyway).

### Clone your project's repos  

You can then clone your project repo using either Git Bash, Git Desktop or Git Kraken according to your preference, all three of which are installed on the server. You can find the applications on the server from the Start page (mouse hover on the bottom left corner of the screen as if to exit it) or by opening the file explorer and navigating to C:/Program Files.

Below are more detailed instructions for cloning a repo using GitBash.

1. Go to the Start page to open GitBash  
    If you can't find the Start page, open the file explorer and navigate to C:/Program Files/Git where you can find the GitBash application and open it. (GitBash.exe)
1. Use the following commands
    > cd "your E:/ user folder address in quotes"  
    > git clone "the git repo url in quotes"

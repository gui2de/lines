# Server setup

The gui2de remote server is a computer you can log into to do work and store files without having to install or store them on your own laptop.

### Server set up steps

1. **Connect to the internet**   
    - If you're on campus, you have to be connected to SaxaNet. No other network will work.  
    - If you are not on campus, any private wifi should work.  
    - Allow the certificate to be authroized if you are prompted.  
      
2. **Connect to the Georgetown VPN**  
    1. Use the CISCO Client
    2. Select Georgetown VPN to connect
    4. Select the Georgetown address: 172.17.16.195
    3. In the login box, select
        1. Group: Duo-two-factor
        2. Username: netid
        3. Password: your Georgetown password
        4. Second password: either type "push" to open a push notification on your Duo app, or type a fixed passcode from Duo

### Navigating the server

1. Open file navigator  
2. Navigate to E:/ and your netid  
    This is your personal folder where your personal files can sit. If you are working on projects that have github repos, you should clone the repos in your personal folder file and work from that local copy on the server. It means project folders will be duplicated multiple times on the server, which is fine for space management as long as no heavy data is stored on github (which it shouldn't, anyway).

### Clone your project's repos  

Below are instructions to clone projet repos using Git Bash.

1. Go to the Start page to open GitBash  
2. Use the following commands
    > cd "your E:/ user folder address in quotes"  
    > git clone "the git repo url in quotes"

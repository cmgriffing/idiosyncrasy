# Idiosyncrasy

Idiosyncrasy is a community project inspired by a project by [TheAltF4Stream on Twitch.tv](https://www.twitch.tv/thealtf4stream).

### Goals of the Project

- **Have Fun!!!!**
- Create a community based project with a goal
- Allow members of the twitch programming community to become familiar with Github workflow
- Help users get involved in Open Source web development

### Do Not Review On Stream

If you are feeling self conscious and would prefer not to have your PR reviewed directly on stream, make sure that you have the first sentence of the PR message read:

**DO NOT REVIEW ON STREAM**

## WARNING: Public Information

Be warned that interacting with Github and Twitch together can reveal who you are more than you intended. If you wish to maintain anonymity, it might be worth it to create a "clean" account on either service.

### Community Project Warning

This project is meant to be a learning process for various members of the Twitch programming community. By contributing to this project you adhere to the LICENSE below and your contributions are open source as well.

## Use Yarn

This project uses Yarn. The reason is that the Gatsby core project does as well and it is usually easiest to stick with the tools that your tools use.

## Formatted Commit Messages

We use [Commitizen](http://commitizen.github.io/cz-cli/) to format commit messages. This allows us to automatically increment the semver version and generate a changelog.

_Make sure you `yarn` to install the dependencies before commiting._

Your PR will be declined if it does not match the commit formatting provided.

![](./readme-assets/commitizen.png)

---
## Windows Dev - Setup Guide (WSL)
Currently, Gatsby recommends using windows-build-tools with NPM from Visual Studio, however an alternative less pain-staking way would be to use Windows Subsystem for Linux (WSL).

If you wish to not use WSL, please read => [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/) for more info.

To Begin, you need to toggle WSL from Powershell (Must be running as admin) which can be found here => [How to turn on and install WSL on Windows](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

Next, you will need to grab a flavour of WSL you may like, we recommend Ubuntu for stability => [Get Ubuntu WSL](https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6?activetab=pivot:overviewtab)

Once this is installed, type in your search bar for ubuntu and load up the Ubuntu WSL CLI

Great! You're already halfway there! 

Just to note, to access your WSL Ubuntu folders from Windows File Manager, they will be under this directory in your LocalAppData

`%LOCALAPPDATA%\Packages\CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc\LocalState\rootfs` 

### Installing the Tools for WSL
#### GIT
Git will already be pre-installed with WSL however, it will need updating to the latest version of git which can be done 

`sudo add-apt-repository ppa:git-core/ppa -y`
`sudo apt-get update`
`sudo apt-get install git -y`
`git --version`

if your system doesn't have add-adp-repository, you can install it using
sudo apt-get install python-software-properties software-properties-common

#### NODE

Instructions can be found here: [Node LTS v12.x Install](https://computingforgeeks.com/how-to-install-nodejs-on-ubuntu-debian-linux-mint/)

run node `--version` to see if it installed correctly

#### YARN

Instructions can be found here: [Yarn Ubuntu Debian Install](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

## You're ready to go!
Simply clone your git repo, cd into in and run `Yarn` to install any missing dependancies from node!
 
---

# The MIT License (MIT)

Copyright © 2020 Idiosyncrasy

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.


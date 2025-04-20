#German HCI 
<!-- TO DO -->
Welcome to German Human-computer interaction community website. This website contains the compilation of HCI labs, publications, posts by the germanHCI community. 
To make your updates kindly refer the wiki page for the the format and how to edit the content.
Here are some general git commands to follow to make your changes.

### 1. Set up git
Download and install Git from the [official website](https://git-scm.com/downloads). Follow the installation instructions for your operating system.

### 2. Configure Git
After installation, configure Git with your name and email. These details will be used in your commits.

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

### 3. Clone the repository
Run the following command to clone the repository 
```bash
git clone https://github.com/GermanHCI/website-ng.git
```
This cloned document can be accessed using VS code or other such softwares.

<!-- ### 4. Sync your remote to git -->

### 4. Make your changes
Pull the exisiting code.
```bash
git pull origin main 
```
Create your own branch to make your changes

```bash
git checkout -b new-branch
```

Checkout the new branch you have created

```bash 
git checkout branch-name
```

Now make your changes following the formats mentioned in the [Wiki page](https://github.com/GermanHCI/website-ng/wiki)

Run your code locally to check if your changes are visible.
For more information on jekyll refer [site](https://jekyllrb.com/docs/installation/)

```bash
jekyll build
jekyll serve
```

```bash
git add .
git commit -m "your-message"
git push
```

your commit message should be simple text that represntes the chnages you have made.
For example: if you are adding a new lab details. your commit message could be "uni-name lab-name added".

## Final steps
Once you have pushed all your code to your branch, create a pull request on github site.
The adminstrators will verfiy the changes and merge your changes to the main site. 

# Readme

This repository contains a simple express.js web server.

You may use this repository to run through some simple javascript / express / git tasks to become more familiar with git and prepare for the upcoming tasks in your backlog for the scouting application. In particular, you will need to use your knowledge of REST API endpoints with express and basic git commands, including branches.


## Getting Started

Your first task will be to clone the repository locally. For this you will need to use 
```
git clone

Clone repo located at <repo> onto local machine. Original repo can be 
located on the local filesystem or on a remote machine via HTTP or SSH.
```

You will need to make sure you install the required node modules. 
```
npm install
```

At this point you should be able to run the web server and see static output.


## Exercise 1

You should each implement a separate api endpoints. The endpoint will be in the following form:
```
/api/<yourname>/
```

The web server should handle the GET request by returning a small JSON blob with at least 3 facts about you.  For example, my endpoint and result might look as follows:
```
/api/adam/

{
    "Name" : "Adam",
    "Has Children" : true,
    "Favorite Movie" : "Wonder Boys",
    "Likes Cats" : false
}
```

### Constraints!!

You should each implement your API in a local git branch named 'topic-<yourname>'. When you start development, create the branch and make sure you can push the branch to github and see it show up in the repository.

When you have completed development, create a pull request and assign your teammates and me (adamsteinert) as reviewers. Mention your PR in the #website channel so people are aware you have created a PR for review.

You will need to use and may want to explore some of the git commands (or their ) below during this process


Get a repository from a remote location
```
git clone <repo>

Clone repo located at <repo> onto local machine. Original repo can be 
located on the local filesystem or on a remote machine via HTTP or SSH.

use HTTP authentication
```

Check the state of the repository
```
git status

List which files are staged, unstaged, and untracked
```

Create a new branch
```
git checkout -b <branch>

Create and check out a new branch named <branch>.
Drop the -b flag to checkout an existing branch.
``

Stage files
```
git add <directory|file>

Stage all changes in <directory> for the next commit. 
Replace <directory> with a <file> to change a specific file.
```

Create and check out a new branch named <branch>.
Drop the -b flag to checkout an existing branch.
```
git commit -m "message"

Commit staged files to your local branch
```

## Git CLI Repository Commands

| Command                                       | Action                                       |
| --------------------------------------------- | -------------------------------------------- |
| `git clone /path/to/repository`               | Create a working copy of a local repository  |
| `git clone username@host:/path/to/repository` | Create a working copy of a remote repository |
| `git add <filename>`                          | Add a file                                   |
| `git commit -m "Commit message"`              | Create a new commit                          |
| `git push origin main`                        | Push changes to main                         |
| `git remote add origin <server>`              | Connect to a remote repository               |
| `git pull`                                    | Pull down code changes                       |
| `git diff`                                    | Get merge conflicts and changes              |
| `git diff --base <filename>`                  | Get merge conflicts and changes              |
| `git diff <sourcebranch> <targetbranch>`      | Get merge conflicts and changes              |

## Git CLI Branch Commands

| Command                        | Action                                             |
| ------------------------------ | -------------------------------------------------- |
| `git status`                   | List existing branches                             |
| `git checkout -b <branchname>` | Create a branch and switch to it                   |
| `git checkout <branchname>`    | Switch to an existing branch                       |
| `git branch -d <branchname>>`  | Delete the specified branch                        |
| `git push origin <branchname>` | Push changes to the specified branch               |
| `git push --all origin`        | Push changes to all branches                       |
| `git merge <branchname>`       | Merge the specified branch into the current branch |
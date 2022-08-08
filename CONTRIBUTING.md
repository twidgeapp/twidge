# Welcome to the Twidge contributing guide!

First of all, thank you for spending time to contribute to the project.

To get a good overview of the project make sure to read the [ReadMe](https://github.com/VarunPotti/twidge/blob/master/README.md).

# Prerequisites

Make sure to have these installed!

- Rustc v1.64.0 (make sure to use nightly(`rustup default nightly`))
- Node v18.7.0
- Cargo v1.64.0-nightly
- Git
- Pnpm v7.8.0
- Sccache v0.3.0 `cargo install sccache`
- TauriCli v1.0.5 `cargo install tauri-cli`

# Getting Started

## Issues

### Create a new issue

If you want a new feature to be supported by Twidge or you found a bug, first check if the [issue has been already created](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments), if not you can create a [new issue](https://github.com/VarunPotti/twidge/issues/new)

### Solve an issue

[Find an issue](https://github.com/VarunPotti/twidge/issues) which interests you. After you implement a fix you are more than welcome to open a [PR](https://github.com/VarunPotti/twidge/pulls) with a fix.

## Fix an issue or create a new feature

- First clone the repo using the command `git clone git@github.com:VarunPotti/twidge.git`
- Then run `pnpm` to install all the require packages
- Run `pnpm dev` to run twidge.
- Fix the issue or create a new feature

## Pull Request

- [Create a new pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) and ask the maintainers to take a look into the pull request.
- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
- If you run into any merge issues, checkout this [git tutorial](https://lab.github.com/githubtraining/managing-merge-conflicts) to help you resolve merge conflicts and other issues.

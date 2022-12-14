<p align="center">
    <img src="https://raw.githubusercontent.com/twidgeapp/twidge/main/assets/logo.svg" alt="logo" width="200px" />
</p>
<h1 align="center">Twidge</h1>
<h3 align="center">The radically new way to take notes and be your productive self in the 21st century.</h3>
<p align="center">
    <a href="https://discord.gg/JWrtFeUdVA">
        <img src="https://img.shields.io/discord/1003648104605683834?label=discord&style=for-the-badge" />
    </a>
    <img src="https://img.shields.io/github/repo-size/twidgeapp/twidge?style=for-the-badge" />
    <img src="https://img.shields.io/tokei/lines/github/twidgeapp/twidge?style=for-the-badge" />
    <img src="https://img.shields.io/github/last-commit/twidgeapp/twidge?style=for-the-badge" />
</p>

[Website](https://twidge.app/) • [Twitter](https://twitter.com/twidgeapp) • [Discord](https://discord.gg/JWrtFeUdVA)

## What is Twidge?

Twidge is a note-taking app that is designed to be as simple as possible. It is built with the idea that you should be able to take notes as quickly as possible and then get back to what you were doing. It is also built with the idea that you should be able to take notes while you are doing something else, while maintaining control over what is added to your notes.

## Features.

- **Simple and intuitive UI.** Twidge is designed to be as simple as possible. It is built with the idea that you should be able to take notes as quickly and easily as possible. It is also built with the shortcuts in mind, so you can use gestures to navigate through the app.
- **Built-in Markdown editor.** Twidge comes with a built-in Markdown editor that allows you to write notes in Markdown. It also comes with a built-in Markdown previewer that allows you to preview your notes before you save them.
- **Built-in Editor** Don't have experience with markdown? No problem! Twidge comes with a built-in rich-text editor that allows you to write notes in rich-text.
- **Local first** Twidge works entirely offline and stores all data locally. This means that you can take notes without an internet connection.
- **Workflows** Map a keybind globally to a workflow. Workflows are a way to automate tasks. For example, you can map a keybind to a workflow that will automatically whatever you have currently selected to a note.
- **Spaces** Spaces are a way to organize your notes. You can create as many spaces as you want and add notes to them. You can also add tags to your notes to make them easier to find.
- **Built in graph view** Twidge analyzes your back links so that you can create a mind-map of your notes. This allows you to see how your notes are connected to each other.
- **Incredibly quick** Twidge is built with performance in mind. It is built with rust, tauri and uses sqlite as its database. This means that it is incredibly fast and uses very little resources.
- **Cross platform** Twidge is available on Windows, Linux and Mac, with iOS and Android coming soon.
- **Open source** Twidge is open source and is available on GitHub. You can contribute to the project by opening a pull request or by opening an issue.
- **Free** Twidge is completely free and will always be free.
- **Incredibly customizable** Twidge is built with the idea that you should be able to customize it to your liking. You can customize the theme, the keybinds, the workflows and much more.
  
## Motivation

The idea of context switching has long been a poison to our "state of flow". It is incredibly hard to maintain a state of flow when you have to constantly switch between tasks. This is why we created Twidge. We wanted to create a note-taking app that would allow us to take notes while we are doing something more important with just a keybind (see workflows). We also wanted a way to have the most intuitive way to quickly navigate between contexts (work/school/personal) and a way to quickly navigate between notes. This is why we created spaces with gestures and graph view.

## Monorepo structure

- **apps/desktop** - The desktop app frontend (built with react, tailwind and tauri)
- **apps/src-tauri** - The rust tauri backend

- **packages/rust-core** - The rust core library
- **packages/config** - The config library which has all the monorepo specific config
- **packages/utils** - The utils which has all the utility functions (TS only)

## Tech stack

- We use [rust](https://rust-lang.org), [react](https://reactjs.org), [tauri](https://tauri.studio) and [tailwind](https://tailwindcss.com) to build the app.
- We are also grateful for the creators of [spacedrive](https://spacedrive.com) for creating `prisma-client-rust` and `rspc`

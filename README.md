<p align="center">
    <img width="200px" src="https://raw.githubusercontent.com/VarunPotti/twidge/master/assets/logo.svg">
    <p align="center">
        <img src="https://img.shields.io/badge/version-0.0.1--alpha-c6b5ff">
        <img src="https://img.shields.io/tokei/lines/github/VarunPotti/twidge?color=ffb5f5">
        <img src="https://img.shields.io/github/license/VarunPotti/twidge?color=75ff73">
        <img src="https://img.shields.io/github/languages/top/VarunPotti/twidge?color=b5f0ff">
        <img src="https://img.shields.io/github/languages/code-size/VarunPotti/twidge?color=%235e6cff&label=size">
        <a href="https://discord.gg/JWrtFeUdVA">
            <img src="https://img.shields.io/badge/discord-join-green" />
        </a>
    </p>
    <br />
    <h1>Twidge</h1>
    <p>A productivity app which is an extension to your mind</p>
</p>

Twidge is a cross platform productivity app, powered by [rust](https://rust-lang.org), [tauri](https://tauri.app), [prisma-client-rust](https://github.com/Brendonovich/prisma-client-rust)

Twidge works entirely offline, the various features provided by twidge are listed [below](#features)

# Motivation

Due to my ever-increasing school work, I seldom had time to code. One day, I tried to see why I was getting so little time, and that is when I realized that a lot of my time was spent deciding what I should do next. The answer was obvious I needed a calendar app, I tried almost all of the calendar apps and realized that I was spending more than 30 minutes filling in my calendar, it was also clear that I needed something more than a calendar, something wherein I can throw all the links when I browse the web so that I can look at them later on, therefore twidge was born.

# Features

Completed:

-   Configuration - The structure for the source code of Twidge, built entirely on react, tauri and rust. The structure was inspired by [spacedrive](https://spacedrive.com)

In progress:

-   Spaces - Spaces help you segregate tasks based on a specific tag (say work, personal, junk etc)
-   Infinite Scroll View: Twidge aims to offer an infinite scroll view where you can write everything down
-   Todo List: Map all your tasks in a single list, these tasks can be linked with calendars and embeds.
-   Calendar: You can map tasks to calendars so that you know what tasks have to be completed when.
-   Embeds: Embed Youtube vides, Google searches, Twitter posts, etc. So that you never loose that resource which you found 2 months earlier.
-   Global Keymaps: Ctrl+Shift+K and you have your powerful menu ⚡, create tasks, embeds, calendar events etc.
-   Notification Handler - So that you are reminded 5-15 minutes before a new task starts.

Post MVP:

-   Mobile app (IOS/Android)
-   Sync between devices.
-   Save all the tasks on the cloud
-   Collaboration of tasks between different people

# Architecture

We follow an architecture similar to that of [spacedrive](https://spacedrive.com).

-   [Prisma](https://github.com/Brendonovich/prisma-client-rust), [Rust](https://www.rust-lang.org/), [React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/), [Tauri](https://tauri.app/), [Stitches](https://stitches.dev/) and [Radix](https://radix-ui.com)
-   Tauri uses OS webviews, this helps remove the overhead of V8 (like in electron), and brings cpu and ram-usage to a minimum.
-   We can use prisma on the front-end thanks to [brendan](https://github.com/brendonovich) who is the creator of [prisma-client-rust](https://github.com/Brendonovich/prisma-client-rust)

# Monorepo

## Apps (/apps)

-   `src-tauri`: A rust tauri app.
-   `web`: The website which will be rendered by Tauri

## Packages (/packages)

-   `components` (TS): Components required by the `web` app
-   `config` (TS): Project wide config such as eslint, prettier, stitches etc.
-   `primitives` (TS): UI primivites
-   `utils` (TS): Utilities required by the web app
-   `core` (Rust): The core of twidge, built in Rust

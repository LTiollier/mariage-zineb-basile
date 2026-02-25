---
trigger: always_on
---

# code-style.md - Wedding Invitation Project (Zineb & Basile)

## Project Overview

This project is a modern, elegant wedding invitation website for **Zineb Lahjouji** and **Basile Piquard**.
The wedding will take place on **October 10, 2026**, at **Palais Tazi, Maroc**.

## Technical Stack

- **Framework**: Next.js (App Router preferred)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion / GSAP (for premium feel)
- **Environment**: Node.js / npm

## Core Instructions & Principles

- **Language**:
  - **Site Content**: French (Français).
  - **Codebase**: English (Internal variable names, comments, documentation).
- **Aesthetics**:
  - Modern, premium, and sophisticated.
  - Inspired by: [Boda Mar & Jaume](https://boda-mar-jaume.lovable.app/) (Clean typography, elegant spacing, subtle interactions).
- **Animations**:
  - Use smooth transitions and micro-animations.
  - Refer to `Web_Animation_And_Motion_Design_Expert.md` for best practices.
  - **NO** background music.
- **Responsiveness**: Mobile-first design is mandatory as most guests will view on phones.

## Key Content Sections

1. **Hero**: Elegant introduction with the couple's names and the date.
2. **Countdown**: A stylish timer leading to Oct 10, 2026.
3. **The Program**: Details of the celebration at Palais Tazi.
4. **Location/Maps**: Integration or link to [Palais Tazi - Google Maps](https://maps.app.goo.gl/614jX38P2Xqfvvk69).
5. **Details**: Dress code, accommodation info, etc.
6. **RSVP**: A user-friendly form for attendance confirmation.

## Development Workflow for Agents

- **Clarity**: Always verify requirements against `wedding_info.md`.
- **Modularity**: Create reusable React components in `src/components/`.
- **Types**: Ensure strict TypeScript types for all props and data.
- **Animations**: Prioritize performance (transform/opacity) to ensure 60fps on mobile.

## Git Commit Standards

Use emojis to prefix commit messages to categorize intentions clearly.

### Message Format

`<emoji> [scope?] : <description>`
Example: `✨ feat(auth): add login logic`

### Core Gitmoji List

| Emoji | Code                 | Intent                             |
| :---- | :------------------- | :--------------------------------- |
| ✨    | `:sparkles:`         | New features                       |
| 🐛    | `:bug:`              | Bug fixes                          |
| ♻️    | `:recycle:`          | Refactoring code                   |
| ⚡️    | `:zap:`              | Performance improvements           |
| 💄    | `:lipstick:`         | UI/Style/Assets changes            |
| 📝    | `:memo:`             | Documentation                      |
| ✅    | `:white_check_mark:` | Tests (add, update, pass)          |
| 🔥    | `:fire:`             | Removing code or files             |
| 🚑️    | `:ambulance:`        | Critical hotfix                    |
| 🔧    | `:wrench:`           | Configuration/Build scripts        |
| 📦️    | `:package:`          | Dependencies                       |
| 🚀    | `:rocket:`           | Deployment                         |
| 🧪    | `:test_tube:`        | Adding a failing test              |
| 💥    | `:boom:`             | Breaking changes                   |
| 🚧    | `:construction:`     | Work in progress (WIP)             |
| 🚨    | `:rotating_light:`   | Fixing compiler/linter warnings    |
| 🎨    | `:art:`              | Improving structure/format of code |

### AI Guidelines

1. **Atomicity:** One emoji per commit. Split changes if they serve multiple purposes.
2. **Format:** Use Unicode emojis (✨) directly in the title.
3. **Style:** - Use imperative mood (e.g., `add` instead of `added`).
   - Description starts with lowercase.
   - No period at the end.
4. **Hierarchy:** If multiple intents overlap, priority is: `💥` > `✨` > `🐛` > `♻️`.

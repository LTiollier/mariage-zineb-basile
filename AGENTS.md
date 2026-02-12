# AGENTS.md - Wedding Invitation Project (Zineb & Basile)

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
- **Convention**: Use [gitmoji](https://gitmoji.dev/).
- **Format**: Clear and concise titles.
- **Description**: Do **NOT** include a description in commit messages.

## References
- `wedding_info.md`: Primary source for names, dates, and locations.
- `Web_Animation_And_Motion_Design_Expert.md`: Technical guide for animations.

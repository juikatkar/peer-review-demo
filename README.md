# Peer Review Demo

A React + Vite + Tailwind CSS application built for the **ReDI School** peer code review workshop.

Each page contains a small, intentional exercise. Students fix the issue, open a pull request, and
review each other's work.

---

## Exercises

| # | Title | What's missing |
|---|-------|----------------|
| 1 | Wire a button to its handler | `onClick` not attached to the button |
| 2 | Add a missing button | Submit button not rendered in the form |
| 3 | Display an image | `<img>` element missing entirely |
| 4 | Render a list | `.map()` returns `null` for every item |
| 5 | Fix the broken style | Tailwind classes missing on the card wrapper |

---

## Getting started

### 1. Fork & clone

> **You cannot push directly to this repository.** You must fork it first.

1. Click the **Fork** button at the top-right of this page on GitHub.
2. Clone **your fork** (replace `YOUR_USERNAME`):

```bash
git clone https://github.com/YOUR_USERNAME/peer-review-demo.git
cd peer-review-demo
```

### 2. Install & run

```bash
npm install
npm run dev
```

The app runs at [http://localhost:5173](http://localhost:5173).

---

## Workshop workflow

1. **Fork** this repository on GitHub (top-right button).
2. **Clone your fork** locally (see above).
3. Create a branch for your exercise:
   ```bash
   git checkout -b feat/exercise-1-fix
   ```
4. Open the corresponding file in `src/pages/Exercise{N}.jsx`.
5. Find the `TODO` comment and apply the fix.
6. Commit and push **to your fork**:
   ```bash
   git add .
   git commit -m "fix: wire onClick handler in exercise 1"
   git push origin feat/exercise-1-fix
   ```
7. On GitHub, open a **Pull Request** from your fork → `andrei-bsl/peer-review-demo` `develop`.
8. Assign a classmate as reviewer.
9. Review your classmate's pull request in return.

---

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 6
- [Tailwind CSS](https://tailwindcss.com/) v4
- [React Router](https://reactrouter.com/) v7

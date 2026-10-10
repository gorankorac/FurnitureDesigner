# UI/UX & Frontend Design Rules

## Tech Stack & Libraries
- Always use **React (Next.js)** with **Tailwind CSS** for styling.
- Use **Shadcn UI** components combined with **Lucide Icons** for all user interface elements.
- Ensure fully **Responsive Design** (mobile-first approach: optimized for mobile screens, tablets, and wide desktops).

## Modern Aesthetic & Design Guidelines
- **Theme:** Default to a clean **Dark Mode** (e.g., deep slate/zinc backgrounds like `bg-slate-950` or `bg-zinc-950`) paired with elegant, subtle gradient glow accents.
- **Layouts:** Use modern layout patterns like **Bento Grids**, floating navigation bars with glassmorphism (`backdrop-blur-md bg-white/10`), and clean asymmetric structures.
- **Card Design & Borders:** Cards must have subtle borders (`border border-white/10`), smooth rounded corners (`rounded-2xl` or `rounded-3xl`), and soft shadow effects.
- **Spacing & Typography:** Maintain generous whitespace (`py-20` / `py-24` for sections). Use clean font hierarchies with sharp text contrast (`text-white` for primary headers, `text-slate-400` for secondary text).
- **Interactivity & Motion:** Every interactive element (buttons, cards, links) must include smooth, delightful hover states (`transition-all duration-300 hover:scale-[1.02]`, color shifts, or subtle glow animations). No jarring or instant state changes.

## Code Quality
- Write modular, clean, and reusable components. Avoid monolithic single-file code.
- Never use plain, unstyled HTML elements (like raw `<button>` or `<input>`) when a polished Tailwind/Shadcn equivalent is available.

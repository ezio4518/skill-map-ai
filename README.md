# Skill Map AI 🧠💼

**Skill Map AI** is an AI-powered career coach designed to guide users in building exceptional resumes, preparing for interviews, and staying ahead in their career journey. With an intelligent, interactive dashboard and cutting-edge AI features, Skill Map AI empowers users to apply with confidence and clarity.

---

## 🌐 Live Demo

🔗 [Deployed Project Link](https://skill-map-ai-1dhu.vercel.app/)

---

## Features 🚀

* **AI Resume Builder**: 📝 Craft compelling, ATS-optimized resumes section by section with Gemini-powered suggestions.
* **Cover Letter Generator**: 💌 Generate tailored cover letters by analyzing job descriptions, skills, and user profiles.
* **Mock Interview Preparation**: 🎤 Practice role-specific questions and receive improvement tips based on AI feedback.
* **Industry Insights Dashboard**: 📊 Weekly updated reports with insights like salary ranges, job demand, top skills, and market trends.
* **Interactive UI**: 🎯 Built with a modern, clean, and intuitive interface using Next.js and Shadcn UI.

---

## Technologies Used 🛠️

* **Frontend**: ⚛️ Next.js (App Router, TurboPack)
* **Styling**: 🎨 Tailwind CSS
* **UI Components**: 🧱 Shadcn UI, Lucide React Icons
* **Form Handling**: 🢾 React Hook Form + Zod for validation
* **Authentication**: 🔐 Clerk (Google & email/password login)
* **Database**: 📄 PostgreSQL via NeonDB
* **ORM**: 🔗 Prisma (includes Prisma transactions for multi-step ops)
* **Charts**: 📈 Recharts for performance visualizations
* **AI Integration**: 🤖 Gemini 1.5 Flash via `@google/generative-ai`
* **Background Jobs**: ⏳ Injest for cron-based weekly insights refresh
* **Deployment**: 🚀 Hosted on Vercel

---

## Folder Structure 📂

```
skill-map-ai/
├── app/                  # Next.js app directory (routes, pages, layouts)
├── components/           # Reusable UI components (ResumeCard, Chart, etc.)
├── lib/                  # Utility functions and AI helpers (e.g., improveWithAI)
├── prisma/               # Prisma schema and DB setup
├── actions/              # Server actions for AI calls, DB operations
├── public/               # Static assets
├── data/                 # Static or mock data files
└── hooks/                # Custom React hooks
```

---

## Installation 💻

1. **Clone the repository:**

```bash
git clone https://github.com/ezio4518/skill-map-ai.git
cd skill-map-ai
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

    Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_next_public_clerk_publishable
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
DATABASE_URL=your_db_url
GEMINI_API_KEY=your_google_gemini_api_key
```

---

## Running the Application Locally 🏃‍♂️

Start the development server:

```bash
npm run dev
```

Then open your browser and visit:
👉 [http://localhost:3000](http://localhost:3000)

---

## AI Integration 🤖

Powered by **Gemini 1.5 Flash**, integrated using the `@google/generative-ai` SDK.

**Used in:**

* `improveWithAI`: Resume section enhancement
* Cover Letter Generator: Tailored based on job descriptions
* Interview Questions: Generated and evaluated with feedback
* Weekly Industry Insights: Fetched and updated via Injest cron jobs

---

## Contributing 🤝

If you'd like to improve **Skill Map AI**, fork the repository and submit a pull request. Please ensure:

* Code quality is maintained
* Features are tested
* Proper documentation is provided

---

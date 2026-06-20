# Kidrove Workshop Landing Page

This repository contains the frontend and backend code for the Kidrove AI & Robotics Summer Workshop Landing Page.

**GitHub Repository Link:** [https://github.com/smkspurti/Kidrove](https://github.com/smkspurti/Kidrove)  
**Live Demo Link:** [https://kidrove-1-s6o1.onrender.com/](https://kidrove-1-s6o1.onrender.com/)

## Submission Note

**Approach:**
I built a premium, highly-interactive React landing page designed to specifically appeal to both kids (vibrant colors, 3D Pixar-style illustrations, playful animations) and their parents (clean structure, clear outcomes, trust badges). I chose Tailwind CSS for rapid, scalable styling and Framer Motion for scroll animations to provide a "WOW" factor. The component structure is modularized by section (`Hero`, `Features`, `Journey`, etc.) for maintainability. The registration form is fully validated using Zod and React Hook Form, and submits data to a robust Express.js API, successfully fulfilling all assignment criteria, including optional bonuses.

**Improvements with more time:**
Given more time, I would implement an actual payment gateway integration (like Stripe or Razorpay) directly after form submission. I would also add user authentication so parents could log in to track their child's progress during the workshop, and perhaps implement end-to-end testing using Cypress to ensure the registration flow never breaks.

## Running Locally

1. **Frontend:** Navigate to `frontend/` and run `npm install` followed by `npm run dev`.
2. **Backend:** Navigate to `backend/` and run `npm install` followed by `npm run dev`.

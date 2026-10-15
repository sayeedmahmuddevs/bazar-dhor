# 🛒 বাজার দর (BazarDor)

### বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজারদর জানুন এক নজরে

বাজার দর (BazarDor) একটি আধুনিক ও Responsive Web Application, যেখানে ব্যবহারকারীরা নিত্যপ্রয়োজনীয় পণ্যের দাম, বিভিন্ন বাজারের মূল্য, দৈনিক দাম বৃদ্ধি-হ্রাস এবং পণ্যের বিস্তারিত তথ্য দেখতে পারবেন।

## 🌐 Live Demo

- **Live Website:** https://bazar-dhor-new.vercel.app
- **GitHub Repository:** [YOUR_GITHUB_REPOSITORY_URL](https://github.com/sayeedmahmuddevs/bazar-dhor)

## ✨ Features

- 🏠 **Responsive Homepage:** মোবাইল, ট্যাবলেট ও ডেস্কটপে ব্যবহারযোগ্য হোমপেজ।
- 📈 **Price Updates:** আজ যেসব পণ্যের দাম বেড়েছে ও কমেছে, সেগুলোর তালিকা।
- 🛍️ **Product Cards:** পণ্যের নাম, Emoji, একক, দাম ও শতকরা পরিবর্তন।
- 📊 **Product Details:** সর্বনিম্ন, সর্বোচ্চ, গড় দাম এবং বাজারভিত্তিক মূল্য।
- 🗂️ **Category Pages:** ক্যাটাগরি অনুযায়ী পণ্য দেখা ও মূল্য অনুসারে Sort করা।
- 🔐 **Authentication:** Better Auth দিয়ে Email/Password, Google ও GitHub Login।
- 👤 **Profile Management:** ব্যবহারকারীর তথ্য দেখা ও নাম পরিবর্তন।
- 🔒 **Protected Routes:** Login প্রয়োজন এমন পেজে নিরাপদ প্রবেশাধিকার।
- 🔔 **Toast Notifications:** Login, Signup, Logout ও Error-এর জন্য Notification।
- ⏳ **Skeleton Loading:** ডেটা লোড হওয়ার সময় Loading UI।
- 🚫 **Custom 404 Page:** অবৈধ Route-এর জন্য Friendly Error Page।
- 📱 **Responsive Design:** সব Screen Size-এর জন্য উপযোগী Layout।

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Next.js | React Framework and Routing |
| React | User Interface |
| TypeScript | Type Safety |
| Tailwind CSS | Responsive Styling |
| DaisyUI | UI Components |
| Better Auth | Authentication |
| MongoDB | Database |
| React Hot Toast | Notifications |
| React Icons | Icons |
| Git & GitHub | Version Control |
| Vercel | Deployment |

## 📁 Project Structure

```text
bazar-dhor/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── sign-in/
│   ├── sign-up/
│   ├── profile/
│   ├── product/
│   │   └── [slug]/
│   ├── category/
│   │   └── [slug]/
│   └── not-found.tsx
├── components/
├── lib/
│   ├── auth.ts
│   └── auth-client.ts
├── public/
├── data/
├── proxy.ts
├── package.json
└── README.md
```

*Note: Adjust the structure to match the actual files and folders in your project.*

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB Database
- Git

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd bazar-dhor
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000/] in your browser.

## 🏗️ Build for Production

Run the production build:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

## 🌍 Deployment

This project can be deployed using Vercel.

1. Import the GitHub repository into Vercel.
2. Configure the required environment variables.
3. Verify the production build.
4. Deploy the application.
5. Test authentication, protected routes, product details, and page refresh behavior.

Deploy using Vercel CLI:

```bash
vercel --prod
```

## 🔐 Authentication and Security

- Better Auth handles user authentication and sessions.
- Protected pages should verify the user's session.
- Sensitive API routes and server actions must validate authentication and authorization.
- Database credentials and authentication secrets must remain private.
- Google and GitHub OAuth credentials must be configured correctly.

## 📱 Responsive Design

BazarDor is designed to support:

- 📱 Mobile devices
- 📲 Tablets
- 💻 Desktop screens

The layout uses responsive grids, flexible navigation, and adaptive components to provide a consistent user experience.

## 🎯 Project Objectives

- Present essential product prices in an accessible format.
- Help users compare prices across different markets.
- Provide secure authentication and personalized profile management.
- Build a modern web application using Next.js and TypeScript.
- Practice database integration, responsive design, and deployment.

## 👨‍💻 Author

- **Name:** Sayeed Mahmud
- **Project:** বাজার দর (BazarDor)
- **GitHub:** https://github.com/sayeedmahmuddevs/bazar-dhor
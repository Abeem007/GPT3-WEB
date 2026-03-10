# GPT-3 AI Landing Page
A modern, responsive landing page showcasing GPT-3 AI capabilities with interactive features and real-time content.

## Live Demo
https://gpt-3-web-3b4e.vercel.app/
##  Features
### Modern UI/UX
1. Gradient Design: Beautiful gradient backgrounds and text effects.
2. Responsive Layout: Fully responsive across all devices (mobile, tablet, desktop).
3. Smooth Animations: CSS animations and transitions for enhanced user experience

### User Authentication
1. Modal-Based Auth: Clean authentication modals for sign up/login.
2. Password Validation: Secure password requirements with real-time feedback.
3. Context Management: React Context API for global state management.
4. Toast Notifications: Modern toast notifications for user feedback.

### Interactive Components
1. Real-time Blog: Fetches latest AI news from GNews API with fallback content.
2. Modal Overlays: Smooth modal animations with backdrop blur effects.

## Tech Stack
### Frontend:
1. React 18.2.0
2. CSS3 with Custom Properties (CSS Variables)
3. React Hooks (useState, useEffect, useContext)
4. React Icons for beautiful iconography

### API Integration:
1. GNews API for real-time AI articles
2. Environment variables for API keys

### Deployment:
1. Vite for fast development and building
2. Vercel

## Project Structure

```bash
gpt3-ai-landing/
├── public/
│   └── assets/
│       ├── logo.svg
│       ├── people.png
│       ├── ai.png
│       └── blog/
│           ├── blog01.png
│           ├── blog02.png
│           ├── blog03.png
│           ├── blog04.png
│           └── blog05.png
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── navbar.css
│   │   ├── Article/
│   │   │   ├── Article.jsx
│   │   │   └── article.css
│   │   └── ... (other components)
│   ├── containers/
│   │   ├── Blog/
│   │   │   ├── Blog.jsx
│   │   │   ├── blog.css
│   │   │   └── Imports.js
│   │   ├── AuthModal/
│   │   │   ├── AuthModal.jsx
│   │   │   └── authModal.css
│   │   └── ... (other containers)
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── (MenuContext.jsx - optional)
│   ├── App.jsx
│   └── index.js
├── .env.example
├── package.json
├── vite.config.js
└── README.md
```

##  Quick Start
### Prerequisites
1. Node.js (v16 or higher)
2. npm or yarn

### Installation
1. Clone this repository                                                                                                                                                                  * git clone https://github.com/yourusername/gpt3-ai-landing.git
  * cd gpt3-ai-landing 
2. Install dependencies
  * npm install 
  * or
  * yarn install
3. Set up environment variables
  * cp .env.example .env
#### Edit .env file and add your GNews API key:
  * VITE_GNEWS_API_KEY=your_gnews_api_key_here
4. Get a GNews API Key
  *  Visit GNews.io
  *  Sign up for a free account
  *  Get your API key from the dashboard
  *  Add it to your .env file
5. Run the development server
  * npm run dev
  * or
  * yarn dev
6. Open your browser
  * Navigate to http://localhost:5173

## Deployment
#### Deploy to Vercel
  * npm run build
  * vercel --prod
#### Deploy to Netlify
  * npm run build

## License
This project is licensed under the MIT License 

## Contributions
Contributions are welcome! Please feel free to submit a Pull Request.

## Contact
Email: BimbolaOkunade@gmail.com

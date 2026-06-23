# Gowri U S — Personal Portfolio

A modern, fully animated personal portfolio built with **React + Vite** and **Framer Motion**. Showcases skills, experience, projects, and contact information with a sleek dark theme and smooth interactions throughout.

---

## Live Preview

> Run locally with `npm run dev` → [http://localhost:5173](http://localhost:5173)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion 12 |
| Icons | Lucide React, React Icons |
| Form Handling | FormSubmit.co |
| Font | Poppins (Google Fonts) |

---

## Project Structure

```
portfolio/
├── public/                     # Static assets
├── src/
│   ├── assets/
│   │   ├── profile.jpeg        # Profile photo
│   │   └── developer.png       # About section illustration
│   ├── components/
│   │   ├── AnimatedHeading.jsx # Reusable word-split stagger heading
│   │   ├── ScrollProgressBar.jsx # Fixed scroll progress indicator
│   │   ├── Navbar.jsx          # Sticky animated navigation bar
│   │   ├── Profile.jsx         # Hero / landing section
│   │   ├── About.jsx           # About me section
│   │   ├── Skills.jsx          # Skills grid with categories
│   │   ├── Education.jsx       # Education timeline
│   │   ├── Experience.jsx      # Work experience timeline
│   │   ├── Projects.jsx        # Project cards grid
│   │   ├── Contact.jsx         # Contact form and info
│   │   └── SocialLinks.jsx     # Social media icon links
│   ├── pages/
│   │   └── Home.jsx            # Main page — composes all sections
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind imports + Google Fonts
├── index.html
├── vite.config.js
├── tailwind.config.js
├── eslint.config.js
└── package.json
```

---

## Features

### Animations

- **Scroll Progress Bar** — Gradient red-to-purple bar fixed at the top of the viewport that fills as you scroll down the page.
- **Navbar** — Slides down from above on page load; logo letters stagger in one by one; nav links display an animated sliding underline on hover using Framer Motion's `layoutId`.
- **Hero Section** — Profile image floats continuously with two counter-rotating orbital rings; hero text (greeting → title → bio → socials → CTA) staggers in sequentially; "Hire Me" button features a shimmer sweep animation that loops.
- **About Section** — Text paragraphs slide in from the right with stagger delays; developer image has a live 3D mouse-tracking tilt using `useMotionValue` and `useSpring`.
- **Skills Section** — Category cards pop in with scale + fade stagger on scroll; individual skill badges animate in independently; cards lift with a red glow shadow on hover.
- **Education Timeline** — Animated dashed line that draws itself downward on scroll; timeline dots spring-bounce into place; cards lift subtly on hover.
- **Experience Section** — Bullet points stagger in with a red arrow marker; timeline line animates on scroll.
- **Projects Grid** — Each card is a full 3D tilt component that responds to mouse position in real time; tech badges animate in with delay; project icon jiggles on hover.
- **Contact Section** — Contact info slides in from the left with stagger; form fields slide in from the right one by one; submit button has a pulsing radial glow ring.

### Design

- Dark theme with **black background**, **red-500 primary**, and **purple accent** colors
- Glassmorphism-style cards with `backdrop-blur` and translucent borders
- Ambient gradient glow blobs in the hero section
- Fully responsive — mobile, tablet, and desktop layouts
- All entrance animations fire once (`viewport={{ once: true }}`) and do not repeat on scroll back

---

## Sections

| Section | Anchor | Description |
|---|---|---|
| Navbar | — | Sticky navigation with animated links |
| Hero | `#home` | Introduction, profile photo, CTA button |
| About | `#about` | Bio and professional summary |
| Education | `#education` | Academic timeline |
| Skills | `#skills` | Categorized skill badges |
| Experience | `#experience` | Work history with bullet points |
| Projects | `#projects` | 9 project cards with tech stacks |
| Contact | `#contact` | Email form and contact details |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Gowri-US/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173) with hot module replacement.

### Production Build

```bash
npm run build
```

Output goes to the `dist/` folder. Preview the production build locally:

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Key Dependencies

```json
{
  "react": "^19.2.6",
  "framer-motion": "^12.40.0",
  "tailwindcss": "^4.3.1",
  "lucide-react": "^1.21.0",
  "react-icons": "^5.6.0"
}
```

---

## Projects Showcased

| Project | Stack | Description |
|---|---|---|
| Famto – Customer App | Flutter, Firebase, Socket.IO | Multi-service delivery platform |
| Famto Agent App | Flutter, Google Maps, Geolocation | Real-time delivery partner app |
| Famto Business App | Flutter, REST API, Firebase | Merchant store management |
| Famto Admin Panel | React, Node.js, MongoDB | Platform operations dashboard |
| Famto Backend APIs | Node.js, Express, Socket.IO | Scalable microservice backend |
| Interactive Landing Page | React, Framer Motion | Animated marketing site |
| Famto Ordering Website | React, Razorpay, Node.js | Web-based ordering platform |
| Ambi's Kitchen Website | Next.js, GSAP, Tailwind CSS | Production restaurant website |
| ScholarHub | React, Firebase | College resource sharing platform |

---

## Contact

**Gowri U S** — Flutter & React Developer based in Trivandrum, Kerala

- Email: [gowrikunju1805@gmail.com](mailto:gowrikunju1805@gmail.com)
- GitHub: [github.com/Gowri-US](https://github.com/Gowri-US)
- Instagram: [instagram.com/paruzzzgowri](https://instagram.com/paruzzzgowri)
- Phone: +91 9778741983
- Location: Trivandrum, Kerala, India

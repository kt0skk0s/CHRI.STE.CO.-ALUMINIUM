# CHRI.STE.CO Aluminium - Corporate Website

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![SEO](https://img.shields.io/badge/SEO-Optimized-blueviolet)

A modern, fully responsive, and bilingual corporate website developed from scratch for **CHRI.STE.CO Aluminium**, a leading aluminum construction company based in Paralimni, Cyprus. 

This project serves as a showcase of modern web development practices, focusing on performance, custom animations, SEO optimization, and a seamless user experience across all devices.

---

## 🏗️ How It Was Built (Architecture & Approach)

This website was built using a **Vanilla Web Stack** (HTML5, CSS3, Vanilla JS). No heavy CSS frameworks (like Bootstrap or Tailwind) were used, demonstrating a deep understanding of core CSS concepts like Grid, Flexbox, and custom Media Queries for pixel-perfect responsiveness.

### 1. Bilingual Architecture (GR / EN)
To ensure maximum SEO performance, the website uses a **Directory-Based Localization** approach instead of client-side JavaScript translation. 
* The root directory contains the primary Greek (`GR`) files.
* An `/en/` subfolder houses the entirely translated English HTML files. 
* This allows search engines to crawl and index both languages independently, utilizing separate title and meta descriptions.

### 2. Performance & Animations
* **Intersection Observers:** Instead of relying on heavy animation libraries, a custom vanilla JavaScript implementation of `IntersectionObserver` is used for smooth, on-scroll reveal animations.
* **Intro Sequence:** A custom, math-calculated CSS/JS logo transition plays on initial load, seamlessly scaling and translating the logo from the center of the screen into the fixed navigation bar.
* **Dynamic Counters:** JavaScript-driven animated numbers for the company's "Trust Strip" statistics.

### 3. Form Handling (Serverless)
The contact forms (both Greek and English) are fully functional and integrated with **Formspree**. This serverless approach securely parses form submissions and routes them directly to the client's inbox without requiring a backend architecture (like PHP).

---

## ✨ Key Features

* **Premium Minimal UI:** A modern black-and-white aesthetic tailored for the construction/architectural industry.
* **Dynamic Hero Slider:** Full-screen background crossfade slider powered by Swiper.js.
* **Smart Navigation:** A transparent header that transforms into a solid, shadow-casting navbar upon scrolling, coupled with a custom full-screen overlay menu for mobile devices.
* **Integrated Maps:** Custom grayscale Google Maps embeds, optimized with absolute positioning to prevent flexbox collapsing issues on mobile breakpoints.
* **SEO & Social Media Ready:** * Open Graph (OG) tags and Twitter Cards for rich social media sharing.
  * Semantic HTML5 structure.
  * `robots.txt` and a fully structured `sitemap.xml` included.
* **GDPR Compliant:** Includes a functional Cookie Consent banner and a dedicated Privacy Policy page.

---

## 🛠️ Technologies Used

* **HTML5:** Semantic markup, Meta tags, OG Tags.
* **CSS3:** Custom Variables, CSS Grid, Flexbox, Keyframe Animations, Mobile-first media queries.
* **JavaScript (ES6+):** DOM manipulation, Intersection Observers, Event Listeners.
* **Swiper.js:** For high-performance touch-enabled sliders.
* **FontAwesome (v6):** For scalable vector icons.
* **Formspree:** For serverless form submission handling.

---

## 🚀 How to Run Locally

Since this is a static website, running it locally requires zero configuration or build tools.

1. Clone the repository using your terminal:
   `git clone your-repository-link-here`
2. Navigate to the project directory.
3. Open the `index.html` file in any modern web browser.
*(Tip: Use the Live Server extension in VS Code for hot-reloading during edits).*

---

## 🤝 Acknowledgments & Disclaimer

Special thanks to the team at **CHRI.STE.CO Aluminium** for trusting me with their digital presence. 

*Note: This repository contains the source code of a real-world client project. It has been uploaded as open-source with the explicit permission of the client to be used as a portfolio piece. Sensitive client data (where applicable) has been sanitized.*
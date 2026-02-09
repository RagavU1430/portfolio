# Professional Portfolio Template

A premium, responsive, and customizable portfolio template designed to showcase your achievements, skills, and projects in a professional manner.

## Features & Highlights

*   **Modern Design**: Deep, sophisticated dark theme with glassmorphism effects and vibrant accents.
*   **Fully Responsive**: Looks great on mobile, tablet, and desktop devices.
*   **Interactive Elements**: Custom cursor, smooth scrolling, and hover effects that engage the user.
*   **Structured Content**: Sections for About, Skills, Achievements, Projects, and Certifications.
*   **Performance Optimized**: Lightweight CSS and Vanilla JavaScript.

## How to Customize

1.  **Personal Information**:
    *   Open `index.html`.
    *   Update the `[Your Name]`, `[Your Professional Title]`, and the summary in the **Hero Section**.
    *   Update the "About Me" section with your personal story.

2.  **Skills**:
    *   Locate the `#skills` section.
    *   Update the tags (e.g., `<span>JavaScript</span>`) to reflect your actual skillset.

3.  **Achievements**:
    *   In the `#achievements` section, modify the timeline items.
    *   **Tip**: Use the `<strong>` tag to highlight numbers (e.g., "Increased sales by **30%**").

4.  **Projects**:
    *   Replace the placeholder project descriptions and titles.
    *   Update the links to your actual live demos and GitHub repositories.
    *   **Images**: Add your project screenshots to an `assets` folder (you'll need to create one) and update the `src` attributes or CSS backgrounds of `.project-image`.

5.  **Certifications**:
    *   Update the certification names, organizations, and dates in the `#certifications` section.

6.  **Contact Form**:
    *   The form is currently frontend-only. To make it functional, you can use a service like [Formspree](https://formspree.io/) or integrate a backend.

## Structure

*   `index.html`: The main structure of the page.
*   `style.css`: All styling rules.
*   `script.js`: Interactive behavior (cursor, animations, mobile menu).

## Color Palette Customization

To change the color scheme, open `style.css` and modify the variables in the `:root` selector:

```css
:root {
    --accent-primary: #38bdf8;  /* Change this for the main accent color */
    --accent-secondary: #818cf8; /* Secondary gradient color */
}
```

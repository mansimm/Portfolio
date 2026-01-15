# Portfolio Website

A modern, responsive portfolio website built with React, showcasing projects, skills, and contact information.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive layout (mobile, tablet, desktop)
- 🚀 Smooth scrolling navigation
- 💼 Project showcase with GitHub links
- 📧 Contact form
- 🔗 Social media integration
- ⚡ Fast and optimized performance

## Sections

1. **Home** - Introduction and tagline
2. **About** - Bio, skills, and tech stack
3. **Projects** - Showcase of projects with descriptions and links
4. **Contact** - Contact form and social media links

## Technologies Used

- React 18
- HTML5
- CSS3 (with CSS Variables)
- JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mansimm/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Home Section** (`src/components/Home.js`):
   - Update name and tagline
   - Modify the description

2. **About Section** (`src/components/About.js`):
   - Update bio text
   - Modify skills array with your skills and proficiency levels
   - Update tech stack array

3. **Projects Section** (`src/components/Projects.js`):
   - Replace project data in the `projects` array
   - Update project images, descriptions, and GitHub URLs

4. **Contact Section** (`src/components/Contact.js`):
   - Update social media links
   - Change email address

### Styling

- Main color scheme is defined in `src/App.css` using CSS variables
- Modify the `:root` variables to change the color scheme:
  ```css
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
  ```

## Deployment to GitHub Pages

### Step 1: Install gh-pages

The `gh-pages` package is already included in `package.json`. If you need to install it manually:

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

The `package.json` already includes the necessary scripts and homepage field. Make sure the `homepage` field matches your GitHub repository URL:

```json
"homepage": "https://mansimm.github.io/portfolio"
```

### Step 3: Build and Deploy

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Build the project
- Create a `gh-pages` branch
- Push the build files to GitHub Pages

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select the `gh-pages` branch
4. Select the `/ (root)` folder
5. Click **Save**

Your site will be available at `https://mansimm.github.io/portfolio` (or your custom domain if configured).

### Automatic Deployment

After the initial setup, you can deploy updates by simply running:
```bash
npm run deploy
```

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or suggestions, feel free to reach out through the contact form on the website or open an issue on GitHub.

---

**Note**: The portfolio has been customized with Mansi's information. All content is ready for deployment!


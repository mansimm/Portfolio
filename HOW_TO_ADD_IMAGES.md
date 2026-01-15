# How to Add Images to Your Portfolio

This guide explains different ways to add images to your React portfolio.

## Folder Structure

Create an `images` folder in the `public` directory:

```
portfolio/
├── public/
│   ├── images/
│   │   ├── profile/
│   │   │   └── profile-photo.jpg
│   │   ├── projects/
│   │   │   ├── microservices.jpg
│   │   │   ├── timetable.jpg
│   │   │   └── chatbot.jpg
│   │   └── companies/
│   │       ├── amdocs-logo.png
│   │       └── infosys-logo.png
│   └── index.html
```

## Method 1: Images in Public Folder (Recommended)

Images in the `public` folder can be referenced directly with a path starting from `/`.

### Steps:
1. Create the folder structure:
   ```
   public/images/profile/
   public/images/projects/
   public/images/companies/
   ```

2. Add your images to these folders

3. Reference them in your components:
   ```jsx
   // In your component
   <img src="/images/profile/profile-photo.jpg" alt="Profile" />
   ```

### Example - Adding Profile Photo:
```jsx
// Home.js
<div className="home-image">
  <img 
    src="/images/profile/profile-photo.jpg" 
    alt="Mansi" 
    className="profile-photo"
  />
</div>
```

### Example - Adding Project Images:
```jsx
// Projects.js
const projects = [
  {
    id: 1,
    title: 'Microservices Architecture',
    imageUrl: '/images/projects/microservices.jpg',
    // ... other properties
  }
];
```

## Method 2: Images in src Folder

You can also import images from the `src` folder.

### Steps:
1. Create folder: `src/images/`
2. Add your images
3. Import them in your component:

```jsx
// At the top of your component file
import profilePhoto from '../images/profile-photo.jpg';
import projectImage from '../images/microservices.jpg';

// Then use them
<img src={profilePhoto} alt="Profile" />
```

## Method 3: External URLs

You can use images from external sources (CDN, cloud storage, etc.):

```jsx
const imageUrl = 'https://example.com/image.jpg';
<img src={imageUrl} alt="Description" />
```

## Best Practices

1. **Image Formats:**
   - Use `.jpg` for photos
   - Use `.png` for logos and graphics with transparency
   - Use `.webp` for optimized web images (if supported)
   - Use `.svg` for scalable vector graphics

2. **Image Optimization:**
   - Compress images before adding (use tools like TinyPNG, ImageOptim)
   - Recommended sizes:
     - Profile photo: 400x400px to 800x800px
     - Project screenshots: 1200x800px (or 16:9 ratio)
     - Company logos: 200x200px or smaller

3. **Naming Conventions:**
   - Use lowercase letters
   - Use hyphens instead of spaces: `profile-photo.jpg` not `profile photo.jpg`
   - Be descriptive: `microservices-architecture.jpg` not `img1.jpg`

4. **Alt Text:**
   - Always include descriptive alt text for accessibility
   - Example: `alt="Microservices Architecture Dashboard"` not `alt="image"`

## Examples for Your Portfolio

### 1. Add Profile Photo to Home Section

```jsx
// src/components/Home.js
<div className="home-image">
  <img 
    src="/images/profile/profile-photo.jpg" 
    alt="Mansi - Software Engineer" 
    className="profile-photo"
  />
</div>
```

### 2. Add Project Screenshots

```jsx
// src/components/Projects.js
const projects = [
  {
    id: 1,
    title: 'Microservices Architecture',
    imageUrl: '/images/projects/microservices.jpg',
    // ... rest of properties
  }
];
```

### 3. Add Company Logos to Work Experience

```jsx
// src/components/WorkExperience.js
const experiences = [
  {
    id: 1,
    company: 'Amdocs',
    companyLogo: '/images/companies/amdocs-logo.png',
    // ... rest of properties
  }
];
```

## Quick Setup Commands

Create the folders using these commands in your terminal:

**Windows (PowerShell):**
```powershell
New-Item -ItemType Directory -Path "public\images\profile"
New-Item -ItemType Directory -Path "public\images\projects"
New-Item -ItemType Directory -Path "public\images\companies"
```

**Mac/Linux:**
```bash
mkdir -p public/images/{profile,projects,companies}
```

## Troubleshooting

1. **Image not showing:**
   - Check the file path is correct
   - Ensure the image file exists in the specified location
   - Check browser console for 404 errors

2. **Image too large:**
   - Compress the image using online tools
   - Use CSS to control size: `max-width: 100%; height: auto;`

3. **Image path issues:**
   - For public folder: Use path starting with `/` (e.g., `/images/photo.jpg`)
   - For src folder: Import the image first, then use the imported variable

## Image Optimization Tools

- **TinyPNG**: https://tinypng.com/ (Compress PNG/JPG)
- **Squoosh**: https://squoosh.app/ (Google's image optimizer)
- **ImageOptim**: Desktop app for Mac
- **GIMP/Photoshop**: For resizing and editing

---

**Note**: After adding images, restart your development server (`npm start`) to see the changes.



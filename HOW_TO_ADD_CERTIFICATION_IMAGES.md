# How to Add Certification Images

This guide explains how to add images to your certifications.

## Step 1: Prepare Your Images

1. **Take a screenshot or download** your certificate from the platform (Udemy, Coursera, etc.)
2. **Crop the image** to show only the certificate (remove browser bars, etc.)
3. **Optimize the image**:
   - Recommended size: 1200x800px (or maintain aspect ratio)
   - Format: JPG or PNG
   - File size: Keep under 500KB for faster loading
   - Use tools like [TinyPNG](https://tinypng.com/) to compress

## Step 2: Save Images to Folder

1. Place your certificate images in:
   ```
   public/images/certifications/
   ```

2. **Name your files** (use lowercase, hyphens for spaces):
   - `java-design-patterns.jpg`
   - `microservices.jpg`
   - `aws-certified.jpg`
   - etc.

## Step 3: Update the Code

Open `src/components/Certifications.js` and update the image paths:

### Current Code:
```javascript
const certificationImages = {
  javaDesignPatterns: process.env.PUBLIC_URL + '/images/certifications/java-design-patterns.jpg',
  microservices: process.env.PUBLIC_URL + '/images/certifications/microservices.jpg',
};
```

### Update the certifications array:
```javascript
const certifications = [
  {
    id: 1,
    title: 'Java Design Patterns',
    // ... other properties
    imageUrl: certificationImages.javaDesignPatterns, // This references the image
  },
  // ... more certifications
];
```

## Step 4: Example - Adding a New Certification

Let's say you want to add an AWS certification:

1. **Save the image** as: `public/images/certifications/aws-certified.jpg`

2. **Add to certificationImages object**:
   ```javascript
   const certificationImages = {
     javaDesignPatterns: process.env.PUBLIC_URL + '/images/certifications/java-design-patterns.jpg',
     microservices: process.env.PUBLIC_URL + '/images/certifications/microservices.jpg',
     awsCertified: process.env.PUBLIC_URL + '/images/certifications/aws-certified.jpg', // New
   };
   ```

3. **Add to certifications array**:
   ```javascript
   {
     id: 3,
     title: 'AWS Certified Solutions Architect',
     institution: 'Amazon Web Services',
     field: 'Cloud Computing',
     duration: '2024',
     imageUrl: certificationImages.awsCertified, // Use the new image
     credentialUrl: 'https://aws.amazon.com/verification', // Optional: link to verify
     description: [
       'Certified in designing and deploying scalable systems on AWS',
       'Expertise in EC2, S3, Lambda, and other AWS services'
     ],
   }
   ```

## Step 5: Restart Development Server

After adding images:
1. Stop the server (Ctrl + C)
2. Start it again: `npm start`
3. Hard refresh browser (Ctrl + Shift + R)

## Troubleshooting

### Image not showing?
- ✅ Check file name matches exactly (case-sensitive)
- ✅ Verify file is in `public/images/certifications/` folder
- ✅ Restart the development server
- ✅ Check browser console (F12) for errors

### Image path issues?
- Use: `/images/certifications/filename.jpg`
- Or: `process.env.PUBLIC_URL + '/images/certifications/filename.jpg'`

### Image too large?
- Compress using [TinyPNG](https://tinypng.com/)
- Resize to 1200x800px or similar
- Use JPG format for photos (smaller file size)

## Quick Checklist

- [ ] Image saved to `public/images/certifications/`
- [ ] Image name uses lowercase and hyphens
- [ ] Image added to `certificationImages` object
- [ ] `imageUrl` property updated in certification object
- [ ] Development server restarted
- [ ] Browser cache cleared (hard refresh)

## Example File Structure

```
portfolio/
├── public/
│   └── images/
│       └── certifications/
│           ├── java-design-patterns.jpg
│           ├── microservices.jpg
│           └── aws-certified.jpg
└── src/
    └── components/
        └── Certifications.js
```

---

**Note**: The image will automatically display in the certification card. If the image doesn't exist, a placeholder will show.


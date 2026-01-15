# Certification Images

Place your certification images in this folder.

## File Naming

Update the filenames in `src/components/Certifications.js` to match your image files:

```javascript
const certificationImages = {
  javaDesignPatterns: process.env.PUBLIC_URL + '/images/certifications/your-image-name.jpg',
  microservices: process.env.PUBLIC_URL + '/images/certifications/your-image-name.jpg',
};
```

## Recommended Image Sizes

- **Width**: 1200px
- **Height**: 800px (or maintain aspect ratio)
- **Format**: JPG or PNG
- **File size**: Optimize to keep under 500KB for faster loading

## Example Files

- `java-design-patterns.jpg` - Java Design Patterns certificate
- `microservices.jpg` - Microservices certificate

## Tips

1. Take screenshots of your certificates from the platform (Udemy, Coursera, etc.)
2. Crop to show only the certificate
3. Optimize images using tools like TinyPNG before adding
4. Use descriptive filenames (lowercase, hyphens for spaces)


# Troubleshooting: Image Not Showing

If your image `timetable-software.png` is not showing, try these steps:

## Step 1: Restart the Development Server

**Important:** After adding new files to the `public` folder, you MUST restart the dev server.

1. Stop the server (Press `Ctrl + C` in the terminal)
2. Start it again:
   ```powershell
   npm start
   ```

## Step 2: Clear Browser Cache

1. **Hard Refresh:**
   - Windows: `Ctrl + Shift + R` or `Ctrl + F5`
   - Mac: `Cmd + Shift + R`

2. **Or Clear Cache:**
   - Open Developer Tools (F12)
   - Right-click the refresh button
   - Select "Empty Cache and Hard Reload"

## Step 3: Check Browser Console

1. Open Developer Tools (F12)
2. Go to the "Console" tab
3. Look for any errors related to the image
4. Check the "Network" tab to see if the image request is failing (404 error)

## Step 4: Verify the Path

The path in your code should be:
```jsx
imageUrl: '/images/projects/timetable-software.png'
```

Make sure:
- ✅ File exists at: `public/images/projects/timetable-software.png`
- ✅ Path starts with `/` (not `./` or `../`)
- ✅ File name matches exactly (case-sensitive on some systems)

## Step 5: Test the Image Path Directly

Open in browser:
```
http://localhost:3000/images/projects/timetable-software.png
```

If this shows the image, the path is correct. If you get a 404, the file might not be in the right location.

## Step 6: Check File Permissions

Make sure the image file is not:
- Locked by another program
- Read-only
- Corrupted

## Common Issues

1. **File name case sensitivity:**
   - `timetable-software.png` ✅
   - `Timetable-Software.png` ❌ (might not work on Linux/Mac)

2. **File extension:**
   - Make sure it's `.png` not `.PNG` or `.Png`

3. **Spaces in filename:**
   - Avoid spaces: `timetable-software.png` ✅
   - Not: `timetable software.png` ❌

## Still Not Working?

1. Try renaming the file to something simpler: `timetable.png`
2. Update the path in `Projects.js` to match
3. Restart the server
4. Clear browser cache



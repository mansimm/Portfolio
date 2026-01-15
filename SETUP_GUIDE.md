# Setup Guide - Installing Node.js

## Node.js is Not Installed

You need to install Node.js to run this React portfolio website. Node.js includes npm (Node Package Manager) which is required to install dependencies and run the project.

## Installation Steps

### Option 1: Install from Official Website (Recommended)

1. **Download Node.js:**
   - Visit: https://nodejs.org/
   - Download the **LTS (Long Term Support)** version (recommended for most users)
   - Choose the Windows Installer (.msi) for your system (64-bit or 32-bit)

2. **Run the Installer:**
   - Double-click the downloaded `.msi` file
   - Follow the installation wizard
   - **Important:** Make sure to check the box that says "Add to PATH" during installation
   - Click "Next" through the installation steps
   - Click "Install" (you may need administrator privileges)

3. **Verify Installation:**
   - Close and reopen your PowerShell/Command Prompt
   - Run these commands to verify:
     ```powershell
     node --version
     npm --version
     ```
   - You should see version numbers (e.g., `v18.17.0` and `9.6.7`)

### Option 2: Install Using Chocolatey (If you have Chocolatey)

If you have Chocolatey package manager installed, you can use:

```powershell
choco install nodejs-lts
```

### Option 3: Install Using Winget (Windows 10/11)

If you have Windows 10/11 with winget:

```powershell
winget install OpenJS.NodeJS.LTS
```

## After Installation

1. **Restart Your Terminal:**
   - Close your current PowerShell window
   - Open a new PowerShell window
   - Navigate back to your project:
     ```powershell
     cd "C:\Users\mansimi\OneDrive - AMDOCS\Documents\portfolio"
     ```

2. **Install Project Dependencies:**
   ```powershell
   npm install
   ```

3. **Start the Development Server:**
   ```powershell
   npm start
   ```

4. **Open in Browser:**
   - The app will automatically open at `http://localhost:3000`
   - If it doesn't, manually navigate to that URL

## Troubleshooting

### If npm is still not recognized after installation:

1. **Check if Node.js is installed:**
   - Open File Explorer
   - Navigate to: `C:\Program Files\nodejs\` (or `C:\Program Files (x86)\nodejs\`)
   - If the folder exists, Node.js is installed but not in PATH

2. **Add Node.js to PATH manually:**
   - Press `Win + X` and select "System"
   - Click "Advanced system settings"
   - Click "Environment Variables"
   - Under "System variables", find "Path" and click "Edit"
   - Click "New" and add: `C:\Program Files\nodejs\`
   - Click "OK" on all dialogs
   - **Restart your terminal**

3. **Verify PATH:**
   ```powershell
   $env:Path -split ';' | Select-String nodejs
   ```

### If you encounter permission errors:

- Run PowerShell as Administrator
- Or adjust npm's default directory (see npm documentation)

## What Version Should I Install?

- **LTS Version:** Recommended for stability (currently v18.x or v20.x)
- **Current Version:** Latest features but may be less stable

For this portfolio project, **LTS version is recommended**.

## Next Steps After Installation

Once Node.js is installed and verified:

1. Run `npm install` in the project directory
2. Run `npm start` to start the development server
3. Customize the portfolio content
4. Deploy to GitHub Pages using `npm run deploy`

---

**Need Help?** If you continue to have issues, make sure:
- You've restarted your terminal after installation
- Node.js was added to PATH during installation
- You're using the correct terminal (PowerShell, Command Prompt, or Git Bash)



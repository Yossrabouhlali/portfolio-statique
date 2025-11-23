# Yossra Bouhlali - Portfolio Website

<div align="center">
  <img src="https://github.com/Yossrabouhlali/portfolio-statique/blob/main/assets/Yossra%20Bouhlali%20-%20Portfolio%20-%20Google%20Chrome%202025-11-23%2004-47-13.gif" 
       width="900" 
       alt="Portfolio Demo">
</div>


A modern, interactive portfolio website showcasing embedded systems and mobile development expertise with an engaging 3D Three.js animation.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![Three.js](https://img.shields.io/badge/Three.js-r128-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-06B6D4)

## 🌟 Features

- **Interactive 3D Animation**: Three.js powered cube system with orbiting satellites representing embedded systems architecture
- **Click & Drag Interaction**: Manipulate the 3D scene with mouse/touch controls
- **Smooth Scrolling**: Custom easing animation for seamless navigation
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Intersection Observer**: Smooth fade-in and slide-up animations on scroll
- **Modern UI**: Clean design with pink gradient theme using TailwindCSS

## 🚀 Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom animations and gradients
- **JavaScript (ES6+)** - Modern vanilla JS
- **TailwindCSS** - Utility-first CSS framework
- **Three.js** - 3D graphics and animations

### Development Tools
- Visual Studio Code
- Git & GitHub
- Chrome DevTools

## 📂 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── src/
│   └── js/
│       ├── three-setup.js  # Three.js scene configuration
│       └── main.js         # Main application logic
├── assets/                 # Static assets (images, CV)
└── README.md              # Project documentation
```

## 🎨 Sections

1. **Hero Section** - Interactive 3D showcase with introduction
2. **About Section** - Personal background, education, and languages
3. **Skills Section** - Technical expertise categorized by domain:
   - Programming Languages (Python, C, Java, Arduino, PHP)
   - Web Development (HTML, CSS, JavaScript, WordPress)
   - Databases (SQL, SQLite)
   - Mobile Development (Android Studio, Flutter)
   - Embedded Systems (ESP32, Arduino, IoT)
   - Tools & Systems (Linux, MATLAB, Node-RED, UML)

4. **Projects Section** - Featured projects:
   - Datacenter Alert System
   - E-Commerce Web Solutions
   - Embedded Biometric System
   - Mobile Applications

5. **Experience Section** - Professional internships:
   - Centre de Calcul EL KHAWARIZMI (Perfection Stage)
   - INNOVUP (Worker Internship)

6. **Contact Section** - Contact form and social links

## 🎮 Interactive Features

### 3D Scene Controls
- **Hover**: Camera follows mouse with subtle parallax effect
- **Click & Drag**: Rotate the entire system (main cube + satellites)
- **Auto-rotation**: Smooth automatic rotation when idle
- **Touch Support**: Full touch gesture support for mobile devices

### Animations
- Fade-in effects on scroll
- Slide-up animations for content blocks
- Smooth scroll with custom easing
- Button hover effects with 3D transforms

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Yossrabouhlali/portfolio.git
   cd portfolio
   ```

2. **Open the project**
   - Simply open `index.html` in your browser
   - Or use a local server (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. **Access the site**
   - Open `http://localhost:8000` in your browser

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Optimizations

- Lazy loading for animations
- Optimized Three.js rendering loop
- Efficient event listeners with proper cleanup
- Smooth scroll with requestAnimationFrame
- Minimal dependencies for fast load times

## 🔧 Configuration

### Updating CV Download Link

To enable CV download, update the link in `index.html`:

**Option 1: Google Drive**
```html
<a href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID">
```

**Option 2: Local File**
```html
<a href="./assets/CV_Yossra_V4.pdf" download="Yossra_Bouhlali_CV.pdf">
```

### Customizing Three.js Scene

Edit `src/js/three-setup.js` to modify:
- Cube colors (lines 17, 28)
- Satellite positions (line 24)
- Rotation speeds (lines 95, 107)
- Camera position (line 14)

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact

- **Email**: [yossrabouhlali@gmail.com](mailto:yossrabouhlali@gmail.com)
- **LinkedIn**: [Yossra Bouhlali](https://www.linkedin.com/in/yossra-bouhlali-129bb82b1/)
- **GitHub**: [@Yossrabouhlali](https://github.com/Yossrabouhlali)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Three.js community for excellent 3D graphics library
- TailwindCSS for the utility-first CSS framework
- Inspiration from modern portfolio designs

## 🚀 Future Enhancements

- [ ] Add dark mode toggle
- [ ] Implement blog section
- [ ] Add project detail pages
- [ ] Integrate contact form backend
- [ ] Add multi-language support (AR/FR/EN)
- [ ] Enhanced 3D models and animations
- [ ] Performance analytics dashboard

---

**Made with 💕 by Yossra Bouhlali**

*Embedded Systems & Mobile Developer*

<div align="center">
  <img 
    src="https://github.com/Yossrabouhlali/portfolio-statique/blob/main/assets/Cat%20Girl%20GIF%20by%20Pluralsight.gif" 
    width="700"
    alt="Funny Footer Animation"
  >
</div>

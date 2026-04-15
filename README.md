# Sebastian Mocanu - AI Research Scientist Portfolio

Personal portfolio website showcasing my research in AI, Computer Vision, and Robotics and other development
and engineering projects.

**Live Site:** [sebastianmocanu.com](https://sebastianmocanu.com)

## About Me

Welcome to my personal portfolio! I'm Sebastian Mocanu, an AI Research Scientist and PhD candidate at University
POLITEHNICA of Bucharest, specializing in Computer Vision and Robotics. This website showcases my projects,
research work, and professional journey.

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES+6)
- **Styling:** Bootstrap 4, Custom CSS with CSS Grid & Flexbox
- **Animations:** [AOS](https://github.com/michalsnik/aos) (Animate On Scroll),
  [Particle.js](https://github.com/VincentGarreau/particles.js), Custom CSS animations
- **Icons:** Font Awesome 5
- **Performance:** WebP images, lazy loading, font preloading, combined & minified CSS/JS bundles
- **SEO:** JSON-LD structured data (Person, ScholarlyArticle, WebSite), Open Graph & Twitter Card meta tags, sitemap.xml
- **Build tooling:** Python 3, [YUI Compressor](https://github.com/yui/yuicompressor), [Google Closure Compiler](https://github.com/google/closure-compiler)

## Build and Deploy
This site uses a small Python build pipeline to combine and minify CSS/JS before deployment. The compressors require **Java JRE 21+** and **Python 3.10+**.

### One-shot build
 
Run all build steps with a single command:
 
```bash
python3 compressors/build.py
```
Has optional `--skip-css` and `--skip-js` boolean parameters if a step is to be skipped.

### Individual build steps
 
If you need to run steps individually:
 
```bash
# 1. Minify the main stylesheet (style.css -> style.min.css)
python3 compressors/minify_css.py
 
# 2. Combine all CSS into one bundle (styles/combined.min.css)
python3 compressors/combine_css.py
 
# 3. Combine and minify all JS (scripts/app.min.js)
python3 compressors/combine_minify_js.py
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Sebastian Mocanu - AI Research Scientist & PhD Candidate

- 🌐 Website: [sebastianmocanu.com](https://sebastianmocanu.com)
- 💼 LinkedIn: [Sebastian Mocanu](https://www.linkedin.com/in/sebastian-mocanu-b76a61184/)
- 🐙 GitHub: [@brittleru](https://github.com/brittleru)
- 📚 Google Scholar: [Sebastian Mocanu](https://scholar.google.com/citations?user=osyBED4AAAAJ&hl=en&oi=ao)
- 🔬 ORCID: [0009-0007-0313-4724](https://orcid.org/0009-0007-0313-4724)
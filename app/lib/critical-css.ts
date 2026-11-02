export const criticalCSS = `
html,body{margin:0;padding:0;background:#e9e6df;color:#0b0b0b;}
body{font-family:Outfit,sans-serif;-webkit-font-smoothing:antialiased;}
html[data-intro],html[data-intro] body,html[data-hero-pending],html[data-hero-pending] body{background:#0b0b0b;overflow:hidden;}
html[data-hero-pending] header{opacity:0;pointer-events:none;}
.intro-overlay{display:none;position:fixed;inset:0;z-index:200;align-items:center;justify-content:center;background:#0b0b0b;}
html[data-intro] .intro-overlay{display:flex;}
`
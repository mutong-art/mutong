// Apply a saved choice before the page paints. White is the default.
try{document.documentElement.dataset.theme=localStorage.getItem('mutong-theme')==='dark'?'dark':'light'}catch{document.documentElement.dataset.theme='light'}

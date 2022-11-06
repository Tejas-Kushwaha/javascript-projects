const labels = document.querySelectorAll('.form-control label')

labels.forEach(label =>{
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<spam style="transition-delay: ${idx*100}ms">${letter}</spam>`)
    .join('')
})
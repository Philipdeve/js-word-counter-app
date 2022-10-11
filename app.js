const textArea = document.getElementById('textarea');
const lettersCount = document.getElementById('letters-count');
const wordCount = document.getElementById('word-count');


const getInput = () => {
    lettersCount.textContent = textArea.value.length;
    const text = textArea.value.trim();
    wordCount.textContent = text.split(/\s+/).length;
}

textArea.addEventListener('input', getInput)


const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const angleInput = document.getElementById('angle');
const angleLabel = document.getElementById('angle-label');
const gradientContainer = document.querySelector('.gradient-container');
const cssCode = document.getElementById('css-code');

function updateGradient() {
    const color1 = color1Input.value;
    const color2 = color2Input.value;
    const angle = angleInput.value;
    
    const gradientValue = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

    gradientContainer.style.background = gradientValue;

    angleLabel.textContent = `Angle du dégradé: ${angle}°`;

    cssCode.textContent = `background: ${gradientValue};`;
}

color1Input.addEventListener('input', updateGradient);
color2Input.addEventListener('input', updateGradient);
angleInput.addEventListener('input', updateGradient);

updateGradient();
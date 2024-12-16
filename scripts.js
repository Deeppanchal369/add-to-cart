document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const radioButton = item.querySelector('input[type="radio"]');
        radioButton.addEventListener('change', () => {
            accordionItems.forEach(i => i.classList.remove('selected'));
            if (radioButton.checked) {
                item.classList.add('selected');
            }
        });
    });
});

function highlightAccordion(selectedInput) {
    const accordions = document.querySelectorAll('.accordion-item');
    accordions.forEach(item => item.classList.remove('selected'));
    const parentAccordion = selectedInput.closest('.accordion-item');
    if (parentAccordion) {
        parentAccordion.classList.add('selected');
    }
}
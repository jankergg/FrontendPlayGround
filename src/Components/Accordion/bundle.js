window.onload = function () {
  const multiSelect = document.getElementById('multiselect');
  const accordionItems = document.querySelectorAll('.accordion');
  const accordions = Array.from(accordionItems).map(item => {
    const title = item.querySelector('.title-section');
    const content = item.querySelector('.description');
    content.style.display = "none";
    const expandIcon = item.querySelector('.expand-icon');
    expandIcon.style.display = 'block';
    const collapseIcon = item.querySelector('.collapse-icon');
    collapseIcon.style.display = 'none';

    return {
      title,
      content,
      expandIcon,
      collapseIcon,
      clickEvent: undefined
    }
  });

  initAccordion(accordions, false);

  multiSelect.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    initAccordion(accordions, isChecked);
  });
};

function initAccordion(accordions, isMultiSelect = false) {
  accordions.forEach(accordion => {
    if (accordion.clickEvent) {
      accordion.title.removeEventListener('click', accordion.clickEvent);
    }
    accordion.clickEvent = () => {
      if (!isMultiSelect) {
        accordions.forEach(acc => acc !== accordion && toggleAccordion(acc, true))
      }
      toggleAccordion(accordion);
    }
    accordion.title.addEventListener('click', accordion.clickEvent);
  });
}

function toggleAccordion({ content, expandIcon, collapseIcon }, isExpanded) {
  isExpanded = isExpanded ?? content.style.display === 'block';
  content.style.display = isExpanded ? 'none' : 'block';
  expandIcon.style.display = isExpanded ? 'block' : 'none';
  collapseIcon.style.display = isExpanded ? 'none' : 'block';
}

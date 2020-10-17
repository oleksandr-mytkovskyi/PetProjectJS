function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const   tabs = document.querySelectorAll(tabsSelector),
            tabsContent = document.querySelectorAll(tabsContentSelector),
            tabsParents = document.querySelector(tabsParentSelector);

    function hideTabContent() {
        tabsContent.forEach(tab =>{
            tab.style.display = 'none';
        });
        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });

    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }
    hideTabContent();
    showTabContent();

    tabsParents.addEventListener('click', e =>{
        const target = e.target;
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });

        }
    });
}

export default tabs;
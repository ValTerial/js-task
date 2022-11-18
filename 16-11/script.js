const primary_btn = document.querySelector('#primary-btn');
const secondary_btn = document.querySelector('#secondary-btn');
const success_btn = document.querySelector('#success-btn');
let org_div = document.querySelector('#org-div');
const showNotification = (options) => {
    org_div.classList.remove('d-none');
    org_div.classList.add(options.className);
}

primary_btn.addEventListener('click', () => {
    let primary = document.createElement('div');
    primary.innerHTML  = '<div></div><p>Primary work!!!</p><button id="close-btn">x</button>';
    primary({className:'notification-secondary'})

    org_div.before(org_div, primary);
})


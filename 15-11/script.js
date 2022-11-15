const primary_btn = document.querySelector('#primary-btn');
const secondary_btn = document.querySelector('#secondary-btn');
const success_btn = document.querySelector('#success-btn');
const notification = document.querySelector('#notification');
const d_btn = document.querySelector('#d-btn');
const showNotification = (options) => {
    notification.classList.remove('d-none');
    notification.classList.add(options.className);
}

primary_btn.addEventListener('click',() => {
    showNotification({className:'notification-primary'});

    setTimeout( () => showNotification({className:'d-none'}), 5000)
})

secondary_btn.addEventListener('click', () => {
    showNotification({className:'notification-secondary'});

    setTimeout( () => showNotification({className:'d-none'}), 5000)
})

success_btn.addEventListener('click',() => {
    showNotification({className:'notification-success'})

    setTimeout( () => showNotification({className:'d-none'}), 5000)
})

d_btn.addEventListener('mousemove', () => {
    d_btn.style.backgroundColor = 'red';
})

d_btn.addEventListener('mouseout', () => {
    d_btn.style.backgroundColor = 'inherit';
})

d_btn.addEventListener('click', () => {
    showNotification({className:'d-none'})
})


/*const primary_btn = document.querySelector('#primary-btn');
primary_btn.style.width = '350px';
primary_btn.style.backgroundColor = 'red';*/

const inner_btn = document.querySelector('#inner-btn');
const outer_btn = document.querySelector('#outer-btn');
const create_p_btn = document.querySelector('#create-p');
const post_inner_html = document.querySelector('#post-html');
const post_outer_html = document.querySelector('#post-outer');
const post_table = document.querySelector('#table');

inner_btn.addEventListener('click', () => post_inner_html.innerHTML = '<p>innerHTML work!!</p>');

outer_btn.addEventListener('click', () => post_outer_html.outerHTML = '<p>outerHTML work!!</p>');

create_p_btn.addEventListener('click', () => {
    let new_li = document.createElement('li');
    new_li.innerHTML = '4 пункт';
    post_table.append(new_li);
})


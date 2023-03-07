const tabs = document.getElementsByClassName('c-product__tab');
for(let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', tabSwitch, false);
}

function tabSwitch(){
  // タブのclassの値を変更
  document.getElementsByClassName('is-active')[0].classList.remove('is-active');
  this.classList.add('is-active');
  // コンテンツのclassの値を変更
  document.getElementsByClassName('is-show')[0].classList.remove('is-show');
  const arrayTabs = Array.prototype.slice.call(tabs);
  const index = arrayTabs.indexOf(this);
  document.getElementsByClassName('c-product__panel')[index].classList.add('is-show');
};
let doesAnyHas = (element) => {
  let el = element.parent().children().filter( '.number--clicked' )
  return el[0];
}

let getNumber = value => value[0].classList[2].slice(-1);

let storage = (remove, name, item) => {
  if (remove) {
    return sessionStorage.removeItem(name);
  }
  return sessionStorage.setItem(name, getNumber(item));
}

$( '.number' ).click(function (e) {
  e.preventDefault();
  let el = $(this);
  let exist = doesAnyHas(el)

  if (!exist) {
    storage(false, 'selected', el);
    return el.addClass( 'number--clicked' );
  }
  else if (el[0].classList[2] === exist.classList[2]) {
    storage(true, 'selected');
    return el.removeClass( 'number--clicked' );
  }
  else {
    $('.' + exist.classList[2]).removeClass( 'number--clicked' );
    storage(true, exist.classList[2]);
    storage(false, 'selected', el);
    return el.addClass( 'number--clicked' );
  }
});

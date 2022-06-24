let doesAnyHas = (element) => {
  let el = element.parent().children().filter( '.number--clicked' )
  return el[0];
}

let getNumber = value => value[0].classList[2].slice(-1);

let storage = (remove, name, item) => {
  if (remove === 'remove') {
    return sessionStorage.removeItem(name);
  }
  return sessionStorage.setItem(name, getNumber(item));
}

$( '.number' ).click(function (e) {
  e.preventDefault();
  let el = $(this);
  let exist = doesAnyHas(el)

  if (!exist) {
    storage('', 'selected', el);
    return el.addClass( 'number--clicked' );
  }
  else if (el[0].classList[2] === exist.classList[2]) {
    storage('remove', 'selected');
    return el.removeClass( 'number--clicked' );
  }
  else {
    $('.' + exist.classList[2]).removeClass( 'number--clicked' );
    storage('remove', exist.classList[2]);
    storage('', 'selected', el);
    return el.addClass( 'number--clicked' );
  }
});

$( '.rating__btn' ).click( function (e) {
  let number = $( '.number' );
  if (!doesAnyHas(number)) {
    return e.preventDefault();
  }
})

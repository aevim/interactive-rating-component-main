$( '.rated__img' ).after('<p class="rated__got"></p>');
$('.rated__got' ).text(`You selected ${sessionStorage.getItem('selected')} out of 5`)


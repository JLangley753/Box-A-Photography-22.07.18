var servicesTab = document.querySelector('.servicestab');

document.querySelector('.services').onclick = toggleServices

function toggleServices() {
   servicesTab.classList.toggle('activeservices');
}

var connectTab = document.querySelector('.connecttab');

document.querySelector('.connect').onclick = toggleConnect

function toggleConnect() {
  connectTab.classList.toggle('activeconnect');
}


/* $(document).ready(() => {
  $('.photos p').hide();

  $('.photoblock').on('mouseover', function showCurrentCapt() {

    //finds photo caption for the photo clicked on, toggles it
    var caption = $(this).find('p');
    $(caption).slideToggle();

    //finds any other active captions and closes them
    var otherCap = $(this).siblings().find('p');
    $(otherCap).slideUp();
  })

  $('.services').on('click', function showServicesTab() {
    $('.servicestab').slideToggle(600);
    var otherTab = $('.connecttab');
    $(otherTab).slideUp(600);
  });

  $('.connect').on('click', function showConnectTab() {
    $('.connecttab').slideToggle(600);
    var otherTab = $('.servicestab');
    $(otherTab).slideUp(600);
  })
});
*/

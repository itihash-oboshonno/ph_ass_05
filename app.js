function showPageById (id) {
    // hide all sections
    document.getElementById('pageDonation').classList.add('hidden');
    document.getElementById('pageHistory').classList.add('hidden');
    // show clicked section
    document.getElementById(id).classList.remove('hidden')
}

document.getElementById('showPD').addEventListener('click', function(event) {
    event.preventDefault;
    console.log('Donation Clicked');
    showPageById('pageDonation');
})

document.getElementById('showPH').addEventListener('click', function(event) {
    event.preventDefault;
    console.log('History Clicked');
    showPageById('pageHistory');
})
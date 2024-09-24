// Button Toggle Page Show Feature: Start

    // Showing and Hiding Page
function showPageById (id) {
    // hide all sections
    document.getElementById('pageDonation').classList.add('hidden');
    document.getElementById('pageHistory').classList.add('hidden');
    // show clicked section
    document.getElementById(id).classList.remove('hidden');
}

document.getElementById('showPD').addEventListener('click', function(event) {
    event.preventDefault();
    showPageById('pageDonation');
})

document.getElementById('showPH').addEventListener('click', function(event) {
    event.preventDefault();
    showPageById('pageHistory');
})

    // Button Color On Toggle
function activePage (id) {
    // hide all sections
    document.getElementById('showPD').classList.add('bg-white', 'hover:bg-[#e9e9e9]', 'border-2', 'text-lblck');
    document.getElementById('showPH').classList.add('bg-white', 'hover:bg-[#e9e9e9]', 'border-2', 'text-lblck');
    // show clicked section
    document.getElementById(id).classList.remove('bg-white', 'hover:bg-[#e9e9e9]', 'border-2', 'text-lblck');
    document.getElementById(id).classList.add('bg-btngr', 'hover:bg-[#91e227]', 'text-blck');
}

document.getElementById('showPD').addEventListener('click', function() {
    activePage('showPD');
})

document.getElementById('showPH').addEventListener('click', function() {
    activePage('showPH');
})

// Button Toggle Page Show Feature: End
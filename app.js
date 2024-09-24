// Button Toggle Page Show Feature: Start

    // Showing and Hiding Page (COMMON FUNCTION 1)
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

    // Button Color On Toggle (COMMON FUNCTION 2)
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


// Donation Amount Function: Start

    // Noakhali
document.getElementById('donSubN').addEventListener('click', function(event) {
    const donAmount = parseFloat(document.getElementById('donNumN').value);
    const wallAmount = parseFloat(document.getElementById('wallet').innerText);
    const noaDon = parseFloat(document.getElementById('noakhali').innerText);
    if (donAmount <= 0 || donAmount > wallAmount) {
        alert('Invalid Amount');
    } else {
        event.preventDefault();
        const newWall = wallAmount - donAmount;
        document.getElementById('wallet').innerText = newWall;
        const noaNew = noaDon + donAmount;
        document.getElementById('noakhali').innerText = noaNew;
        document.getElementById('donNumN').value = "";
        // Transaction History
    }
})

    // Feni
document.getElementById('donSubF').addEventListener('click', function(event) {
    const donAmount = parseFloat(document.getElementById('donNumF').value);
    const wallAmount = parseFloat(document.getElementById('wallet').innerText);
    const fenDon = parseFloat(document.getElementById('feni').innerText);
    if (donAmount <= 0 || donAmount > wallAmount) {
        alert('Invalid Amount');
    } else {
        event.preventDefault();
        const newWall = wallAmount - donAmount;
        document.getElementById('wallet').innerText = newWall;
        const fenNew = fenDon + donAmount;
        document.getElementById('feni').innerText = fenNew;
        document.getElementById('donNumF').value = "";
    }
})

    // Quota
document.getElementById('donSubQ').addEventListener('click', function(event) {
    const donAmount = parseFloat(document.getElementById('donNumQ').value);
    const wallAmount = parseFloat(document.getElementById('wallet').innerText);
    const quoDon = parseFloat(document.getElementById('quota').innerText);
    if (donAmount <= 0 || donAmount > wallAmount) {
        alert('Invalid Amount');
    } else {
        event.preventDefault();
        const newWall = wallAmount - donAmount;
        document.getElementById('wallet').innerText = newWall;
        const quoNew = quoDon + donAmount;
        document.getElementById('quota').innerText = quoNew;
        document.getElementById('donNumQ').value = "";
    }
})
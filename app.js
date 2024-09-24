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


// Date and Time create:
const shomoy = new Date();
const date = shomoy.toString();


// Donation Amount Function: Start

    // Noakhali
document.getElementById('donSubN').addEventListener('click', function(event) {
    const donAmount = parseFloat(document.getElementById('donNumN').value);
    const wallAmount = parseFloat(document.getElementById('wallet').innerText);
    const noaDon = parseFloat(document.getElementById('noakhali').innerText);
    if (donAmount <= 0 || donAmount > wallAmount || isNaN(donAmount)) {
        alert('Invalid Amount');
    } else {
        event.preventDefault();
        const newWall = wallAmount - donAmount;
        document.getElementById('wallet').innerText = newWall;
        const noaNew = noaDon + donAmount;
        document.getElementById('noakhali').innerText = noaNew;
        document.getElementById('confModal').showModal();
        
        // Transaction History
        document.getElementById('histUL').innerHTML += `<li class="p-6 rounded-2xl border-2 my-8 lg:max-w-6xl m-auto">
                        <h3 class="font-bold text-xl text-blck"><span>${donAmount}</span> BDT Donated for Flood at Noakhali, Bangladesh.</h3>
                        <p class="text-lblck text-base font-light pt-4">Date: ${date}</p>
                    </li>`;
    }
})

    // Feni
document.getElementById('donSubF').addEventListener('click', function(event) {
    const donAmount = parseFloat(document.getElementById('donNumF').value);
    const wallAmount = parseFloat(document.getElementById('wallet').innerText);
    const fenDon = parseFloat(document.getElementById('feni').innerText);
    if (donAmount <= 0 || donAmount > wallAmount || isNaN(donAmount)) {
        alert('Invalid Amount');
    } else {
        event.preventDefault();
        const newWall = wallAmount - donAmount;
        document.getElementById('wallet').innerText = newWall;
        const fenNew = fenDon + donAmount;
        document.getElementById('feni').innerText = fenNew;
        document.getElementById('confModal').showModal();
        
        // Transaction History
        document.getElementById('histUL').innerHTML += `<li class="p-6 rounded-2xl border-2 my-8 lg:max-w-6xl m-auto">
                        <h3 class="font-bold text-xl text-blck"><span>${donAmount}</span> BDT Donated for Flood Relief at Feni, Bangladesh.</h3>
                        <p class="text-lblck text-base font-light pt-4">Date: ${date}</p>
                    </li>`;
    }
})

    // Quota
document.getElementById('donSubQ').addEventListener('click', function(event) {
    const donAmount = parseFloat(document.getElementById('donNumQ').value);
    const wallAmount = parseFloat(document.getElementById('wallet').innerText);
    const quoDon = parseFloat(document.getElementById('quota').innerText);
    if (donAmount <= 0 || donAmount > wallAmount || isNaN(donAmount)) {
        alert('Invalid Amount');
    } else {
        event.preventDefault();
        const newWall = wallAmount - donAmount;
        document.getElementById('wallet').innerText = newWall;
        const quoNew = quoDon + donAmount;
        document.getElementById('quota').innerText = quoNew;
        document.getElementById('confModal').showModal();
        
        // Transaction History
        document.getElementById('histUL').innerHTML += `<li class="p-6 rounded-2xl border-2 my-8 lg:max-w-6xl m-auto">
                        <h3 class="font-bold text-xl text-blck"><span>${donAmount}</span> BDT Donated for Aid for Injured in the Quota Movement.</h3>
                        <p class="text-lblck text-base font-light pt-4">Date: ${date}</p>
                    </li>`;
    }
})

// Donation Amount Function: End


// Reseting All The Inputs After Confirming

function resetAfterDone() {
    document.getElementById('donNumN').value = "";
    document.getElementById('donNumF').value = "";
    document.getElementById('donNumQ').value = "";
}

document.getElementById('rstbtn').addEventListener('click', function() {
    resetAfterDone();
})
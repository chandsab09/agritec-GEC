const form = document.getElementById("landForm");
const table = document.getElementById("landTable");

let lands = JSON.parse(localStorage.getItem("lands")) || [];

function displayLands() {
    table.innerHTML = "";

    lands.forEach((land, index) => {
        table.innerHTML += `
            <tr>
                <td>${land.name}</td>
                <td>${land.location}</td>
                <td>${land.area} Acres</td>
                <td>${land.soil}</td>
                <td>
                    <button onclick="deleteLand(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const land = {
        name: document.getElementById("farmerName").value,
        location: document.getElementById("location").value,
        area: document.getElementById("area").value,
        soil: document.getElementById("soil").value
    };

    lands.push(land);

    localStorage.setItem("lands", JSON.stringify(lands));

    displayLands();
    form.reset();

    alert("Land details added successfully!");
});

function deleteLand(index) {
    lands.splice(index, 1);
    localStorage.setItem("lands", JSON.stringify(lands));
    displayLands();
}

displayLands();
let database = [
  {
    id: 1,
    nama: "Resy",
    alamat: "Jalan Maju B42, Pamulang",
    noHp: "0809876543",
    email: "resy@gmail.com",
    destinasi: "Surabaya",
  },
  {
    id: 2,
    nama: "Michael",
    alamat: "Jalan Karpet 12, Tangerang",
    noHp: "08132784905",
    email: "michael@gmail.com",
    destinasi: "Tangerang",
  },
  {
    id: 3,
    nama: "Kevin",
    alamat: "Jalan kinton 32, sdjvoij",
    noHp: "0823746726",
    email: "kevin@gmail.com",
    destinasi: "Jakarta",
  },
  {
    id: 4,
    nama: "Abi",
    alamat: "Jalan lksljkl, oijoij",
    noHp: "0809876543",
    email: "Abi@gmail.com",
    destinasi: "Surabaya",
  },
  {
    id: 5,
    nama: "Resy2",
    alamat: "Jalan Maju B42, Pamulang",
    noHp: "0809876543",
    email: "resy@gmail.com",
    destinasi: "Surabaya",
  },
];

//untuk ambil id form
const form = document.getElementById("form");
const submitButton = document.getElementById("submit-button");
let counter = 0;
// console.log(form);
// console.log(document.querySelectorAll(`#form input`));
function submitForm(event) {
  event.preventDefault();
  const formInput = document.querySelectorAll(`#form input`);

  //validasi
  for (let i = 0; i < formInput.length; i++) {
    if (formInput[i].value.length === 0) {
      return alert("Mohon diisi dulu input nya");
    }
  }

  let array = [];
  for (let i = 0; i < formInput.length; i++) {
    // console.log(formInput[i].value);
    array.push(formInput[i].value);
  }
  // console.log(array);

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    tr.remove();
  });

  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const td5 = document.createElement("td");
  const td6 = document.createElement("td");

  td1.innerText = array[0];
  td2.innerText = array[1];
  td3.innerText = array[2];
  td4.innerText = array[3];
  td5.innerText = array[4];
  td6.append(deleteButton);

  tr.append(td1, td2, td3, td4, td5, td6);

  items.append(tr);

  // Reset
  //   formInput.value = "";
  for (let i = 0; i < formInput.length; i++) {
    formInput[i].value = "";
  }
}

//saat klik submit button
submitButton.addEventListener("click", function (event) {
  submitForm(event);
});

function render() {
  //   console.log(database);
  let items = document.getElementById("items");
  for (let i = 0; i < database.length; i++) {
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      tr.remove();
    });

    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");

    td1.innerText = database[i].nama;
    td2.innerText = database[i].alamat;
    td3.innerText = database[i].noHp;
    td4.innerText = database[i].email;
    td5.innerText = database[i].destinasi;
    td6.append(deleteButton);

    tr.append(td1, td2, td3, td4, td5, td6);

    items.append(tr);
    /*
    tr
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    /tr
    */
  }
}
render();

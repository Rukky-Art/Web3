const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  let div = document.createElement("div");
  
  const Table = (props) => {
    let table = document.createElement("table");
    let tr = document.createElement("tr");
    

    // header
    for (let key of Object.keys(props[0])) {
      let th = document.createElement("th");
      th.textContent = key;
      tr.appendChild(th);
    }
    table.appendChild(tr);

    // rows
    for (let value of props) {
      let tr = document.createElement("tr");
      for (let key of Object.keys(value)) {
        let td = document.createElement("td");
        td.textContent = value[key];
        if (typeof value[key] === "number") {
          td.style.textAlign = "right";
        }
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }

    return table;
  };

  let header = document.createElement("h1")
  header.textContent = "Mountains"
  div.appendChild(Table(MOUNTAINS));
  document.body.appendChild(header);
  document.body.appendChild(div);



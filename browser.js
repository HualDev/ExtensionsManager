fetch('data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('We can´t upload the JSON file');
        }
        return response.json();
      })
      .then(data => {
        // Mostrar datos en consola
        console.log(data[0].name);
      console.log(data[1].name);})

const lens = document.createElement("div")
lens.textContent = 0
document.getElementById("list").appendChild(lens)
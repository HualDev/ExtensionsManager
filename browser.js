fetch('data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('We can´t upload the JSON file');
        }
        return response.json();
      })
      .then(data => {
        console.log(data[0].name);
      console.log(data[0].logo);
    
      const lens = document.createElement('h1')
      const img = document.createElement('img')
      const p = document.createElement('p')
      const div = document.createElement('div')

      lens.textContent = data[0].name
      img.src = data[0].logo
      p.textContent = data[0].description
      div.textContent = 'Remove'
      


      document.getElementById('image').appendChild(img)
      document.getElementById("lens").appendChild(lens)
      document.getElementById('lens').appendChild(p)
      document.getElementById('action').appendChild(div)
    
    })


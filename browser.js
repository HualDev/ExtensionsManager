fetch('data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('We can´t upload the JSON file');
        }
        return response.json();
      })
      .then(data => {
        const list = document.getElementById('list')
        data.forEach(element => {
          const div = document.createElement('div');
          div.classList.add('list')
          div.innerHTML = `
                            <div class= 'top'>
                              <img src = ${element.logo}>
                              <div class='description'>
                                <h1> ${element.name}</h1>
                                <p>${element.description}</p>
                              </div>
                            </div>
                            <div class='action'>
                              <div class="button">Remove</div>
                              <div class="state"> <div class="circle"></div> </div>
                            </div>
                            `
          list.appendChild(div)
        });
    
    })


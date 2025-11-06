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
                              <div class=${element.isActive ? "state" : "state-left"}>
                                <div class="circle"></div>
                              </div>
                            </div>
                            `
          list.appendChild(div)
        });

        document.getElementById("active").addEventListener("click",() =>{
          const list = document.getElementsByClassName("list")
          document.getElementById('active').classList.add('red-color')
          document.getElementById('all').classList.remove('red-color')
          document.getElementById('inactive').classList.remove('red-color')
          for(let i =0; i<data.length;i++){
            data[i].isActive ? list[i].classList.add('active-list') :  list[i].classList.add('inactive-list')
            data[i].isActive ? list[i].classList.remove('inactive-list') :  list[i].classList.remove('active-list')
          }
        })

        document.getElementById('inactive').addEventListener('click', () =>{
          const list = document.getElementsByClassName('list')
          document.getElementById('inactive').classList.add('red-color')
          document.getElementById('all').classList.remove('red-color')
          document.getElementById('active').classList.remove('red-color')
          for(let i= 0; i< data.length; i++){
            data[i].isActive ? list[i].classList.remove('active-list') : list[i].classList.remove('inactive-list')
            data[i].isActive ? list[i].classList.add('inactive-list') : list[i].classList.add('active-list')
          }
        })

        document.getElementById('all').addEventListener('click', () =>{
          const list = document.getElementsByClassName('list')
          document.getElementById('all').classList.add('red-color')
          document.getElementById('inactive').classList.remove('red-color')
          document.getElementById('active').classList.remove('red-color')
          for(let i=0;i<list.length;i++){
            list[i].classList.add('active-list')
            list[i].classList.remove('inactive-list')
          }
        })
    })


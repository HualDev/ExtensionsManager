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
          div.classList.add('list', 'dark-list')
          div.innerHTML = `
                            <div class= 'top'>
                              <img src = ${element.logo}>
                              <div class='description'>
                                <h1 id='name' class='dark-h1 name'> ${element.name}</h1>
                                <p id='description' class='dark-p description'>${element.description}</p>
                              </div>
                            </div>

                            <div class='action'>
                              <div id='button' class="button button-dark">Remove</div>
                              <div class=${element.isActive ? "state" : "state-left"}>
                                <div class="circle"></div>
                              </div>
                            </div>
                            `
          list.appendChild(div)
        });

        document.getElementById('dark-light').addEventListener('click', () =>{
          document.getElementById('body').classList.toggle('light-body')
          document.getElementById('body').classList.toggle('dark-body')
          document.getElementById('header').classList.toggle('light-header')
          document.getElementById('header').classList.toggle('dark-header')
          document.getElementById('h1').classList.toggle('light-h1')
          document.getElementById('h1').classList.toggle('dark-h1')
          const back = document.getElementsByClassName('back')
          for(let i=0; i<back.length;i++){
            back[i].classList.toggle('light-back')
            back[i].classList.toggle('dark-back')
          }
          const list = document.getElementsByClassName('list')
          
          
          
          for(let i=0; i<list.length; i++){
            list[i].classList.toggle('light-list')
            list[i].classList.toggle('dark-list')
          }
          const name = document.getElementsByClassName('name')
          for(let i=0;i<name.length;i++){
            name[i].classList.toggle('light-h1')
            name[i].classList.toggle('dark-h1')
          }
          const description = document.getElementsByClassName('description')
          for(let i=0; i<description.length;i++){
            description[i].classList.toggle('light-p')
            description[i].classList.toggle('dark-p')
          }
          const button = document.getElementsByClassName('button')
          for(let i=0; i<button.length; i++){
            button[i].classList.toggle('button-light')
            button[i].classList.toggle('button-dark')
          }
         
        })

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


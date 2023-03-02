const saveButton = document.getElementById('saveButton');
  saveButton.addEventListener('click', function() {
    // localStorage.clear()
    // console.log(localStorage)
    const d = new Date();
    let key = d.getTime();

    const date = document.getElementById('date').value;
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    const threebar = document.getElementById('3bar').value;
    const onebar = document.getElementById('1bar').value;
    const hours = document.getElementById('night').value;
    const total = document.getElementById('total').value;

    let obj = {
        'date': date, 
        'start': start, 
        'end': end, 
        'threebar': threebar, 
        'onebar': onebar, 
        'hours': hours, 
        'total': total
    }

    localStorage.setItem(key, JSON.stringify(obj))


    

    // Do something with the values, such as save them to a variable or send them to a server
  });
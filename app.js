

const next_box = document.getElementById('next-event')

const tm_url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.TM_API_KEY}&venueId=KovZpZAF6tIA&locale=*`


window.addEventListener('load', () => {
    let allEvents = []
    getEvents(tm_url, allEvents, success, fail)
})

function success(eventlist){
    myEvents.sort((a, b) => {
        let da = new Date(a.dateTime),
            db = new Date(b.dateTime);
        return da - db;
    });

    eventlist.forEach(e => {
        displayEvent(e)
    })
}

function fail(){
    console.log(`fail`)
}

const getEvents = (url, events, resolve, reject) => {
    fetch(url, {method: "GET"})
        .then((response) =>  response.json())
        .then((data) => {
            myEvents = []
            numEvents = data.page.totalElements

            data._embedded.events.forEach(e => {
                let curEvent = {
                    name: e.name,
                    date: e.dates.start.localDate,
                    time: e.dates.start.localTime,
                    dateTime: e.dates.start.dateTime
                }

                events.push(curEvent)
            })

            // console.log(data)
            

            if(data._links.next){
                // console.log(`GET_EVENTS - Events Array Length: ${events.length}`)
                // console.log("GET_EVENTS - Opening next page")

                let nexturl = data._links.next.href
                let urlEnd = data._links.next.href.slice(nexturl.indexOf("&"))
                let nextLink = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.TM_API_KEY}&venueId=KovZpZAF6tIA`.concat(urlEnd)
                
                getEvents(nextLink, events, resolve, reject)

            }else{
                
                if(events.length === data.page.totalElements){
                    console.log(`GET_EVENTS - Success! Retrieved ${events.length} events`)
                    resolve(events)
                }else{
                    throw(console.error(`GET EVENTS ERROR: 
                    Total Events = ${data.page.totalElements}
                    Events Retrieved = ${events.length}`))
                }
                
            }
        })
}

function displayEvent(e){
    
    const eName = document.createElement("p")
    const eDate = document.createElement("p")
    const eTime = document.createElement("p")
    const image = document.createElement('img')
    
    // image.src = img
    eName.innerText = e.name
    eDate.innerText = e.date
    eTime.innerText = e.time

    // next_box.appendChild(image)
    next_box.appendChild(eName)
    next_box.appendChild(eDate)
    next_box.appendChild(eTime)
}



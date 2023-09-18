import { useState, useEffect } from "react"
import './FetchData.css'

export default function FetchData() {
  const [events, setEvents] = useState([]);
  
  useEffect(() =>{
    getAllEvents()
  }, []);

  const getAllEvents = async () =>{
    let result = [];
    const tm_url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.REACT_APP_API_KEY}&venueId=KovZpZAF6tIA&locale=*`

    let url = tm_url

    do{
      const response = await fetch(url)
        .then((res) => res.json())

      result.push(...response._embedded.events)

      if(response._links.next){
        const next = response._links.next.href
        url = tm_url + next.slice(next.indexOf("&page="))
      }else{
        url = null
      }
    }while(url)

    result.sort((a, b) => new Date(a.dates.start.localDate) - new Date(b.dates.start.localDate));

    setEvents(result)
  }

  return (
    <>
      <section id="all-events">
        <div className="events-container">
          {
            events.map((event, index) => {
              return <div key={index} className="event-container">
                  <div className="event-content">
                  <h2>{index + 1}. {event.name}</h2>
                  <p>{event.dates.start.localDate}</p>
                  <p>{event.dates.start.localTime}</p>
                  <img src={event.images[1].url} alt="" />
                  </div>
                </div>
            })
          }
        </div>
      </section>
    </>
  )
}
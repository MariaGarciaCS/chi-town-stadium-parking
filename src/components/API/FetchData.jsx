import { useState, useEffect } from "react"

export default function FetchData() {
  const [events, setEvents] = useState();
  
  const tm_api = process.env.REACT_APP_API_KEY;
  const tm_url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${tm_api}&venueId=KovZpZAF6tIA&locale=*`

  useEffect(() =>{
    getEvents()
  }, []);

  const getEvents = async () =>{
    const response = await fetch(tm_url).then((res) => res.json());

    setEvents(await response._embedded.events)
  }

  // fetch(tm_url)
  //   .then((response) =>  response.json())
  //   .then((json) => {
  //     console.log(json._embedded.events)
  //     setevents(json._embedded.events)
  //   })
  //   .catch((err) => console.log(err))

  return (
    <>
      <div>
        <ul>
          {
            events.map((event, index) => {
              return <div key={index} className="event">
                 <h2>{index + 1}. {event.name}</h2>
                 <p>{event.dates.start.localDate}</p>
                 <p>{event.dates.start.localTime}</p>
                 <img src={event.images[1].url} alt="" />
                </div>
            })
          }
        </ul>
      </div>
    </>
  )
}
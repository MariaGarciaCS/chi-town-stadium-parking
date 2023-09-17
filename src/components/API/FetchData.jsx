import { useState, useEffect } from "react"


export default function FetchData() {
  const [events, setevents] = useState();
  
  const tm_api = ''
  const tm_url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${tm_api}&venueId=KovZpZAF6tIA&locale=*`

  useEffect(() =>{
    fetch(tm_url)
    .then((response) =>  response.json())
    .then((json) => {
      console.log(json._embedded.events)
      setevents(json._embedded.events)
    })
  }, []);

  console.log(typeof(events.name))

  console.log(events[0].name)

  return (
    <>
      <h2>Upcoming Events</h2>
      {events.map((event) => {
        return <p>{event.name}</p>
      })}
    </>
  )
}
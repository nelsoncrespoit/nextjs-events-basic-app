import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/event-search";

function AllEventsPage(){
    const events = getAllEvents();
    const router = useRouter();

    function findsEventsHandler(year, month){
        const fullPath = `/events/${year}/${month}`;        
        router.push(fullPath);
    };
    
    return(
        <Fragment>
            <EventsSearch onSearch={findsEventsHandler}/>
            <EventList items={events}/>
        </Fragment>
    );
};

export default AllEventsPage;
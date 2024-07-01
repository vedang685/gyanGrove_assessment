const Url = "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco";
const manipulatedEvents = async (): Promise<any> => {
    try {
        const response = await fetch(Url);
        const events = await response.json();
        let counter = 1;
        const manipulated_events: { [key: string]: any } = {};

        for (const [key, value] of Object.entries(events)) {
            if (key === "events" && Array.isArray(value)) {
                value.forEach((element: any) => {
                    manipulated_events[String(counter)] = element;
                    counter++;
                });
            }
        }
        return manipulated_events;
    } catch (error) {
        console.error("Error fetching/manipulating events:", error);
        throw error;
    }
};

export default manipulatedEvents;

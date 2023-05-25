import HTTP from "../utils/HTTP";
import axios from "axios";
const EventService = {
  createEvent: (body) =>
    HTTP.post(
      "https://2w9jetwogf.execute-api.ap-northeast-2.amazonaws.com/v1/events",
      JSON.stringify(body)
    ),
  getEvents: () =>
    HTTP.get(
      "https://otzj6gj66g.execute-api.ap-northeast-2.amazonaws.com/v1/events"
    ),
  getEventDetail: (event_id) =>
    HTTP.get(
      `https://ktl9paw7sk.execute-api.ap-northeast-2.amazonaws.com/v1/events?eventid=${event_id}`
    ),
  getHostEvents: (host_id) =>
    axios.get(
      `https://otzj6gj66g.execute-api.ap-northeast-2.amazonaws.com/v1/events?hostid=${host_id}`
    ),

  getJoinEvents: (joinid) =>
    HTTP.get(
      `https://f5h61iwjxc.execute-api.ap-northeast-2.amazonaws.com/v1/events?joinid=${joinid}`
    ),
  deleteEvent: (eventid) =>
    HTTP.delete(
      `https://katiu8uvv2.execute-api.ap-northeast-2.amazonaws.com/v1/events?eventid=${eventid}`
    ),
};

export default EventService;

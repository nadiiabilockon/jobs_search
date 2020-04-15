import React from "react";
import { ListGroup } from "react-bootstrap";

export default function (props: { keywords: string; location: string }) {
  return (
    <ListGroup>
      <ListGroup.Item>
        <a
          target="_blank"
          href={`https://www.linkedin.com/jobs/search/?geoId=90010124&keywords=${props.keywords}&location=${props.location}&sortBy=DD`}
        >
          LinkedIn
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a
          target="_blank"
          href={`http://www.jobsinhelsinki.com/search?q=${props.keywords}`}
        >
          Jobs in Helsinki
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a
          target="_blank"
          href={`https://fi.indeed.com/jobs?q=${props.keywords}&l=${props.location}&ts=1586948751141&pts=1586431031601&rq=1&rsIdx=0&fromage=last&newcount=1`}
        >
          Indeed
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a
          target="_blank"
          href={`https://duunitori.fi/tyopaikat/?haku=${props.keywords}&alue=${props.location}`}
        >
          Duunitori
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a
          target="_blank"
          href={`https://thehub.io/jobs?search=${props.keywords}&location=${props.location},%20Finland&countryCode=FI`}
        >
          The Hub
        </a>
      </ListGroup.Item>
    </ListGroup>
  );
}

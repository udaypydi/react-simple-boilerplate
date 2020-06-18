import React from 'react';
import { Accordion, Card, ListGroup } from 'react-bootstrap';
import Link from 'next/link';

const LeftSideBar = ({topics, activeDoc}) => {
  return (    
    <Accordion defaultActiveKey="0">
      {Object.keys(topics).map((topic, index) => (
        <Card key={index}>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey={`${index}`}>
            {topic}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={`${index}`}>
            <Card.Body>
              <ListGroup as="ul">
                {topics[topic].map(({title, id}, index) => (
                  <Link key={index} href='/docs/[id]' as={`/docs/${id}`}>
                    <a>
                      <ListGroup.Item as="li">
                        {title}
                      </ListGroup.Item>
                    </a>
                  </Link>
                ))}
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

export default LeftSideBar;
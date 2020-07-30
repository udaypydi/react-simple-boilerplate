import React, { useState, useEffect } from 'react';
import TopicLinks from './topic-links';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const TopicsModal = ({ topics, activeDoc, activeTopic }) => {
  const [show, set] = useState(false)

  const onClick = () => set(!show)
  
  useEffect(() => set(false), [activeTopic, activeDoc])

  return (
    <>
      <button className='d-lg-none position-absolute btn btn-light' style={{ zIndex: 11, top: '90%', right: '2rem' }} onClick={onClick}><FontAwesomeIcon icon={show? faTimes : faBars} /></button>
      <div className={`d-lg-none position-absolute bg-white ${!show? 'd-none' : ''}`} style={{ width: '100%', height: '100%', zIndex: 10 }} >
        <Container>
          <TopicLinks topics={topics} activeDoc={activeDoc} activeTopic={activeTopic} />
        </Container>
      </div>
    </>
  );
};

export default TopicsModal;
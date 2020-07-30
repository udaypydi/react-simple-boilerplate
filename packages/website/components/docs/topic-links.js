import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const TopicLinks = ({topics, activeTopic, activeDoc}) => {

  const [expanded, setExpanded] = useState(activeTopic)
  const [hoverType, setHoverType] = useState('')
  const [currentHover, setCurrentHover] = useState('')

  const onTopicMouseEnter = (topic) => {
    setCurrentHover(topic)
    setHoverType('topic')
  }

  const onDocMouseEnter = (doc) => {
    setCurrentHover(doc)
    setHoverType('doc')
  }

  const onMouseLeave = () => {
    setCurrentHover('')
    setHoverType('')
  }

  useEffect(() => console.log('render'))

  return (
    <div>
      {Object.keys(topics).map((topic, index) => (
        <div key={index} className='px-2'>
          <div 
            className={`d-flex w-100 rounded p-1 ${currentHover === topic && hoverType === 'topic'? 'bg-light' : ''} ${activeTopic === topic? 'text-primary' : ''}`} 
            style={{ cursor: 'pointer' }} 
            onClick={() => setExpanded(topic === expanded? '': topic)}
            onMouseEnter={() => onTopicMouseEnter(topic)}
            onMouseLeave={onMouseLeave} >
            <div className='mr-auto'>{topic}</div>
            <div><FontAwesomeIcon icon={topic === expanded? faChevronUp : faChevronDown} /></div>
          </div>
          <div className={`pl-2 ${topic !== expanded? 'd-none' : ''}`} >
            {topics[topic].map(({title, id}, index) => (
              <Link key={index} href='/docs/[id]' as={`/docs/${id}`}>
                <a className='text-decoration-none'>
                  <div
                    className={`rounded p-1 ${currentHover === title && hoverType === 'doc'? 'bg-light' : ''} ${activeDoc === title? 'text-primary' : 'text-dark'}`}
                    onMouseEnter={() => onDocMouseEnter(title)}
                    onMouseLeave={onMouseLeave} >
                    {title}
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicLinks;
import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllDocIds, getDocData, getTopicWiseSortedDocsData } from '../../lib/docs'
import DocContent from '../../components/docs/doc-content'
import { Row, Col, Container } from 'react-bootstrap'
import TopicLinks from '../../components/docs/topic-links'
import TopicsModal from '../../components/docs/topics-modal'

export default function Doc({ docData, topics }) {
  return (
    <Layout>
      <Head>
        <title>{docData.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Row className='w-100'>
        <Col lg={3} className='d-none d-lg-block'><TopicLinks topics={topics} activeDoc={docData.title} activeTopic={docData.topic} /></Col>
        <Col>
          <Container><DocContent title={docData.title} content={docData.contentHtml} /></Container>
        </Col>
      </Row> 
      <TopicsModal topics={topics} activeDoc={docData.title} activeTopic={docData.topic} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllDocIds()
  return {
    paths, 
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const docData = await getDocData(params.id) 
  const topics = getTopicWiseSortedDocsData()
  return {
    props: {
      docData,
      topics
    }
  }
}

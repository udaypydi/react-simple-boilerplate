import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllDocIds, getDocData, getTopicWiseSortedDocsData } from '../../lib/docs'
import LeftSideBar from '../../components/docs/left-side-bar'
import DocContent from '../../components/docs/doc-content'
import { Row, Col } from 'react-bootstrap'

export default function Doc({ docData, topics }) {
  return (
    <Layout>
      <Head>
        <title>{docData.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row>
        <Col md={3}><LeftSideBar topics={topics} activeDocIndex={docData.index} /></Col>
        <Col><DocContent title={docData.title} content={docData.contentHtml} /></Col>
      </Row> 
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

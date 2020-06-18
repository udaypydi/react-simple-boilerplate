import Layout from '../../components/layout'
import Head from 'next/head'
import { getTopicWiseSortedDocsData } from '../../lib/docs'
import Link from 'next/link'

export default function Docs({ topicWiseDocsData }) {
  return (
    <Layout>
      <Head>
        <title>Docs</title>
      </Head>
      <section>
        React Simple Boilerplate docs are catagorized in following sections:
        <ul>
          {Object.keys(topicWiseDocsData).map((topic, index) => (
            <li key={index}>
              {topic}
              <ul>
                {topicWiseDocsData[topic].map(({title, id}, index) => (
                  <li key={index}><Link href='/docs/[id]' as={`/docs/${id}`}><a>{title}</a></Link></li>
                ))}
              </ul> 
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const topicWiseDocsData = getTopicWiseSortedDocsData()
  return {
    props: {
      topicWiseDocsData
    }
  }
}

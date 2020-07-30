import fs from 'fs'
import path from 'path'
import * as matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const docsDirectory = path.join(process.cwd(), 'docs')

export function getTopicWiseSortedDocsData() {
  // Get file names under /docs
  const fileNames = fs.readdirSync(docsDirectory)
  const allDocsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(docsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the doc metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })

  // Sort posts by topic and index
  let topicWiseDocs = {}
  allDocsData.map(doc => {
    if(!topicWiseDocs[doc.topic]) {
      topicWiseDocs[doc.topic] = []
    } 
    topicWiseDocs[doc.topic].push(doc)
  })
  Object.keys(topicWiseDocs).map(topic => {
    topicWiseDocs[topic] = topicWiseDocs[topic].sort((a, b) => {
      if (a.index > b.index) {
        return 1
      } else {
        return -1
      }
    })
  })

  return topicWiseDocs
}

export function getAllDocIds() {
  const fileNames = fs.readdirSync(docsDirectory)
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getDocData(id) {
  
  const fullPath = path.join(docsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}

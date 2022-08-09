import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import {sortByDate} from '../utils'
export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Kamlesh&apos;s Blog</title>
      </Head>

      <div className='posts'>
        {posts.map((post, index)=>(
         <Post key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps(){

  // Get files form the posts directory
  const files = fs.readdirSync(path.join('posts'))
  

  // Get slug and front matter from post
  const posts = files.map(filename =>{

    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename), 'utf-8')
    
    const {data:frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter 
    }
  })
  
 
  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  }

}
import React from 'react'
import styles from './BlogPage.scss'
class BlogPage extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className={styles.container}>BlogPage</div>
    )
  }
}
export default BlogPage
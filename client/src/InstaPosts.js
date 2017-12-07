import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
}

const InstaPosts = ({posts, deletePost, viewPost}) => {
  // console.log(posts)
  return (
    <div style={styles.container}>
      {
        posts.map((item, index) => {
          return <Post
            key={index}
            post={item}
            deletePost={deletePost}
            viewPost={viewPost}
          />
        })
      }
    </div>
  )
}

InstaPosts.propTypes = {
  posts: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired,
  viewPost: PropTypes.func.isRequired
}

export default InstaPosts

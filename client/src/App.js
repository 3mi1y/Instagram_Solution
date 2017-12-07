import React, {Component} from 'react'
import Header from './Header'
import Form from './Form'
import InstaPosts from './InstaPosts'
import $ from 'jquery'

const styles = {
  container: {
    backgroundColor: 'rgb(250, 250, 250)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

class App extends Component {
  state = {
    posts: undefined,
    title: undefined,
    img: undefined,
    caption: undefined,
    userName: undefined
  }

  componentDidMount () {
    this.loadPostsFromServer()
  }

  loadPostsFromServer = () => {
    $.ajax({
      url: '/api/instaPost',
      method: 'GET'
    }).done((response) => {
      this.setState({ posts: response.data })
    })
  }

  insertPostIntoDatabase = (e) => {
    e.preventDefault()
    const newPost = {
      title: this.state.title,
      img: this.state.img,
      caption: this.state.caption,
      userName: this.state.userName
    }

    $.ajax({
      url: '/api/instaPost',
      method: 'POST',
      data: newPost
    }).done(response => {
      console.log(response)
      this.loadPostsFromServer()
    })
  }

  onTitleChange = (e) => this.setState({ title: e.target.value })
  onCaptionChange = (e) => this.setState({ caption: e.target.value })
  onImageChange = (e) => this.setState({ img: e.target.value })
  onUserNameChange = (e) => this.setState({ userName: e.target.value })
  deletePost = (post) => {
    console.log(`Post id ${post._id}`)
    $.ajax({
      url: `/api/instaPost/${post._id}`,
      method: 'DELETE'
    }).done(response => {
      console.log(response)
      this.loadPostsFromServer()
    })
  }

  viewPost = (post) => {
    console.log(`Post: ${post._id}`)
    alert(`Title: ${post.title}, Caption: ${post.caption}`)
  }

  render () {
    return (
      <div style={styles.container}>
        <Header />
        <Form
          onCaptionChange={this.onCaptionChange}
          onTitleChange={this.onTitleChange}
          onImageChange={this.onImageChange}
          onUserNameChange={this.onUserNameChange}
          insertPostIntoDatabase={this.insertPostIntoDatabase}
        />
        {
          this.state.posts
            ? <InstaPosts posts={this.state.posts} deletePost={this.deletePost} viewPost={this.viewPost} />
            : 'Posts are loading'
        }
      </div>
    )
  }
}

export default App

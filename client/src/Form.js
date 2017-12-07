import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '50%'
  },
  inputElement: {
    fontFamily: 'Raleway',
    fontSize: '20px',
    padding: '3%',
    margin: '1%',
    width: '100%',
    border: '1px solid #cecece',
    borderRadius: '4px',
    boxSizing: 'border-box'
  },
  button: {
    backgroundColor: '#ffffff',
    border: '1px solid #cecece',
    color: 'rgb(117, 117, 117)',
    padding: '15px',
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontSize: '15px',
    marginTop: '3%'
  }
}

const Form = ({onTitleChange, onImageChange, onCaptionChange, onUserNameChange, insertPostIntoDatabase}) =>
  <form style={styles.container} >
    <input type='text' style={styles.inputElement} placeholder='Title of your post goes here...' onChange={onTitleChange} />
    <input type='text' style={styles.inputElement} placeholder='Add an awesome image!!!' onChange={onImageChange} />
    <input type='text' style={styles.inputElement} placeholder='Tell us all about it.' onChange={onCaptionChange} />
    <input type='text' style={styles.inputElement} placeholder='Your username' onChange={onUserNameChange} />
    <button onClick={insertPostIntoDatabase} style={styles.button}>Submit New Post</button>
  </form>

Form.propTypes = {
  onTitleChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onCaptionChange: PropTypes.func.isRequired,
  onUserNameChange: PropTypes.func.isRequired,
  insertPostIntoDatabase: PropTypes.func.isRequired
}

export default Form

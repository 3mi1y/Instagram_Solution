import React from 'react'

const styles = {
  container: {
    fontFamily: 'Pacifico',
    borderBottom: '1px solid #cecece',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
    backgroundColor: 'white',
    width: '100%'
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    maxWidth: '50px',
    maxHeight: '50px',
    borderRight: '2px solid black',
    marginRight: '20px',
    paddingRight: '15px'
  },
  text: {
    color: 'rgba(200, 13, 139, .5)'
  }
}

const Header = () => {
  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src='https://www.seeklogo.net/wp-content/uploads/2016/06/Instagram-logo.png' style={styles.image} />
        <h2 style={styles.text}>Instagram</h2>
      </div>
    </div>
  )
}

export default Header
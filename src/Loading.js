import React from 'react'
import ReactLoading from 'react-loading'

const Loading = ({ type, color }) => {
  return (
    <div className='container'>
      <section>
        <ReactLoading type={type} color={'#d6b59b'} height={667} width={375} />
      </section>
    </div>
  )
}

export default Loading

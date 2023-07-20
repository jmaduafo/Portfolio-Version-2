import React, {useState, useEffect} from 'react'
import '../Message/message.scss'

const Message = ({setNav, contactApproved, message}) => {
    const [visible, setVisible] = useState('hidden')

    function closeClick() {
        setVisible('hidden')
    }

    useEffect(function() {
        if(contactApproved === true) {
            setVisible('visible')
        } else {
            setVisible('hidden')
        }

        console.log(visible)
        console.log(contactApproved)
    }, [contactApproved])


  return (
    <div className='message-container' style={{ visibility: visible}}>
        <div className='message-content'>
            <div  className='message-close' onClick={closeClick}>
                <i className='bx bx-x bx-sm'></i>
            </div>
            <div className='message-text'>
                <p>{message}</p>
            </div>
        </div>
    </div>
  )
}

export default Message
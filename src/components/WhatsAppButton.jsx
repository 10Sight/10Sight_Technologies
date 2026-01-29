import React from 'react'
import { Button } from './ui/button';

const WhatsAppButton = ({
  phone = "919711341936",
  message = "Hello, I need help!",
  label = "Chat on Whatsapp",
  className = "cursor-pointer",
}) => {

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, '_blank');
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant="outline"
      className={className}
    >
      Contact Now
    </Button>
  )
}

export default WhatsAppButton

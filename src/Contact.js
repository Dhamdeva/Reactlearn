function Contact(){
    const onClick = () => {
        window.open("https://timmousk.com", "_blank", "noopener,noreferrer");
      };
    
      return <div onClick={onClick}>link</div>;
    };

export default Contact;
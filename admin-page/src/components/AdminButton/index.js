import React from 'react';


function AdminButton ({text, onClick, type}) {
    return (
        <div>
            <button style={styles[type]} onClick={onClick}>{text}</button>
        </div>
    )
}

export default AdminButton;

const styles = ({
primary: {
    width: "6rem",
    
    color: "white",
    backgroundColor: "black",
    borderRadius: "30px",
    borderColor: "green",
    boxShadow: "0px 0px 15px green",
    
    cursor: "pointer",

    padding: "0.3rem",
    marginTop: "0.4rem",
    marginBottom: "0.4rem",
},

secondary: {
    width: "6rem",
    
    color: "white",
    backgroundColor: "black",
    borderRadius: "30px",
    borderColor: "red",
    boxShadow: "0px 0px 15px red",
    
    cursor: "pointer",

    padding: "0.3rem",
    marginTop: "0.4rem",
    marginBottom: "0.4rem",
}
})
import React from 'react';

function Modal({currentPhoto}) {

    const {name, category, description, index} = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img
                    src={require(`../../assets/small/${category}/${i}.jpg`)}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    onClick={() => toggleModal(image, i)}
                    key={image.name}
                />
                <p>
                    Photo Description
                </p>
                <button type="button">
                    Close this modal
                </button>
            </div>
        </div>
    );
  }
  
export default Modal;
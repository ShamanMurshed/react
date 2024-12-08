import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditEmployee(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const wikiUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(props.firstName)}_${encodeURIComponent(props.lastName)}`;
  const statsUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(props.firstName)}_${encodeURIComponent(props.lastName)}#Career_statistics`;
  const highUrl= `https://www.youtube.com/results?search_query=${encodeURIComponent(props.firstName)}+${encodeURIComponent(props.lastName)}+highlights`;

  return (
    <>
        <button onClick = {handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    Info
        </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Player Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <button onClick = {handleShow} >
                <a 
                href={wikiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black no-underline bg-green-300 px-4 py-1 text-sm font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" >
                    Wiki
                </a>
            </button>
            <button onClick = {handleShow} >
                <a
                href={statsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black no-underline bg-green-300 px-4 py-1 text-sm font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                >
                    Stats
                </a>
            </button>
            <button onClick = {handleShow} >
                <a 
                href={highUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black no-underline bg-green-300 px-4 py-1 text-sm font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" >
                    Highlights
                </a>
            </button>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;
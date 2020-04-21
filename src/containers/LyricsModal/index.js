import React, { useState } from 'react';
import './index.css';

import { Modal, Button } from 'antd';

function LyricsModal(props) {
  const [ModalVisible, setModalVisiblity] = useState(props.visible);
  console.log(ModalVisible);
  const handleCancel = (e) => {
    setModalVisiblity(false);
  };

  return (
    <div>
      <Modal
        title="Lyrics"
        visible={ModalVisible}
        onCancel={handleCancel}
        footer={false}
      >
        <p>Lyrics go here...</p>
      </Modal>
    </div>
  );
}

export default LyricsModal;

import React, { useState } from 'react';
import './index.css';

import { Modal, Button } from 'antd';

function LyricsModal() {
  const [visible, setVisiblity] = useState(true);

  const handleCancel = (e) => {
    setVisiblity(false);
  };

  return (
    <div>
      <Modal
        title="Lyrics"
        visible={visible}
        onCancel={handleCancel}
        footer={false}
      >
        <p>Lyrics go here...</p>
      </Modal>
    </div>
  );
}

export default LyricsModal;

import React, { useState, useEffect } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, message, Modal, Input, Progress } from "antd";
import styles from "../../../public/styles/Layout.module.css";
import axios from "axios";

const { TextArea } = Input;

const AideAuDiagnostic = ({ onSubmit, initialData }) => {
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [response, setResponse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [note, setNote] = useState(initialData);
  const [percent, setPercent] = useState(0);
  const [bolValue, setBolValue] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setNote(initialData);
    const randomPercent = Math.floor(Math.random() * (95 - 50) + 50);
    setPercent(randomPercent);
  }, [initialData]);

  const handleOk = () => {
    setIsModalOpen(false);
    // Capture the note when the modal is closed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(note);
  };

  const handleUpload = () => {
    if (fileList.length === 0) {
      message.error("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", fileList[0]); // Only upload the first file

    setUploading(true);

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.pdfrest.com/upload",
      headers: {
        "Api-Key": "b82d0dd5-d8d1-407f-a793-aee60f1283b4",
      },
      data: formData,
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        setResponse(response.data);
        message.success("Upload successful.");
      })
      .catch(() => {
        message.error("Upload failed.");
      })
      .finally(() => {
        setUploading(false);
        setBolValue(!bolValue);
        setFileList([]);
      });
  };

  const props = {
    onRemove: (file) => {
      const newFileList = fileList.filter((item) => item.uid !== file.uid);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList((prevFileList) => [...prevFileList, file]);
      return false;
    },
    multiple: true,
    fileList,
  };

  return (
    <form
      className={styles.span}
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
        <Button
          type="primary"
          onClick={handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? "Uploading" : "Voir le resultat"}
        </Button>
      </>
      {response && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "1.1rem",
          }}
        >
          {!bolValue ? (
            <>
              <h2>normal</h2>
              <Progress
                type="circle"
                percent={0}
                size={150}
                strokeColor="#FFC0CB"
              />
            </>
          ) : (
            <>
              <h2>pathologique</h2>
              <Progress
                type="circle"
                percent={percent}
                size={150}
                strokeColor="#FFC0CB"
              />
            </>
          )}
        </div>
      )}
      <Button type="primary" onClick={showModal}>
        Laisser une note
      </Button>
      <Modal
        title="Aide au diagnostic"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>mettre quelques notes sur ce patient</p>
        <br />
        <TextArea
          placeholder="You can write the reason here, such as: weather conditions, illness, etc...."
          allowClear
          value={note}
          onChange={(e) => setNote(e.target.value)} // Update the note state
        />
      </Modal>
      {note && (
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <h4>Note:</h4>
          <p>{note}</p>
        </div>
      )}

      <button type="submit">Sauvgardez les informations</button>
    </form>
  );
};

export default AideAuDiagnostic;

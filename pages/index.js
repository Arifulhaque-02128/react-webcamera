import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Webcam from 'react-webcam'
import { useRef, useState } from 'react'

export default function Home() {

  const webcamRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  const handleCapture = () => {
    const imgSrc = webcamRef.current.getScreenshot();
    setCapturedPhoto(imgSrc)
  }

  const handleSave = () => {
    const base64Img = capturedPhoto;
    const a = document.createElement("a")
    a.href = base64Img;
    a.download = "webcam-capture.jpeg"
    a.click()
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h4>React Webcam</h4>
        <div className="d-flex justify-content-around row">
          <div className={`${styles.cameraContainer} col-4`}>
            <Webcam ref={webcamRef} screenshotFormat="image/jpeg"  className={`border h-100 w-100`} />
            <button onClick={ () => handleCapture() } className="btn btn-success my-3">Capture Photo</button>
          </div>
          <div className={`${styles.cameraContainer} col-4`} >
            <img className={`border h-100 w-100`} src={capturedPhoto ? capturedPhoto : "/upload.png"} alt=""/>
            <button onClick={() => handleSave() } className="btn btn-success my-3">Save Photo</button>
          </div>
        </div>
      </main>
    </div>
  )
}

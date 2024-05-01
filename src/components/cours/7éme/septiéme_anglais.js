import React, { useState, useEffect } from 'react';
import './septiémemath.css';
import Navbarsept from './navbarsept';
import axios from 'axios';

function septiéme_anglais() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cours, setCours] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedVideo, setSelectedVideo] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [watchedVideos, setWatchedVideos] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [eleveId, setEleveId] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [matricule, setMatricule] = useState('');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchCoursData = async () => {
      try {
        const response = await fetch("http://localhost:3000/cours/7éme/Anglais");
        const data = await response.json();
        const organizedVideos = data.videos.map((video, index) => ({ ...video, numeroVideo: index + 1 }));
        setCours(organizedVideos);
        setSelectedVideo(organizedVideos[0]);
      } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
      }
    };

    const fetchProgression = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/progression/Anglais/7eme/${eleveId}`);
        const progressionData = response.data;
        setWatchedVideos(progressionData);
      } catch (error) {
        console.error('Erreur lors de la récupération de la progression :', error);
      }
    };

    const eleveId = sessionStorage.getItem('eleveId');
    const matricule = sessionStorage.getItem('matricule');

    if (eleveId) {
      setEleveId(eleveId);
    }

    if (matricule) {
      setMatricule(matricule);
    }

    fetchCoursData();
    fetchProgression();
  }, []);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleVideoEnded = () => {
    if (selectedVideo && eleveId) {
      if (!watchedVideos.some(watchedVideo => watchedVideo === selectedVideo.videoUrl)) {
        axios.post(`http://localhost:3000/progression`, {
          eleveId: eleveId,
          matiere: 'Anglais',
          niveau: '7eme',
          listVideosRegarder: [...watchedVideos, selectedVideo.videoUrl]
        })
        .then(response => {
          console.log("Progression enregistrée :", response.data);
          const updatedWatchedVideos = [...watchedVideos, selectedVideo.videoUrl];
          setWatchedVideos(updatedWatchedVideos);

          const progressionAnglais = (updatedWatchedVideos.length / cours.length) * 100;

          axios.put(`http://localhost:3000/eleves/${eleveId}/${matricule}/progression/Anglais`, {
            progressionAnglais: progressionAnglais
          })
          .then(response => {
            console.log("Progression de l'élève mise à jour :", response.data);
          })
          .catch(error => console.error("Erreur lors de la mise à jour de la progression de l'élève :", error));
        })
        .catch(error => console.error('Erreur lors de l\'enregistrement de la progression :', error));
      }
    }
  };
  
  
  return (
    <div>
      <Navbarsept/>
      <h1 style={{ marginBottom: '-4rem',marginTop:'-42rem' }}>Playlist des cours de Anglais de 7ème année</h1>
      <div className="container">
        <div className="main-video-container">
          <video
            src={selectedVideo ? selectedVideo.videoUrl : ""}
            className="main-video"
            controls
            onEnded={handleVideoEnded}
          ></video>
          <h2>{selectedVideo ? selectedVideo.titre : ""}</h2>
        </div>
        <div className="video-list-container" style={{ width: '5px', height: '400px' }}>
          {cours && cours.map((video, index) => (
            <div key={index} className={selectedVideo === video ? "list active" : "list"} onClick={() => handleVideoClick(video)}>
              <video style={{ width: '150px' }} src={video.videoUrl} className="main-video" controls></video>
              <h3 className="list-title">{video.titre}</h3>
              <p className="numero-video" style={{fontSize:'40px',color:'white'}}> {video.numeroVideo}</p>
              {watchedVideos.some(watchedVideo => watchedVideo === video.videoUrl) && <img src={require("./check.png")} alt="check" style={{ width: '20px', height: '20px' }} />}
            </div>
          ))}
          
          <p>Progression: {(watchedVideos.length / cours.length * 100).toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
}

export default septiéme_anglais;

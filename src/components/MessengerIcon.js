import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MessengerIcon() {
  const [showDiscussion, setShowDiscussion] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [eleveInfo, setEleveInfo] = useState(null);
  const [unreadMessages, setUnreadMessages] = useState(0); // Variable d'état pour suivre le nombre de nouveaux messages non lus

  useEffect(() => {
    const fetchEleveInfo = async () => {
      try {
        const eleveId = sessionStorage.getItem('eleveId');
        console.log(eleveId);
        if (eleveId) {
          const eleveInfoResponse = await axios.get(`http://localhost:3000/getInfoById/${eleveId}`);
          const eleveInfo = eleveInfoResponse.data;
          setEleveInfo(eleveInfo);
        } else {
          setEleveInfo(null);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'élève :', error);
      }
    };

    fetchEleveInfo();
  }, []);  

  useEffect(() => {
    axios.get(`http://localhost:3000/getAllMessages`)
      .then(response => {
        setMessages(response.data.messages);
        // Calculer le nombre de nouveaux messages non lus
        const unread = response.data.messages.filter(message => !message.read).length;
        setUnreadMessages(unread);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des messages:', error);
      });
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() !== '' && eleveInfo) {
      const messageData = {
        nom: eleveInfo.nom,
        prenom: eleveInfo.prenom,
        photo: eleveInfo.photo,
        contenu: newMessage
      };

      axios.post(`http://localhost:3000/postMessageWithNomPrenom`, messageData)
        .then(response => {
          setMessages([...messages, response.data.message]);
          setNewMessage('');
          setUnreadMessages(prev => prev + 1); // Incrémenter le nombre de nouveaux messages non lus
        })
        .catch(error => {
          console.error('Erreur lors de l\'envoi du message:', error);
        });
    }
  };

  return (
   <div style={{ position: 'relative', zIndex: 9999 }}>
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        cursor: 'pointer',
        zIndex: 9999,
      }}
      onClick={() => {
        setShowDiscussion(!showDiscussion);
        setUnreadMessages(0); // Marquer les nouveaux messages comme lus lors de l'ouverture de la discussion
      }}
    >
      <i className="fas fa-comment" style={{ color: 'DeepSkyBlue', fontSize: '40px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', borderRadius: '50%', padding: '10px', backgroundColor: 'white' }}>
        {unreadMessages > 0 && <span style={{ width:'25px',height:'25px', position: 'absolute', top: '-5px', right: '-5px', backgroundColor: 'red', borderRadius: '50%', padding: '2px', color: 'white' ,fontSize:'20px'}}>{unreadMessages}</span>} {/* Afficher la notification s'il y a des nouveaux messages non lus */}
      </i>
    </div>

    {showDiscussion && (
      <div style={{ position: 'fixed', bottom: '90px', right: '20px', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', borderRadius: '5px', padding: '10px', zIndex: 9999, maxHeight: '300px', overflowY: 'auto' }}>
      <div className="" style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Discussion</div>

        <div style={{ overflowY: 'auto', maxHeight: 'calc(100% - 40px)' }}>
          {messages.map((message, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', flexDirection: eleveInfo?.nom === message.nom ? 'row-reverse' : 'row', backgroundColor: eleveInfo?.nom === message.nom ? '#D0E7FF' : '#f0f0f0', color: eleveInfo?.nom === message.nom ? 'black' : 'black', padding: '10px', borderRadius: '5px', marginBottom: '10px', textAlign: eleveInfo?.nom === message.nom ? 'right' : 'left' }}>
              <img src={message.photo} alt="Profil" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px',marginLeft:'10px' }} />
              <div>
                <div>{message.nom} {message.prenom}</div>
                <div>{message.contenu}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="discussion-form">
        <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} placeholder="Entrez votre message" style={{ width: '100%', padding: '5px', marginBottom: '5px' , display: 'flex'}} />
        <button onClick={sendMessage} style={{ padding: '5px 10px', backgroundColor: 'DeepSkyBlue', color: 'white', border: 'none', cursor: 'pointer', display: 'flex'}}>Envoyer</button>
        </div>
      </div>
    )}
  </div>
);
}
export default MessengerIcon;

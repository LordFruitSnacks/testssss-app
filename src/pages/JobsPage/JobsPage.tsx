import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const JobsPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Jobs</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        Jobs content
      </div>
    </IonContent>
  </>
);

export default JobsPage;
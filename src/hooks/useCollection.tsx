import React, { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import {
  DocumentData,
  Query,
  collection,
  getFirestore,
  onSnapshot,
  query,
} from "firebase/firestore";

const useCollection = (data: string) => {
  // Set channel state
  const [documents, setDocuments] = useState<Channels[]>([]);

  // Get channel data from Cloud Firestore
  const db = getFirestore();
  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    // Listen query result by using onSnapshot()
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelIsResults: Channels[] = [];
      querySnapshot.docs.forEach((doc) => {
        channelIsResults.push({
          id: doc.id,
          channel: doc.data(),
        });
      });

      // Set as channel data which extract from Cloud Firestore
      setDocuments(channelIsResults);
    });
  }, []);

  return { documents };
};

export default useCollection;

//================================
// Type definition
//================================
interface Channels {
  id: string;
  channel: DocumentData;
}

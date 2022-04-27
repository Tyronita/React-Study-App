import React, { useState, useEffect } from 'react';

// import database
import { db } from "../firebase-config";
import { collection, getDocs, deleteDoc, doc} from 'firebase/firestore';

// import authentication
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

// import components for page
import Header from '../components/subjects/Header';
import Subjects from '../components/subjects/Subjects';
import AddSubject from '../components/subjects/AddSubject';

export default function SettingsPage() {

    // current user
    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    // get to-dos from firebase
    const [subjects, setSubjects] = useState([]);
    const [showAddSubject, setShowAddSubject] = useState(false)
    const subjectsCollectionRef = collection(db, "subjects/");

    // add task - to database
    const addSubject = async (subject) => {
        const userID = user.uid
        const newSubject = {userID, ...task}
        await addDoc(subjectsCollectionRef, subject)
        setSubjects([...subjects, newSubject])
    }

    // delete task with id
    const deleteSubject = async (id) => {
        const subjectDoc = doc(db, "/subjects", id)
        await deleteDoc(subjectDoc);
        setSubjects(subjects.filter((subject) => subject.id !== id))
    }

    // (hook/function) called when page rendered
    useEffect(() => {

        const getSubjects = async () => {
        let data = await getDocs(subjectsCollectionRef); // unpack data
        data = data.docs.map((doc) => ({...doc.data(), id: doc.id})); // only select subjects for authenticated user
        data = data.filter(subject => subject.userID != user.uid);
        setSubjects(data);
        }

        getSubjects();
    }, [])
    
    // Removes all data from the firebase DB for a user
    const clearUserData = async () => {

        const PATHS = ['to-dos/', 'timer-times/', 'moods/', 'subjects/']

        PATHS.forEach( async (sectionPathName) => {

            // make call to database for section
            let sectionCollectionRef = collection(db, sectionPathName);
            let data = await getDocs(sectionCollectionRef); 

            // unpack data and filter out other users
            data = data.docs.map((doc) => ({...doc.data(), id: doc.id})); 
            data = data.filter(entry => entry.userID != user.uid);
            console.log(data)

            // delete every entry for that section for a user
            data.forEach( async (entry) => {
                const entryDoc = doc(db, sectionPathName, entry.id)
                console.log(entryDoc)
                await deleteDoc(entryDoc);
            })
        })
        
    } 

    return (
        <div style={{minHeight: "100vh"}}>
            
            <button onClick = {clearUserData()}>Delete User Data</button>

            <hr />

            <Header onAdd={() => setShowAddSubject(!showAddSubject)} showAdd={showAddSubject}/>

            {showAddSubject && <AddSubject onAdd = {addSubject}/>}

            {/* Subjects list */}
            {subjects.length >= 1 ?
                <Subjects subjects={subjects} onDelete={deleteSubject} /> : 'No subjects available' }


        </div>
    );
}


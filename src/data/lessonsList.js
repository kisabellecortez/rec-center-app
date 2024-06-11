import { db } from '../apis/Firebase.js'
import { collection, getDocs } from 'firebase/firestore'

class Lesson{
    constructor(id, title, price, ages, level, description, time, schedule){
        this.id = id; 
        this.title = title; 
        this.price = price; 
        this.ages = ages; 
        this.level = level; 
        this.description = description; 
        this.time = time; 
        this.schedule = schedule; 
    }
}

const lessonsList = []

// get product data from database 
const querySnapshot = await getDocs(collection(db, "lessons"));
const lessonsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

// add each product to cart 
lessonsData.forEach((lesson) => {
    lessonsList.push(new Lesson(lesson.id, lesson.title, lesson.price, lesson.ages, lesson.level, lesson.description, lesson.time, lesson.schedule));
});

export { lessonsList }
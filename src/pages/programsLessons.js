import TopNav from '../components/TopNav.js'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { lessonsList } from '../data/lessonsList.js'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

const ProgramsLessons = () => {
    return(
        <div className="programs-lessons">
            <TopNav/>

            <div className='description'>
                <h1>LESSONS</h1>
                <p>We offer a wide range of instructional lessons for each age group. Classes are two months long with one 1 hour lesson a week, most instructional sports are offered year round with the exception of tennis and soccer which are only offered in the summer. Sign up for classes will open a month before, there is limited space so be sure to be the first to register!</p> 
            </div>

            <div className='photos'>
                <ImageList
                    sx={{ width: 500, height: 500 }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                    >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>

            <div className="lesson-card-section">
                {lessonsList.map((lesson) => (
                    <div key={lesson.id} className='lessons-card'>
                        <Card sx={{ minWidth: 800, maxWidth: 800, minHeight: 400, maxHeight: 400 }}>
                            <CardContent>
                                <h2>{lesson.title}</h2>

                                {lesson.price === 0 ? (
                                    <h3>FREE</h3>
                                ) : (
                                    <h3>${lesson.price}</h3>
                                )}

                                <Stack direction="row" spacing={1}>
                                    <Chip label={lesson.ages} />
                                    <Chip label={lesson.level} />
                                </Stack>

                                <p>{lesson.description}</p>

                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="success">
                                REGISTER
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default ProgramsLessons

const itemData = [
    {
      img: 'https://villageclubs.com/wp-content/uploads/2022/05/swim-lessons-images.jpg',
      title: 'Swim lessons',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://www.online-basketball-drills.com/wp-content/uploads/2019/12/beginnerbasketballdrills-1.jpg',
      title: 'Basketball lessons',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQERX_AEUZCUOfYmfS62yXzSMQWKE4gC_K41w&s',
      title: 'Camera',
    },
    {
      img: 'https://www.elitevbtc.com/wp-content/uploads/2019/05/Lesson-Pic.jpg',
      title: 'Volleyball lessons',
      cols: 2,
    },
    {
      img: 'https://simplifaster.com/wp-content/uploads/2021/11/Youth-Soccer-Training-1024x536.jpg',
      title: 'Soccer lessons',
      cols: 2,
    },
    {
      img: 'https://tryallclub.com/wp-content/uploads/2023/05/Tryall_tennis-0176A-800.webp',
      title: 'Tennis lessons',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://thebadmintonhub.com/wp-content/uploads/2023/01/Benefits-of-Having-a-Badminton-Coach-The-Badminton-Hub.png',
      title: 'Badminton lessons',
    },
    {
      img: 'https://sc.edu/study/colleges_schools/music/community/community_music_school/guitar_lesson.jpg',
      title: 'Fern',
    }
  ];
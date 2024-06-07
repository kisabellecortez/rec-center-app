import React, { useState } from 'react';

import TopNav from '../components/TopNav.js'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { lessonsList } from '../data/lessonsList.js'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

const ProgramsLessons = () => {
  const [type, setType] = useState('')
  const [ages, setAges] = useState('')
  const [level, setLevel] = useState('')

  const handleChangeType = (event) => {
    setType(event.target.value)
  }

  const handleChangeAges = (event) => {
    setAges(event.target.value)
  }

  const handleChangeLevel = (event) => {
    setLevel(event.target.value)
  }

    return(
        <div className="programs-lessons">
            <TopNav/>

            <div className="description">
              <div>
                  <h1>LESSONS</h1>
                  <p>Discover Your Passion: Scarbs Rec offers an exciting array of enriching lessons tailored to ignite creativity and cultivate athleticism. Dive into our vibrant sports program, where seasoned coaches guide participants of all ages through dynamic training sessions, fostering teamwork and skill development in a variety of sports disciplines. For those inclined towards the arts, explore our diverse range of artistic endeavors, from painting and pottery to music and dance. Unleash your potential in a welcoming and supportive environment, where learning knows no bounds. Join us and embark on a journey of self-discovery and growth!</p> 
              </div>

              <div>
                <div className='seasonal-card'>
                  <h3>YEAR ROUND</h3>
                  <p>BADMINTON</p>
                  <p>BALLET</p>
                  <p>BASKETBALL</p>
                  <p>GUITAR</p>
                  <p>SWIMMING</p>
                  <p>VOLLEYBALL</p>
                </div>

                <div className='seasonal-card'>
                  <h3>SUMMER (MAY TO AUGUST)</h3>
                  <p>SOCCER</p>
                  <p>TENNIS</p>
                </div>
              </div>
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

            <div className='filters'>
              <h3>FILTERS</h3>

              <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">TYPE</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={type}
                  label="TYPE"
                  onChange={handleChangeType}
                >
                  <MenuItem value="">
                    <em>ALL</em>
                  </MenuItem>
                  <MenuItem value={"BASKETBALL"}>BASKETBALL</MenuItem>
                  <MenuItem value={"SOCCER"}>SOCCER</MenuItem>
                  <MenuItem value={"VOLLEYBALL"}>VOLLEYBALL</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">AGE GROUP</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={ages}
                  label="AGE GROUP"
                  onChange={handleChangeAges}
                >
                  <MenuItem value="">
                    <em>ALL</em>
                  </MenuItem>
                  <MenuItem value={"8 TO 10"}>8 TO 10</MenuItem>
                  <MenuItem value={"11 TO 14"}>11 TO 14</MenuItem>
                  <MenuItem value={"15 TO 17"}>15 TO 17</MenuItem>
                  <MenuItem value={"18 TO 22"}>18 TO 22</MenuItem>
                  <MenuItem value={"22+"}>22+</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">LEVEL</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={level}
                  label="LEVEL"
                  onChange={handleChangeLevel}
                >
                  <MenuItem value="">
                    <em>ALL</em>
                  </MenuItem>
                  <MenuItem value={"BEGINNER"}>BEGINNER</MenuItem>
                  <MenuItem value={"INTERMEDIATE"}>INTERMEDIATE</MenuItem>
                  <MenuItem value={"ADVANCED"}>ADVANCED</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="lesson-card-section">
                {lessonsList.map((lesson) => (
                    <div key={lesson.id} className='lesson-card'>
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

                                <Button >SCHEDULE</Button>
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
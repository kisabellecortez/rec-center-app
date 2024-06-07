import TopNav from '../components/TopNav.js'

const Home = () => {
    return(
        <div className='home'>
            <TopNav/>

            <div>
                <div className='about'>
                    <h1>Welcome to Scarbs Rec!</h1>

                    <h2>ABOUT US</h2>
                    <p>Welcome to the Scarborough Community Center, where our mission is to provide accessible and enriching opportunities for youth in our vibrant community. Located in the heart of Scarborough, our center is dedicated to empowering young individuals by offering a wide range of programs and activities designed to inspire, educate, and engage. From sports and fitness classes to arts, culture, and educational workshops, we strive to create a nurturing environment where youth can explore their interests, develop new skills, and build lasting friendships. Our committed team of professionals and volunteers work tirelessly to ensure that every young person has the chance to thrive, regardless of their background or circumstances. Join us at the Scarborough Community Center and be part of a community that values growth, inclusivity, and the limitless potential of our youth. Together, we can make a difference and help shape a brighter future for all.</p>
                </div>

                <div className='rec-img'>
                    <img src="https://www.hbaonline.com/wp-content/uploads/2014/01/HBA_Kempsville_Community_Recreation_Center01.jpg" alt="Scarbs Rec"></img>
                </div>
            </div>
        </div>
    )
}

export default Home; 
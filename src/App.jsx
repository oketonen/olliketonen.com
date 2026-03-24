
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";
import './App.css'
import {motion} from 'framer-motion'

function App() {
  
  return (
    <>
      <Router>
        <div className="maindiv">
            <h1>OLLI KETONEN AUDIO DESIGN</h1>
            <div className="buttonbox">
              <Link className="buttonw" to="/games">GAMES</Link>
              <Link className="buttonb" to="/art">ART</Link>
              <Link className="buttonc" to="/music">MUSIC</Link>
              <Link className="buttonc" to="/info">INFO</Link>
            </div>  
        </div>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/games" element={<Work />} />
          <Route exact path="/music" element={<Bio />} />
          <Route exact path="/info" element={<Info />} />
          <Route exact path="/art" element={<Art />} />
        </Routes>
      </Router>
      </>
  )
}


function Main() {
  return (
    <div className="maindiv">
    </div>
  );
}


function Work() {
  return (
    <div>
      {/* <Link className="link" to="/">BACK</Link> */}
      <div>
        {
          <div>
            <h2></h2>
            <div className="video-container">
              <div className="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?si=8y8xIFIHeYH6ZEv0&amp;list=PLnz0PbFIlP6viGN9ufAtBv8i-jNCgBZhm" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>
              <div className="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?si=NWGwRQ34fHrJ9Ju4&amp;list=PLnz0PbFIlP6uNzt1xN7vWTCl5uuSp3Srk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>
            </div>
          </div>
        }
         {/* <div className="biodiv">
            <p className="bio">
              <p style={{ textAlign: 'center' }}>Clients and projects I've worked with since 2013:</p>
            </p>
          </div>
          */}
          <div className="biodiv">
            <table>
              <tr>
                <th>Game</th>
                <th>Role</th>
                <th>Year</th>
                <th>Company</th>
              </tr>
              <tr>
                <td><a href="https://www.youtube.com/watch?v=0P0twgxYCLI">The Last Caretaker</a></td>
                <td>Sound Designer</td>
                <td>2025</td>
                <td>Channel 37</td>
              </tr>              
              <tr>
                <td><a href="https://www.youtube.com/watch?v=-wUXy2DJ5QU">Silence of the Siren</a></td>
                <td>Sound Designer</td>
                <td>2024</td>
                <td>Oxymoron Games</td>
              </tr>
              <tr>
                <td><a href="https://www.youtube.com/watch?v=8oeXuhQ30wM">Cthulhu Keeper</a></td>
                <td>Composer & Sound Designer</td>
                <td>TBA</td>
                <td>Kuuasema</td>
              </tr>    
              <tr>
                <td>Bike Unchained 3</td>
                <td>Sound Designer</td>
                <td>2023</td>
                <td>Red Bull | Kuuasema</td>
              </tr>
              <tr>
                <td><a href="https://www.youtube.com/watch?v=OzeaefgN6tQ">LEMPO</a></td>
                <td>Composer & Sound Designer</td>
                <td>2023</td>
                <td>One Trick Entertainment</td>
              </tr>
              <tr>
                <td><a href="https://www.youtube.com/watch?v=dsBqGpaysw0">Love Simulation EVE (Unreal Engine segments)</a></td>
                <td>Composer & Sound Designer</td>
                <td>2022</td>
                <td>Avatar's Journey | Espoo Theatre</td>
              </tr>
              <tr>
                <td>Offroad Unchained</td>
                <td>Sound Designer</td>
                <td>2022</td>
                <td>Red Bull | Kuuasema</td>
              </tr>
              <tr>
                <td>Boom Slingers</td>
                <td>Composer & Sound Designer</td>
                <td>2022</td>
                <td>Boom Corp</td>
              </tr>
              <tr>
                <td>Puzzle Combat</td>
                <td>Sound Designer</td>
                <td>2021</td>
                <td>Small Giant Games</td>
              </tr>
              <tr>
                <td>Moka Mera Emotions</td>
                <td>Composer & Sound Designer</td>
                <td>2021</td>
                <td>Moilo | Kuuasema</td>
              </tr>
              <tr>
                <td>Moka Mera Lingua</td>
                <td>Sound Designer</td>
                <td>2020</td>
                <td>Moilo | Kuuasema</td>
              </tr>
              <tr>
                <td>Space Pioneer</td>
                <td>Composer & Sound Designer</td>
                <td>2018</td>
                <td>Vivid Games | Kuuasema</td>
              </tr>
              <tr>
                <td>Angry Birds Seasons</td>
                <td>Assisting Sound Designer</td>
                <td>2016</td>
                <td>Rovio | Kuuasema</td>
              </tr>
              <tr>
                <td>Stardust Galaxy Warriors</td>
                <td>Assisting Sound Designer</td>
                <td>2015</td>
                <td>Dreamloop Games</td>
              </tr>
              <tr>
                <td>Discorun</td>
                <td>Composer</td>
                <td>2015</td>
                <td>Tuokio</td>
              </tr>
              <tr>
                <td>Brickvoid</td>
                <td>Composer</td>
                <td>2013</td>
                <td>Devaxel</td>
              </tr>
            </table>

          </div>



        

        {/* <Link className="link" to="/">BACK</Link> */}

      </div>
    </div>
  );
}

// export default App;
function Bio() {
  return (
    
      <div>
        <h2></h2>
        <div className="sound-container">
        <div className="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=OLAK5uy_khzNolPtUcKhVrqh4B4XXRFUsZ1VlVDE8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>
        <div className="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=PLdIoLSqM-2V4g6JC2qZydq9xosH9VfOkO" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>

          <iframe
            width="100%" height="750" scrolling="no" frameborder="no" allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/323477977%3Fsecret_token%3Ds-9iKDk&color=%23848496&auto_play=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=false">
          </iframe>

        </div>

        
      </div>

    

  );
}



function Art() {
  return (
    <div>




        <div>

          <h2></h2>


          <div className="video-container">

            <div className="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/9lmVe8HPCMA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>
            <div className="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/I2xQPJO1IUA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>
            <div className="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/RqFrVer9MmA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>

          </div>

        </div>
      
    </div>
  );
}


function Info() {
  return (
    <>
    <motion.div
      initial={{
        opacity: 0, y: 100
      }}
      animate={{
        opacity: 1, y: 0
      }}

    >
        <p className="bio">
          <br></br>
          I am a sound designer, composer and new media artist based in Finland. I create soundscapes and music for video games and all kinds of other interactive applications. </p>
        <br></br>
      </motion.div>
      <motion.div
      initial={{
        opacity: 0, y: 100
      }}
      animate={{
        opacity: 1, y: 0
      }}
      transition={{
        delay: '0.15'
      }}
    >        
        <p className="bio">Since 2013, I've designed and produced audio content for multiple video games and other non-linear media by companies such as Red Bull, Small Giant Games, Espoo Theatre, Aalto University and Rovio. With a Bachelor's Degree in Music Technology and Master's Degree in Sound in New Media I have a large set of skills from sound effect creation to technical audio design and programming.
        </p>
        
        <br></br>

        <p className="bio">I am also a classically trained cellist with years of experience in electronic music production and audio engineering. With my background in classical and electronic music I can deliver a wide variety of different musical genres from drafting stage to final mix and master.
        </p>
        
        <br></br>
        
        <p className="bio">Contact me to talk about the audio needs for your next project! 

        {/*<a href="mailto:contact@olliketonen.com">Email</a> <a href="http://www.linkedin.com/in/olli-ketonen/">LinkedIn</a>.*/}
        </p>

        <h1><a href="mailto:contact@olliketonen.com">📧</a>
        <a href="https://fi.linkedin.com/in/olli-ketonen">🔗</a>
        </h1>
      
    </motion.div>
    </>
  );
}

export default App

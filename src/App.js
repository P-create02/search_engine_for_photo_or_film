import React from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";

function App() {
  const [showFunctions, setShowFunctions] = React.useState(false)

  return (
    <>
    <BackEff>
        <div className="z01"></div>
        <div className="z02"></div>
    </BackEff>
    <Wrapper>
      <h2>Find your..</h2>
      <div className="eff">
        <button className='btn main' onClick={() => setShowFunctions(!showFunctions)}>fav</button>
      </div>
      <Link to='/films'><button className={`btn opt1 ${showFunctions && 'active'}`}>Film</button></Link>
      <Link to='/photos'><button className={`btn opt2 ${showFunctions && 'active'}`}>Photo</button></Link>
    </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  h2{
    color: var(--primary7);
    text-transform: uppercase;
    position: absolute;
    top: 5%;
    text-align: center;
    text-shadow: 10px -10px 10px var(--primary10)
  }
  .main, .opt1, .opt2{
    font-size: 2rem;
    padding: 1rem;
    box-shadow: 0 0 25px var(--primary6);
    border-bottom-left-radius: 50%;
    border-top-right-radius: 50%;
  }
  .eff{
    padding: 3rem;
    box-shadow: 0 0 25px var(--primary6);
    border-bottom-left-radius: 50%;
    border-top-right-radius: 50%;
    z-index: 1;
  }
  .eff:hover{
    background: var(--primary6);
    transition: all 0.6s linear;
  }
  .opt1, .opt2{
    border-radius: var(--radius);
    background: var(--primary6);
    color: #fff;
    opacity: 0;
  }
  .active{
    opacity: 1;
    transition: all 0.6s linear;
  }
  .opt1:hover, .opt2:hover{
    color: var(--primary1);
    background: transparent;
  }
  .opt1{
    position: absolute;
    bottom: 25%;
    left: 25%;
    border-top-right-radius: 50%;
  }
  .opt2{
    position: absolute;
    top: 25%;
    right: 25%;
    border-bottom-left-radius: 50%;
  }
  @media screen and (max-width: 800px){
    .opt1{
      bottom: 20%;
      left: 20%;
    }
    .opt2{
      top: 20%;
      right: 20%;
    }
  }
  @media screen and (max-width: 600px){
    .opt1, .opt2{
      font-size: 1rem;
    }
    .eff{
      padding: 2rem;
    }
    .main{
      font-size: 1.5rem;
      padding: 0.75rem;
    }
  }
`

const BackEff = styled.div`
.z01 {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  border-bottom-left-radius: 50%;
  border-top-right-radius: 50%;
  box-shadow: 100px 200px var(--primary1), 200px 250px var(--primary1), 200px 500px var(--primary1),
    300px 300px var(--primary1), 550px 150px var(--primary2), 550px 300px var(--primary3),
    350px 500px var(--primary4), 1750px 150px var(--primary5), 1000px 400px var(--primary1),
    650px 450px var(--primary2), 1200px 50px var(--primary3), 1100px 450px var(--primary4),
    950px 50px var(--primary5), 1100px 500px var(--primary1), 850px 400px var(--primary2),
    850px 300px var(--primary3), 1200px 100px var(--primary4), 900px 300px var(--primary5),
    1150px 400px var(--primary1), 1650px 900px var(--primary2), 650px 600px var(--primary3),
    350px 600px var(--primary4), 600px 650px var(--primary5), 150px 750px var(--primary1),
    1750px 450px var(--primary2), 250px 800px var(--primary3), 1800px 1150px var(--primary4),
    450px 1450px var(--primary5), 1150px 800px var(--primary1), 100px 700px var(--primary2),
    350px 650px var(--primary3), 250px 600px var(--primary4), 1850px 700px var(--primary5),
    1650px 600px var(--primary1), 450px 1050px var(--primary2), 1550px 500px var(--primary3),
    150px 1400px var(--primary4), 800px 800px var(--primary5), 1250px 1950px var(--primary1),
    100px 1700px var(--primary2), 1150px 1350px var(--primary3), 1700px 50px var(--primary4),
    1750px 500px var(--primary5), 300px 1100px var(--primary1), 350px 1650px var(--primary2),
    1700px 1200px var(--primary3), 450px 800px var(--primary4), 2000px 500px var(--primary5),
    350px 1600px var(--primary1), 1350px 1350px var(--primary2), 1100px 1750px var(--primary3),
    150px 950px var(--primary4), 1600px 1700px var(--primary5), 400px 1000px var(--primary1),
    650px 1050px var(--primary2), 2000px 1650px var(--primary3), 1100px 700px var(--primary4),
    1350px 600px var(--primary5), 600px 1900px var(--primary1), 1500px 600px var(--primary2),
    20px 1350px var(--primary3), 850px 1800px var(--primary4), 450px 1150px var(--primary5),
    50px 700px var(--primary1), 100px 1400px var(--primary2), 1000px 1700px var(--primary3),
    250px 600px var(--primary4), 1200px 850px var(--primary5), 1750px 20px var(--primary1),
    100px 1550px var(--primary2), 1200px 1650px var(--primary3), 1500px 700px var(--primary4),
    1800px 600px var(--primary5), 650px 800px var(--primary1), 700px 600px var(--primary2),
    1100px 1350px var(--primary3), 900px 550px var(--primary4), 1600px 800px var(--primary5),
    1000px 1100px var(--primary1), 1650px 1350px var(--primary2), 750px 1050px var(--primary3),
    1750px 800px var(--primary4), 600px 1650px var(--primary5), 150px 1550px var(--primary1),
    250px 1800px var(--primary2), 1100px 1700px var(--primary3), 800px 1500px var(--primary4),
    1100px 1200px var(--primary5), 1450px 1600px var(--primary1), 150px 1400px var(--primary2),
    1200px 1450px var(--primary3), 1800px 1050px var(--primary4), 1250px 1300px var(--primary5),
    1000px 1000px var(--primary1), 300px 700px var(--primary2), 100px 1250px var(--primary3),
    700px 1750px var(--primary4), 1950px 250px var(--primary5), 1550px 700px var(--primary1);
  animation: starsUp 10s linear infinite;
}

.z02 {
  content: "";
  position: absolute;
  width:10px;
  height: 10px;
  border-bottom-left-radius: 50%;
  border-top-right-radius: 50%;
  box-shadow: 100px 200px var(--primary1), 200px 250px var(--primary1), 200px 500px var(--primary1),
    300px 300px var(--primary1), 550px 150px var(--primary2), 550px 300px var(--primary3),
    350px 500px var(--primary4), 1750px 150px var(--primary5), 1000px 400px var(--primary1),
    650px 450px var(--primary2), 1200px 50px var(--primary3), 1100px 450px var(--primary4),
    950px 50px var(--primary5), 1100px 500px var(--primary1), 850px 400px var(--primary2),
    850px 300px var(--primary3), 1200px 100px var(--primary4), 900px 300px var(--primary5),
    1150px 400px var(--primary1), 1650px 900px var(--primary2), 650px 600px var(--primary3),
    350px 600px var(--primary4), 600px 650px var(--primary5), 150px 750px var(--primary1),
    1750px 450px var(--primary2), 250px 800px var(--primary3), 1800px 1150px var(--primary4),
    450px 1450px var(--primary5), 1150px 800px var(--primary1), 100px 700px var(--primary2),
    350px 650px var(--primary3), 250px 600px var(--primary4), 1850px 700px var(--primary5),
    1650px 600px var(--primary1), 450px 1050px var(--primary2), 1550px 500px var(--primary3),
    150px 1400px var(--primary4), 800px 800px var(--primary5), 1250px 1950px var(--primary1),
    100px 1700px var(--primary2), 1150px 1350px var(--primary3), 1700px 50px var(--primary4),
    1750px 500px var(--primary5), 300px 1100px var(--primary1), 350px 1650px var(--primary2),
    1700px 1200px var(--primary3), 450px 800px var(--primary4), 2000px 500px var(--primary5),
    350px 1600px var(--primary1), 1350px 1350px var(--primary2), 1100px 1750px var(--primary3),
    150px 950px var(--primary4), 1600px 1700px var(--primary5), 400px 1000px var(--primary1),
    650px 1050px var(--primary2), 2000px 1650px var(--primary3), 1100px 700px var(--primary4),
    1350px 600px var(--primary5), 600px 1900px var(--primary1), 1500px 600px var(--primary2),
    20px 1350px var(--primary3), 850px 1800px var(--primary4), 450px 1150px var(--primary5),
    50px 700px var(--primary1), 100px 1400px var(--primary2), 1000px 1700px var(--primary3),
    250px 600px var(--primary4), 1200px 850px var(--primary5), 1750px 20px var(--primary1),
    100px 1550px var(--primary2), 1200px 1650px var(--primary3), 1500px 700px var(--primary4),
    1800px 600px var(--primary5), 650px 800px var(--primary1), 700px 600px var(--primary2),
    1100px 1350px var(--primary3), 900px 550px var(--primary4), 1600px 800px var(--primary5),
    1000px 1100px var(--primary1), 1650px 1350px var(--primary2), 750px 1050px var(--primary3),
    1750px 800px var(--primary4), 600px 1650px var(--primary5), 150px 1550px var(--primary1),
    250px 1800px var(--primary2), 1100px 1700px var(--primary3), 800px 1500px var(--primary4),
    1100px 1200px var(--primary5), 1450px 1600px var(--primary1), 150px 1400px var(--primary2),
    1200px 1450px var(--primary3), 1800px 1050px var(--primary4), 1250px 1300px var(--primary5),
    1000px 1000px var(--primary1), 300px 700px var(--primary2), 100px 1250px var(--primary3),
    700px 1750px var(--primary4), 1950px 250px var(--primary5), 1550px 700px var(--primary1);
  animation: starsUp 30s linear infinite;
}

@keyframes starsUp {
  0% {
    transform: translateY(500px);
  }
  100% {
    transform: translateY(-2000px);
  }
}
`

export default App;

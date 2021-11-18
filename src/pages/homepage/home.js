import React from 'react';
import podium from "./pictures/podium.jpg"
import Text from "./homeElements"

const Home = () => {
  return (  
    <div>
      <Text >
      Want to share your opinion on the latest news? we've got you covered!
      </Text>
      <img src={podium} alt="Podium" Style=" display: block; margin-left: auto;margin-right: auto;
  width: 50%; width: 800px; height: auto; " />
      <Text>We offer news filtered by topic, from your favorite online newsletters, all in one place. </Text>
    </div> 
  );
};

export default Home;

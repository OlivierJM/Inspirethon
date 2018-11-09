// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  GoToAction,
  CodePane
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import myImage from '../assets/olivier.jpg'

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
    
          <Heading size={1} fit caps={false} lineHeight={1} textColor="tertiary">
          "Programming" Your Next Dream Job 
          </Heading>
          <br />
          <br />
          <br />
          <br />
          <Text>
            @olivierjm on Github, Twitter and Medium
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgImage={myImage}>
          <br />
          <Text margin="10px 0 0" textColor="tertiary" size={6} fit bold>
              My little Story 
          </Text>
        <Heading size={5} textColor="white">Work Hard until ...</Heading>
        </Slide>
        <Slide transition={['fade']} >
        <Text margin="10px 0 0" textColor="tertiary" size={6} fit bold>
              Let's Consider the current Status 
        </Text>
        <List>
            <ListItem>Education</ListItem>
            <ListItem>Health</ListItem>
            <ListItem>Finance</ListItem>
            <ListItem>The General Community</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} >
          <Text margin="10px 0 0" textColor="tertiary" size={6} fit bold>
            Where is the issue here 🤔 🤔 🤔???
          </Text>
          <br />
          <br />
          <br />
          <br />

          Education is the key, but ...😒 
        </Slide>
        <Slide>
          <Text margin="10px 0 0" textColor="tertiary" size={6} fit bold>
            What is Programming ?  
          </Text>
          <br />
          <br />
         
          <Text>
            💻 🖥  👩‍💻 👨‍💻
          </Text>
        </Slide>
        <Slide>
          <Text margin="10px 0 0" textColor="tertiary" size={6} fit bold>
            Why learn Programming ?  
          </Text>
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/deck.example')}
            margin="20px auto"
            // overflow="overflow"
          />

        </Slide>

         <Slide transition={["fade"]} bgColor="primary">
          {/* <Text size={6} textColor="secondary" caps>Going Back 👈 👈</Text> */}
          <GoToAction slide={3}> Consider this again 👈 👈</GoToAction>
        </Slide>
   
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
              Whether you want to uncover the secrets of the universe, or you just want to pursue 
              a career in the 21stcentury, basic computer programming 
              is an essential skill to learn.
            <Cite>Stephen Hawking</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            Everybody should learn to program a computer, because it teaches you how to think
            <Cite>Steve Jobs</Cite>
          </BlockQuote>
        </Slide>


        <Slide>
          <Text margin="10px 0 0" textColor="tertiary" size={6} fit bold>
            What you and I can and Should do <br /><br />
             💪💪💪💪
          </Text>
        </Slide>
  
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Our future lies in the code we write</Quote>
            <Cite>OlivierJM 😉</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}

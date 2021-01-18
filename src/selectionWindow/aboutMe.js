import React from 'react';
import { connect } from 'react-redux';
import { contactSelected } from '../store/actions';
import './stylings/aboutMeStyle.css'

function AboutMeSection(props) {
  console.log(props)
  return (
    // --------------- CONTAINER---------->
    <div className="">
      <div className="text-center head">
        <h1>Hi, i´m Michele Ayadi</h1>
        <h6>My goal is to become a Fullstack Web developer...</h6>
      </div>
      <div className="text-center introConntainer">
        <h6 className="mt-2 introHeader">How I got into in Coding?</h6>
        <p>It was about 2016 when I saw a programmer on Youtube
        how he recorded himself while he was coding.
        I always wanted to earn a living with something creative but be mentally challenging.
        As I watched how he coded this purple rain like animation with a JavaScript library
        called P5.JS, I was fascinated! I saw how he solved multiple problems
        on his way to get the creative output he wanted. I knew I wanted
        to learn to code. And now I want to earn a living with it!
            </p>
      </div>
      <div className="text-center me-container">
        <div className="me"></div>
        <p className="quest">?</p>

        <div className="contact-container">
          <p className="m-1">How does your future employee look?</p> 
          <button Click={props.contactSelected} className="contactLink m-1">Contact Me</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    showContactSection: state.selection.showContactSection,
  }
}



const mapDispatchToProps = dispatch => {
  return {
    contactSelected: () => dispatch(contactSelected()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutMeSection)



import React from 'react';
import { connect } from 'react-redux';
import { projectSelected } from '../store/actions';
import { aboutMeSelected } from '../store/actions';
import { contactSelected } from '../store/actions';
import ProjectSelection from './projectSelection';
import AboutMeSection from './aboutMe';
import ContactSection from './ContactSection';
import './stylings/selectionMaskStyle.css'

function Selection(props) {
  let selectedSection = undefined;
  if (props.showAboutMeSection) {
    selectedSection =
      <div>
        <AboutMeSection projectSelected={props.aboutMeSelected} contactSelected={props.contactSelected}/>
      </div>
  } if (props.showProjectSection) {
    selectedSection =
      <div>
        <ProjectSelection projectSelected={props.projectSelected} />
      </div>
  } if (props.showContactSection) {
    selectedSection =
      <div>
        <ContactSection projectSelected={props.contactSelected} />
      </div>
  }
  return (
    <div>
      <div className="navBar">
        <button onClick={props.contactSelected} className="navButtonStyle">Contacts</button>
        <button onClick={props.projectSelected} className="navButtonStyle">Projects</button>
        <button onClick={props.aboutMeSelected} className="navButtonStyle">About Me</button>
      </div>
      {selectedSection}
    </div>
  );

}


const mapStateToProps = state => {
  return {
    showProjectSection: state.selection.showProjectSection,
    showAboutMeSection: state.selection.showAboutMeSection,
    showContanctSection: state.selection.showContanctSection,
  }
}



const mapDispatchToProps = dispatch => {
  return {
    projectSelected: () => dispatch(projectSelected()),
    aboutMeSelected: () => dispatch(aboutMeSelected()),
    contactSelected: () => dispatch(contactSelected()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Selection)



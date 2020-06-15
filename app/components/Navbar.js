import React from 'react';
import PropTypes from 'prop-types';

function LanguageNav ({ selected, onUpdateLanguage }){
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

        return(
            <ul className='flex-center'>
                {languages.map((language) => (
                  <li key={language}>
                      <button 
                        className='btn-clear nav-link'
                        style={language === selected ? {color: 'rgb(255,127,80)'} : null}
                        onClick={() => onUpdateLanguage(language)}>
                        {language}
                      </button>
                  </li>  
                ))}
            </ul>
        )
}

LanguageNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired,
}

export default class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedLang: 'All' 
        }

        this.updateLang = this.updateLang.bind(this)
    }

    updateLang(selectedLang){
        this.setState({
            selectedLang
        })
    }

    render(){
       const { selectedLang } = this.state

       return(
           <React.Fragment>
               <LanguageNav 
                selected={selectedLang}
                onUpdateLanguage={this.updateLang}
               />
           </React.Fragment>
       )
    }
}
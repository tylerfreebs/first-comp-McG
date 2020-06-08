import React from 'react'

function LanguageNav ({ selected, onUpdateLanguage }){
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

        return(
            <ul className='flex-center'>
                {languages.map((language) => (
                  <li key={language}>
                      <button 
                        className='btn-clear nav-link'
                        style={language === selected ? {color: 'rgb(220,20,60)'} : null}
                        onClick={() => onUpdateLanguage(language)}>
                        {language}
                      </button>
                  </li>  
                ))}
            </ul>
        )
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
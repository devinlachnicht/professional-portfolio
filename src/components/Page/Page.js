import React from 'react';
import PageContent from '../PageContent/PageContent';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';

function Page({ currentPage }) {

    const renderPage = () => {
      switch (currentPage.name) {
        case 'about me':
          return <About />;
        case 'portfolio':
          return <Portfolio />;
        case 'contact':
          return <Contact />;
        case 'resume':
          return <Resume />;
        default:
          return <About />;
      }
    };
  
    return (
      <section>
        <PageContent>{renderPage()}</PageContent>
      </section>
    );
  }
  export default Page;
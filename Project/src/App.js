import React from 'react';
import './App.css';

// const News = (props) => {
//   const { header, intro } = props;
//   return (
//     <div className='News'>
//       <h2>{header}</h2>
//       <p>{intro}</p>
//     </div>
//   )
// }

const orange = '#e67e22';

const styles = {
    backgroundColor: '#ecf0f1',
    border: '#1abc9c 1px solid',
    padding: 10,
    p: {
      background: orange
    }
}

// const News = (props) => {
//   const { header, intro } = props;
//   return (
//     <div style={styles}>
//       <h2>{header}</h2>
//       <p style={styles.p}>{intro}</p>
//     </div>
//   )
// }

class News extends React.Component {
  render(){
    const{header, intro} = this.props;
    return(
      <div style={styles}>
       <h2>{header}</h2>
       <p style={styles.p}>{intro}</p>
     </div>
    )
  }
}

const data = [
  {
    header: 'Nagłówek 1', intro: 'Intro 1'
  }, {
    header: 'Nagłówek 2', intro: 'Intro 2'
  }, {
    header: 'Nagłówek 3', intro: 'Intro 3'
  }
];

//data.map((element, index))

const App = () => {
  return (
    <>
      {data.map((elem, index) => (
        <News key={`news-${index}`} header={elem.header} intro={elem.intro} />
      ))}
    </>
  );
}
export default App;
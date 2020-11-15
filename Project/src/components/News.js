import React,{useState} from 'react';

import Author from './Author';
import Scoring from './Scoring';

const orange = '#e67e22';
const styles = {
  backgroundColor: '#ecf0f1',
  border: '#1abc9c 1px solid',
  padding: 10,
  p: {
    background: orange
  }
}

const News = (props) => {
    const { header, intro, author } = props;
    const [score] = useState(5);
    return (
      <div style={styles}>
        <h2>{header}</h2>
        <p style={styles.p}>{intro}</p>
        <Author props={author}/>
        <Scoring props={score} />
      </div>
    )
  }

  export default News;
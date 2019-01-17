import React, { Component } from 'react';
import styles from './App.module.scss';
import editorDefault from './test.md';
import MarkdownPreviewer from './components/MarkdownPreviewer';

class App extends Component {
    render() {
        return (
        <div className={styles.App}>
            <header className={styles.header}>
                <h1>freeCodeCamp Front End Libraries Projects</h1>
                <h2>Build a Markdown Previewer</h2>
            </header>
            <main className={styles.main}>
              <MarkdownPreviewer defaultValue={editorDefault} />
            </main>
            <footer>Copyright ©{new Date().getFullYear()} Roy Zhi</footer>
        </div>
        );
    }
}

export default App;

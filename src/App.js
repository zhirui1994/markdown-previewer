import React, { Component } from 'react';
import marked from 'marked';
import styles from './App.module.scss';
import editorDefault from './test.md';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-gist.css';

marked.setOptions({
    highlight: (code) => {
        return hljs.highlightAuto(code).value;
    }
})

class App extends Component {
    handleInput = (e) => {
        e.preventDefault();
        this.preview.innerHTML = marked(this.editor.value);
    }

    componentDidMount() {
        this.preview.innerHTML = marked(editorDefault);
    }

    render() {
        return (
        <div className={styles.App}>
            <header className={styles.header}>头部占位内容</header>
            <main className={styles.main}>
                <textarea spellCheck="false" ref={textarea => this.editor = textarea} defaultValue={editorDefault} onInput={this.handleInput} id="editor"></textarea>
                <section ref={section => this.preview = section} id="preview"></section>
            </main>
            <footer>脚部占位内容</footer>
        </div>
        );
    }
}

export default App;

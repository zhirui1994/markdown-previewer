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

class MarkdownPreviewer extends Component {
    handleInput = (e) => {
        const { onChange } = this.props;
        const value = this.editor.value;
        e.preventDefault();
        onChange(value);
        this.preview.innerHTML = marked(value);
    }

    componentDidMount() {
        this.preview.innerHTML = marked(editorDefault);
    }

    render() {
        return (
            <div className={styles.markdownPreviewer}>
                <textarea
                    id="editor"
                    spellCheck="false"
                    ref={textarea => this.editor = textarea}
                    defaultValue={editorDefault}
                    onInput={this.handleInput}
                ></textarea>
                <section
                    id="preview"
                    ref={section => this.preview = section}
                ></section>
            </div>
        );
    }
}

export default MarkdownPreviewer;

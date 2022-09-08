
import './Editor.scss'
function Editor({
    xFonksiyonu,
    suankiExpandEdilecek
}) {
    // const text =
    //     `# Welcome to my React Markdown Previewer!

    //    ## This is a sub-heading...
    //    ### And here's some other cool stuff:

    //    Heres some code, \`<div></div>\`, between 2 backticks.

    //    \`\`\`
    //    // this is multi-line code:

    //    function anotherExample(firstLine, lastLine) {
    //      if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    //        return multiLineCode;
    //      }
    //    }
    //    \`\`\`

    //    You can also make text **bold**... whoa!
    //    Or _italic_.
    //    Or... wait for it... **_both!_**
    //    And feel free to go crazy ~~crossing stuff out~~.

    //    There's also [links](https://www.freecodecamp.org), and
    //    > Block Quotes!

    //    And if you want to get really crazy, even tables:

    //    Wild Header | Crazy Header | Another Header?
    //    ------------ | ------------- | -------------
    //    Your content can | be here, and it | can be here....
    //    And here. | Okay. | I think we get it.

    //    - And of course there are lists.
    //      - Some are bulleted.
    //         - With different indentation levels.
    //            - That look like this.


    //    1. And there are numbered lists too.
    //    1. Use just 1s if you want!
    //    1. And last but not least, let's not forget embedded images:

    //    ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
    //    `;



    const array = [
        {       
            text: "# Welcome to my React Markdown Previewer!"
        },
        {
            text: "## This is a sub-heading..."
        },
        {
            text: "### And here's some other cool stuff:"
        },
        {
            text: "Heres some code, `<div></div>`, between 2 backticks."
        }

    ]
    return (
        <div className='container'>
            <div className="header anadiv" >
                <i className="fa-brands fa-free-code-camp"></i>
                <h3>Editor</h3>
                <i id="click" className="fa fa-arrows-alt" onClick={() => {
                    let expandEdilecek = "";
                    if (suankiExpandEdilecek === 'editor') {
                        expandEdilecek = "";
                    } else if (suankiExpandEdilecek === "") {
                        expandEdilecek = "editor"
                    }
                    xFonksiyonu(expandEdilecek);
                }}></i>
            </div>

            <div className='anadiv'>

                <div className='text' id="text" style={{ height: suankiExpandEdilecek === 'editor' ? 'auto' : '200px' }}>
                    <p>
                        {array[0].text}
                        <br></br><br></br>
                        {array[1].text}
                        <br></br>
                        {array[2].text}
                        <br></br><br></br>
                        {array[3].text}
                    </p>
                    <div className="kod">
                        <code>{"```"}</code>
                        <br></br>
                        <code>{"// this is multi-line code:"}</code>
                        <br></br>
                        <code>{"function anotherExample(firstLine, lastLine) {"}</code>
                        <br></br>
                        <code>{" if (firstLine == '```' && lastLine == '```') {"}</code>
                        <br></br>
                        <code>{" return multiLineCode;"}</code>
                        <br></br>
                        <code>{"}"}</code>
                        <br></br>
                        <code>{"}"}</code>
                        <br></br>
                        <code>{"```"}</code>

                    </div>
                    <p>You can also make text **bold**... whoa!
                        <br></br>
                        Or _italic_.
                        <br></br>
                        Or... wait for it... **_both!_**
                        <br></br>
                        And feel free to go crazy ~~crossing stuff out~~.
                    </p>
                    <p>
                        There's also [links](https://www.freecodecamp.org), and
                        <br></br>
                        {"> Block Quotes!"}
                    </p>
                    <p>
                        And if you want to get really crazy, even tables:
                    </p>
                    <p>
                        Wild Header | Crazy Header | Another Header?
                        <br></br>
                        ------------ | ------------- | -------------
                        <br></br>
                        Your content can | be here, and it | can be here....
                        <br></br>
                        And here. | Okay. | I think we get it.
                    </p>

                    <ul>
                        <li>- And of course there are lists.</li>
                        <li>- Some are bulleted.</li>
                        <li> - With different indentation levels.</li>
                        <li> - That look like this.</li>
                    </ul>
                    <ol>
                        <li>1.And there are numbered lists too.</li>
                        <li>1.Use just 1s if you want!</li>
                        <li>1.And last but not least, let's not forget embedded images:</li>
                    </ol>
                    <p className="img">![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)</p>


                </div>


            </div>


        </div>
    );
}

export default Editor;
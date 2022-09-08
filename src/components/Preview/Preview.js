
import './Preview.scss'

function Preview({ gFonksiyonu, suankiExpandEdilecek }) {

    const dizi = [

        {
            text: "Welcome to my React Markdown Previewer!"
        },
        {
            text: "This is a sub-heading..."
        },
        {
            text: "And here's some other cool stuff:"
        },
        {
            text: "Heres some code, "
        },
        {
            text: "kod"
        },
        {
            text: "You can also make text "
        },
        {
            text: "Or italic."
        },
        {
            text: "Or... wait for it... "
        },
        {
            text: "And feel free to go crazy "
        },
        {
            text: "There's also "
        },
        {
            text: "Block Quotes!"
        },
        {
            text: "And if you want to get really crazy, even tables:"
        }


    ]






    return (
        <div id="containerUsers" className="users-container">
            <div className='users'>
                <div className="users-header">
                    <i id="alev" className="fa-brands fa-free-code-camp"></i>
                    <h3>Preview</h3>
                    <i id="clickusers" className="fa fa-arrows-alt" onClick={() => {
                        let expandEdilecek = "";
                        if (suankiExpandEdilecek === 'preview') {
                            expandEdilecek = "";
                        } else if (suankiExpandEdilecek === "") {
                            expandEdilecek = "preview"
                        }
                        gFonksiyonu(expandEdilecek);
                    }}></i>
                </div>
                <div className='metin'>
                    <h2>{dizi[0].text}</h2>
                    <hr></hr>
                    <h3>{dizi[1].text}</h3>
                    <hr></hr>
                    <h4>{dizi[2].text}</h4>
                    <p>{dizi[3].text}<span className="divback">{"<div></div>"}</span>, between 2 backticks.</p>

                    <div className="kodblogu">
                        <code>{"{"}</code>
                        <br></br>
                        <code>{"// this is multi-line code:"}</code>
                        <br></br>
                        <code>{"function anotherExample(firstLine, lastLine) {"}</code>
                        <br></br>
                        <code>{"if (firstLine == '```' && lastLine == '```') {"}</code>
                        <br></br>
                        <code>{"return multiLineCode;"}</code>
                        <br></br>
                        <code>{"}"}</code>
                        <br></br>
                        <code>{"}"}</code>

                    </div>
                    <p> {dizi[5].text}<span className="kalın">bold</span>... whoa!</p>
                    <p> {dizi[6].text}</p>
                    <p> {dizi[7].text} <span className="kalın">both!</span></p>
                    <p> {dizi[8].text} <span className="üstçizgi">crossing stuff out.</span> </p>
                    <p> {dizi[9].text}<a href="www.google.com">links,</a>and</p>
                    <p> {dizi[10].text}</p>
                    <p> {dizi[11].text}</p>
                </div>
                <div className='table'>
                    <table >

                        <tr>
                            <th><bold>Wild Header</bold> </th> <th><bold>Crazy Header</bold></th> <th><bold>Another Header?</bold></th>
                        </tr>
                        <tr>
                            <td>Your content can</td> <td> be here, and it </td><td>can be here....</td>
                        </tr>
                        <tr>
                            <td>And here.</td> <td>	Okay.</td> <td>I think we get it.</td>
                        </tr>
                    </table>

                    <ul>
                        <li className="li1" >And of course there are lists</li>
                        <li className="li2">Some are bulleted.</li>
                        <li className="li3">With different indentation levels.</li>
                        <li className="li4">That look like this.</li>
                    </ul>
                    <ol>
                        <li>And there are numbered lists too.</li>
                        <li>Use just 1s if you want!</li>
                        <li>And last but not least, let's not forget embedded images:</li>
                    </ol>
                    <p className="image">
                        <img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg" alt="freeCodeCamp Logo" />
                    </p>
                </div>
            </div>


        </div>
    );

}

export default Preview;
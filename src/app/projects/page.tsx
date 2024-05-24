export default function Page() {
    return (
        <main id="content-container">
            <h1 className="text-5xl lg:text-8xl">Projects</h1>
            <p>Here are some projects I&apos;ve worked on</p>
            <article>
                <h2>1on1</h2>
                <p>Created using: Django, React</p>
                <p>1on1 is a web app that allows users to schedule meetings with other users I made in a group for a school project. It consists of a <u>RESTful API</u> written using <u>Django</u> for the backend, and a beautiful and responsive frontend made with <u>React</u> using the Create React App framework.</p>
                <p>I gained a lot of experience in writing both <u>backend and frontend</u> code through this project, and learned what it was like to work on a team for a web-dev project.</p>
            </article>
            <hr/>
            <article>
                <h2>Discord Bot</h2>
                <p>Created using: Java</p>
                <p>A discord bot I wrote using the Javacord API for use in private servers. It helps with simple tasks such as server administration, and also provides other utilities such as weather reports.</p>
                <p>Through this project I was able to apply a lot of the <u>software design</u> and <u>object-oriented programming</u> principles I learned in university. Additionally, it gave me a lot of experience working with <u>external APIs.</u></p>
            </article>
            <hr/>
            <article>
                <h2>E-sports Data Analysis</h2>
                <p>Created Using: R, Rmarkdown</p>
                <p>A linear regression analysis on some e-sports player data which I then summarised in a clearly written paper.</p>
                <p>Through this project I gained experience working with messy <u>real-world data</u> and improved my communication skills by summarising my findings.</p>
            </article>
            <hr/>
            <article>
                <h2>Personal Website</h2>
                <p>Created using: React</p>
                <p>The website you&apos;re looking at right now. A simple website I created to serve as a portfolio built using Next.js.</p>
                <p>Through this project I gained experience working with new frameworks for React (Next.js) and for CSS (Tailwind), as well as working with TypeScript for the first time. I also gained experience deploying a website through this project.</p>
            </article>
            
        </main>
    );
}
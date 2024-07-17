export default function Layout(props){
    return(
        <>
            <div>
                HEADER
            </div>
            <main>
                {props.ch}
            </main>
            <footer>
                FOOTER
            </footer>
        </>
    )
}
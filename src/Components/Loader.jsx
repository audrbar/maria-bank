import Footer from "./Footer";

function Loader() {

    return (
        <div className="ontainer mx-auto flex flex-col h-96 items-center justify-between p-4 rounded-xl shadow-md">
            <div className="spinner-border" role="status">
                <span className="visually-hidden p-6 text-3xl">Loading...</span>
            </div>
            <Footer />
        </div>
    )

}

export default Loader;
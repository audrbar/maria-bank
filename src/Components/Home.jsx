import React from 'react'
import Footer from './Footer';
import Totals from './Totals';

const Home = () => {
    return (
        <>
            <div className="container mx-auto back-ground-image flex flex-col gap-y-12 items-center justify-between p-6 rounded-xl shadow-md mb-2">
                <h1 className="text-3xl text-center p-4 md:mt-8">We are number ONE!</h1>
                <h1 className="text-4xl text-center p-4 cursor-pointer hover:text-darkGrayishBlue">Our clients trust us:</h1>
                <Totals />
                <Footer />
            </div>
        </>
    )
}

export default Home;

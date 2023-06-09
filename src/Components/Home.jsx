import React from 'react';
import Footer from './Footer';
import Totals from './Totals';
import Navbar from './Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto back-ground-image flex flex-col gap-y-12 items-center justify-between p-6 rounded-xl shadow-md mb-2">
                <h1 className="text-2xl text-center p-4 md:mt-8 md:text-3xl">
                    We are number ONE!
                </h1>
                <h1 className="text-xl text-center p-4 cursor-pointer hover:text-darkGrayishBlue md:text-3xl">
                    Our clients trust us:
                </h1>
                <Totals />
                <Footer />
            </div>
        </>
    );
};

export default Home;

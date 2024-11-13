import React from 'react';

const ContactUsComponent = () => {
    return (
        <div className="justify-center m-5 md:mx-10 md:my-12">
            <div className="">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-red-600 font-bold">
                    Contact Us
                </h2>
                <p className="text-gray-500 mt-2 text-sm">Last updated on 27-10-2024 20:01:07</p>
                <section className="my-8 md:text-justify">
                    <h1 className="font-bold text-lg sm:text-2xl mt-4">
                        Reach Out to Us Using the Information Below
                    </h1>
                    <p className="text-gray-700 my-4">
                        If you have any questions, concerns, or need assistance, feel free to contact us using the details provided:
                    </p>

                    <div className="space-y-4 text-gray-700">
                        <div>
                            <p>Merchant Legal Entity Name</p>
                            <h2 className="text-xl font-bold text-gray-800">ROHIT CHOUHAN</h2>
                        </div>

                        <div>
                            <p>Registered Address</p>
                            <h2 className="text-xl font-bold text-gray-800">E 134 Old Minal Residency Minal Mall JK Road, Bhopal, Madhya Pradesh, PIN: 462023</h2>
                        </div>

                        <div>
                            <p>Operational Address</p>
                            <h2 className="text-xl font-bold text-gray-800">E 134 Old Minal Residency Minal Mall JK Road, Bhopal, Madhya Pradesh, PIN: 462023</h2>
                        </div>

                        <div>
                            <p>Telephone No</p>
                            <h2 className="text-xl font-bold text-gray-800">9630302018</h2>
                        </div>

                        <div>
                            <p>E-Mail ID</p>
                            <h2 className="text-xl font-bold text-gray-800">info@dakshifoundation.in</h2>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ContactUsComponent;

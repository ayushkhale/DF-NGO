import React, { useEffect } from 'react';

const CancellationRefund = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
        <div className="justify-center m-2 md:mx-10 md:my-12">
            <div className="w-full">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-red-600 font-bold">
                    Cancellation & Refund Policy
                </h2>
                <p className="text-gray-500 mt-2 text-sm">Last updated on 27-10-2024 21:09:47</p>
                <h1 className="font-bold text-lg sm:text-2xl mt-4">
                    ROHIT CHOUHAN's Customer-Friendly Cancellation Policy
                </h1>
                <section className="my-8 md:text-justify">
                    <h2 className="text-2xl font-bold my-2 font-Sen tracking-tight underline decoration-gray-400 decoration-2">
                        Cancellation Policy
                    </h2>
                    <p className="text-gray-700 mb-4">
                        ROHIT CHOUHAN believes in helping its customers as far as possible and has therefore implemented a liberal cancellation policy.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 font-semibold space-y-2">
                        <li>
                            Cancellations will only be considered if the request is made immediately after placing the order. 
                            However, if the order has already been processed for shipping, cancellation requests may not be accepted.
                        </li>
                        <li>
                            Cancellations are not accepted for perishable items such as flowers or edible goods. However, a refund or replacement 
                            can be arranged if the delivered product is proven to be of unsatisfactory quality.
                        </li>
                        <li>
                            For defective or damaged items, please report to our Customer Service on the same day of receipt. Requests are entertained 
                            after the merchant verifies the issue at their end.
                        </li>
                        <li>
                            If the received product does not match the website description or does not meet your expectations, notify Customer Service 
                            within the same day. Appropriate action will be taken following a review of your complaint.
                        </li>
                    </ul>
                </section>
                <section className="my-8 md:text-justify">
                    <h2 className="text-2xl font-bold my-2 font-Sen tracking-tight underline decoration-gray-400 decoration-2">
                        Refund Policy
                    </h2>
                    <p className="text-gray-700 mb-4">
                        For complaints regarding products with a manufacturer warranty, please contact the manufacturer directly.
                    </p>
                    <p className="text-gray-700 mb-4">
                        If a refund is approved by ROHIT CHOUHAN, it may take approximately 16-30 days for the refund to be processed and reflected 
                        back to the customer.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default CancellationRefund;

import React from 'react'

const Policycomponent = () => {
    return (
        <div>
            <div className="justify-center m-5 md:mx-10 md:my-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-red-600 font-bold">
                    Privacy Policy
                </h2>
                <h1 className="font-bold text-md sm:text-lg mt-2">
                    @ Dakshi Foundation, <span className='text-gray-500 font-normal text-sm'>Innovation for Change</span>
                </h1>
                <section className="my-6 md:text-justify  ">
                    <p className="text-gray-700 mb-2">
                        At Dakshi Foundation Innovation for Change, we are committed to protecting the privacy and confidentiality of individuals' personal information. This Privacy Policy outlines how we collect, use, and safeguard the personal data of our stakeholders, including donors, partners, beneficiaries, and website visitors.
                    </p>
                </section>
                
                <section className="my-6 md:text-justify  ">
                    <h2 className="text-2xl font-bold mb-2 tracking-tight">
                        Information We Collect
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 mb-2 font-semibold">
                        <li>
                            <strong>Personal Information:</strong> We may collect personal information such as names, contact details, and addresses from donors, partners, and individuals participating in our programs.
                        </li>
                        <li>
                            <strong>Financial Information:</strong> For donation purposes, we may collect payment information, such as credit card details or bank account information, which is securely processed and stored.
                        </li>
                        <li>
                            <strong>Website Data:</strong> When you visit our website, we may collect data such as IP addresses, browser information, and cookies to enhance your browsing experience and analyze website traffic.
                        </li>
                    </ul>
                </section>

                <section className="my-6 md:text-justify  ">
                    <h2 className="text-2xl font-bold mb-2 tracking-tight">
                        How We Use Your Information
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 mb-2 font-semibold">
                        <li>
                            <strong>Donor Communication:</strong> Personal information provided by donors is used to communicate with them, provide donation receipts, and update them on our programs and initiatives.
                        </li>
                        <li>
                            <strong>Program Participation:</strong> Information collected from program participants is used for registration, program delivery, and monitoring and evaluation purposes.
                        </li>
                        <li>
                            <strong>Website Analytics:</strong> Website data is used to analyze visitor trends, improve website functionality, and personalize content to better serve our online audience.
                        </li>
                    </ul>
                </section>

                <section className="my-6 md:text-justify  ">
                    <h2 className="text-2xl font-bold mb-2 tracking-tight">
                        Data Security
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 mb-2 font-semibold">
                        <li>
                            <strong>Confidentiality:</strong> We maintain strict confidentiality protocols to safeguard personal information from unauthorized access or disclosure.
                        </li>
                        <li>
                            <strong>Data Protection:</strong> We utilize secure data storage systems and encryption techniques to protect personal data from security threats.
                        </li>
                        <li>
                            <strong>Third-Party Services:</strong> We may engage third-party service providers for data processing, who are bound by confidentiality agreements and data protection regulations.
                        </li>
                    </ul>
                </section>

                <section className="my-6 md:text-justify  ">
                    <h2 className="text-2xl font-bold mb-2 tracking-tight">
                        Data Retention
                    </h2>
                    <p className="text-gray-700 mb-2">
                        We retain personal data only for the period necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. After this period, data is securely archived or anonymized.
                    </p>
                </section>

                <section className="my-6 md:text-justify  ">
                    <h2 className="text-2xl font-bold mb-2 tracking-tight">
                        Your Rights
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 mb-2 font-semibold">
                        <li>
                            <strong>Access:</strong> You have the right to access and review the personal information we hold about you.
                        </li>
                        <li>
                            <strong>Correction:</strong> You can request corrections to any inaccuracies in your personal data that we maintain.
                        </li>
                        <li>
                            <strong>Opt-Out:</strong> You have the option to opt-out of receiving communications from us at any time.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Policycomponent

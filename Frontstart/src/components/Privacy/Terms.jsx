import React from 'react';

const Terms = () => {
  return (
    <div className="flex justify-center m-5 md:mx-10 md:my-12">
      <div className="w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-red-600 font-bold">
          Terms & Conditions
        </h2>
        <p className="text-gray-500 text-sm mt-2">Last updated on 27-10-2024 21:09:22</p>
        <section className="my-8">
          <p className="text-gray-700">
          These Terms and Conditions, along with privacy policy or other terms (“Terms”) constitute a binding
          agreement by and between ROHIT CHOUHAN, ( “Website Owner” or “we” or “us” or “our”) and you
          (“you” or “your”) and relate to your use of our website, goods (as applicable) or services (as applicable)
          (collectively, “Services”).

          </p>
          <p className="text-gray-700 mt-4">
            By using our website and availing of the Services, you agree that you have read and
            accepted these Terms (including the Privacy Policy). We reserve the right to modify
            these Terms at any time and without assigning any reason. It is your responsibility to
            periodically review these Terms to stay informed of updates.
          </p>
        </section>

        <section className="my-8">
          <h3 className="text-2xl font-bold my-2">Terms of Use:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 font-semibold">
            <li>
              To access and use the Services, you agree to provide true, accurate, and complete
              information to us during and after registration, and you shall be responsible for all
              acts done through the use of your registered account.
            </li>
            <li>
              Neither we nor any third parties provide any warranty or guarantee as to the accuracy,
              timeliness, performance, completeness, or suitability of the information and materials
              offered on this website or through the Services.
            </li>
            <li>
              Your use of our Services and the website is solely at your own risk and discretion. You
              are required to independently assess and ensure that the Services meet your
              requirements.
            </li>
            <li>
              The contents of the Website and the Services are proprietary to Us, and you will not
              have any authority to claim any intellectual property rights, title, or interest in its
              contents.
            </li>
            <li>
              You acknowledge that unauthorized use of the Website or the Services may lead to action
              against you as per these Terms or applicable laws.
            </li>
            <li>You agree to pay us the charges associated with availing of the Services.</li>
            <li>
              You agree not to use the website and/or Services for any purpose that is unlawful,
              illegal, or forbidden by these Terms, or Indian or local laws that might apply to you.
            </li>
            <li>
              You agree and acknowledge that the website and the Services may contain links to other
              third-party websites. Upon accessing these links, you will be governed by the terms of
              use, privacy policy, and such other policies of such third-party websites.
            </li>
            <li>
              You understand that upon initiating a transaction for availing of the Services, you are
              entering into a legally binding and enforceable contract with us for the Services.
            </li>
            <li>
              You shall be entitled to claim a refund of the payment made by you if we are not able
              to provide the Service. The timelines for such return and refund will be according to
              the specific Service you have availed or within the period provided in our policies (as
              applicable).
            </li>
            <li>
              Notwithstanding anything contained in these Terms, the parties shall not be liable for
              any failure to perform an obligation under these Terms if performance is prevented or
              delayed by a force majeure event.
            </li>
          </ul>
        </section>

        <section className="my-4">
          <h3 className="text-2xl font-bold my-2">Governing Law and Jurisdiction:</h3>
          <p className="text-gray-700 mb-4">
            These Terms and any dispute or claim relating to it, or its enforceability, shall be
            governed by and construed in accordance with the laws of India.
          </p>
          <p className="text-gray-700">
            All disputes arising out of or in connection with these Terms shall be subject to the
            exclusive jurisdiction of the courts in Bhopal, Madhya Pradesh.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;

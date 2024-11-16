import React, { useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import templatePdf from '../../../reciept.pdf'
const Donateform = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Mobile_No: "",
    Address: "",
    AdharId: "",
    Donation: "",
    Toward: "",
    Remark: "",
  });

  const [isLoading, setIsLoading] = useState(false); // For loading state
  const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility
  const [modalMessage, setModalMessage] = useState(''); // Modal message

  const Loader = () => (
    <div className="flex justify-center items-center">
      <div className="w-16 h-16 border-t-4 border-red-500 border-solid rounded-full animate-spin"></div>
    </div>
  );

  const Modal = ({ message, onClose }) => (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h3 className="text-xl font-bold mb-4">{message}</h3>
        <button
          onClick={onClose}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
  


  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "Donation" ? value.replace(/[^\d]/g, '') : value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.Name) errors.Name = "Full Name is required";
    if (!formData.Email) errors.Email = "Email is required";
    if (!formData.Mobile_No) errors.Mobile_No = "Phone Number is required";
    if (!formData.Address) errors.Address = "Address is required";
    if (!formData.AdharId) errors.AdharId = "Adhaar ID No. is required";
    if (!formData.Donation)
      errors.Donation = "Donation Amount is required";
    if (!formData.Toward) errors.Toward = "Purpose of Donation is required";
    return errors;
  };

  const generateCertificate = async (formData, receipt, date) => {
    setIsLoading(true); // Show loader
    try {
      const templatePdfBytes = await fetch(templatePdf).then((res) => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(templatePdfBytes);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
  
      const textOptions = { size: 12, color: rgb(0, 0, 0) };
  
      const name = formData.Name || "N/A";
      const address = formData.Address || "N/A";
      const amount = formData.Donation || "N/A";
      const toward = formData.Toward || "N/A";
      const remark = formData.Remark || "N/A";
  
      const centerX = firstPage.getWidth() / 2;
      const startY = 600;
      const lineSpacing = 20;
  
      const drawCenteredText = (text, yOffset) => {
        const textWidth = text.length * 5;
        const x = centerX - textWidth / 2;
        firstPage.drawText(text, { x, y: yOffset, ...textOptions });
      };
  
      drawCenteredText(`Name: ${name}`, startY);
      drawCenteredText(`Address: ${address}`, startY - lineSpacing);
      drawCenteredText(`Amount: Rs.${amount}`, startY - lineSpacing * 2);
      drawCenteredText(`Purpose of Donation: ${toward}`, startY - lineSpacing * 3);
      drawCenteredText(`Remarks: ${remark}`, startY - lineSpacing * 4);
      drawCenteredText(`Receipt No: ${receipt}`, startY - lineSpacing * 5);
      drawCenteredText(`Date: ${date}`, startY - lineSpacing * 6);
  
      const modifiedPdfBytes = await pdfDoc.save();
      const blob = new Blob([modifiedPdfBytes], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "donation_receipt.pdf";
      link.click();
    } catch (error) {
      console.error("Error generating certificate:", error);
    } finally {
      setIsLoading(false); // Hide loader
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true); // Show loader
      try {
        const response = await fetch("https://dakshifoundation.in/create-donation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error("Something went wrong with the donation request.");
        }
  
        const data = await response.json();
        const receipt = data.receipt_no; // Extract receipt number from the response
        const currentDate = new Date().toLocaleDateString(); // Get current date in readable format
  
        const options = {
          key: "rzp_test_bVnwqq5GvuvOi4",
          order_id: data.order.id,
          amount: data.order.amount,
          currency: "INR",
          handler: function (response) {
            const paymentId = response.razorpay_payment_id;
            const orderId = response.razorpay_order_id;
            const signature = response.razorpay_signature;
  
            fetch('https://dakshifoundation.in/payment-verification', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                payment_id: paymentId,
                order_id: orderId,
                signature: signature,
                data: formData
              }),
            })
              .then(response => response.json())
              .then(data => {
                generateCertificate(formData, receipt, currentDate); // Pass receipt and current date
                setModalMessage("Payment Successful! Your donation receipt is being generated.");
                setIsModalOpen(true); // Open the modal
              })
              .catch((error) => {
                console.error('Error:', error);
              });
          },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
  
        console.log("Donation submitted successfully:", data);
        setFormData({
          Name: "",
          Email: "",
          Mobile_No: "",
          Address: "",
          AdharId: "",
          Donation: "",
          Toward: "",
          Remark: "",
        });
      } catch (error) {
        console.error("Error during donation submission:", error);
        alert("There was an error processing your donation. Please try again later.");
      } finally {
        setIsLoading(false); // Hide loader
      }
    }
  };  


  

  return (
    <section id="donate-form" className="py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-8">Make a Donation</h2>

      {isLoading && <Loader />} {/* Show loader */}
        <form className="max-w-lg mx-auto grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          {/* Full Name and Email (two items in one line) */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <input
                type="text"
                name="Name"
                placeholder="Full Name"
                value={formData.Name}
                onChange={handleInputChange}
                className="border border-gray-600 p-3 rounded-md w-full focus:outline-none focus:ring focus:ring-red-500 transition"
              />
              {errors.Name && <span className="text-red-500 text-sm">{errors.Name}</span>}
            </div>
            <div className="flex flex-col">
              <input
                type="Email"
                name="Email"
                placeholder="Email"
                value={formData.Email}
                onChange={handleInputChange}
                className="border border-gray-600 p-3 rounded-md w-full focus:outline-none focus:ring focus:ring-red-500 transition"
              />
              {errors.Email && <span className="text-red-500 text-sm">{errors.Email}</span>}
            </div>
          </div>

          {/* Mobile_No and Address */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <input
                type="text"
                name="Mobile_No"
                placeholder="Phone Number"
                value={formData.Mobile_No}
                onChange={handleInputChange}
                className="border border-gray-600 p-3 rounded-md w-full focus:outline-none focus:ring focus:ring-red-500 transition"
              />
              {errors.Mobile_No && <span className="text-red-500 text-sm">{errors.Mobile_No}</span>}
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="Address"
                placeholder="Address"
                value={formData.Address}
                onChange={handleInputChange}
                className="border border-gray-600 p-3 rounded-md w-full focus:outline-none focus:ring focus:ring-red-500 transition"
              />
              {errors.Address && <span className="text-red-500 text-sm">{errors.Address}</span>}
            </div>
          </div>

          {/* Donation Amount and Purpose */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <div className="relative">
                <span className="absolute inset-y-0 left-2 flex items-center text-gray-600">
                  {formData.Donation ? "₹" : ""}
                </span>
                <input
                  type="number"
                  name="Donation"
                  placeholder="Amount (in INR)"
                  value={formData.Donation}
                  onChange={handleInputChange}
                  className="border border-gray-600 p-3 rounded-md w-full pl-7 focus:outline-none focus:ring focus:ring-red-500 transition"
                />
              </div>
              {errors.Donation && <span className="text-red-500 text-sm">{errors.Donation}</span>}
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                name="Toward"
                placeholder="Toward (Purpose)"
                value={formData.Toward}
                onChange={handleInputChange}
                className="border border-gray-600 p-3 rounded-md w-full focus:outline-none focus:ring focus:ring-red-500 transition"
              />
              {errors.Toward && <span className="text-red-500 text-sm">{errors.Toward}</span>}
            </div>
          </div>

          {/* ID Number (Adhaar/PAN) */}
          <div className="flex flex-col bg-white border rounded-md items-center">
            <input
              type="text"
              name="AdharId"
              placeholder="Adhaar, PAN or Any ID Proof"
              value={formData.AdharId}
              onChange={handleInputChange}
              className="border border-gray-600 p-3 rounded-md w-full focus:outline-none focus:ring focus:ring-red-500 transition"
            />
            {errors.AdharId && <span className="text-red-500 text-sm">{errors.AdharId}</span>}
          </div>

          {/* Remark */}
          <div className="flex flex-col">
            <textarea
              name="Remark"
              placeholder="Remark (Optional)"
              value={formData.Remark}
              onChange={handleInputChange}
              className="border border-gray-600 p-3 rounded-md w-full focus:outline-none focus:ring focus:ring-red-500 transition"
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-red-600 transition w-full"
            >
              Donate Now
            </button>
          </div>
        </form>
      </div>
      {isModalOpen && <Modal message={modalMessage} onClose={() => setIsModalOpen(false)} />} {/* Show modal */}
      </section>
  );
};

export default Donateform;

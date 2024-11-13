import React, { useState } from 'react';

const Volunteerform = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Fathers_Name: '',
        Mobile_No: '',
        Email: '',
        Qualification: '',
        Work_Experience: '',
        Address: '',
        About_You: '',
        Image: null,
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); // State for loader
    const [successModal, setSuccessModal] = useState(false); // State for success modal

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            Image: file,
        });
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.Name) errors.Name = 'Name is required';
        if (!formData.Fathers_Name) errors.Fathers_Name = 'Father\'s Name is required';
        if (!formData.Mobile_No) errors.Mobile_No = 'Mobile Number is required';
        if (!formData.Email) errors.Email = 'Email is required';
        if (!formData.Qualification) errors.Qualification = 'Qualification is required';
        if (!formData.Work_Experience) errors.Work_Experience = 'Working Experience is required';
        if (!formData.Address) errors.Address = 'Address is required';
        if (!formData.About_You) errors.About_You = 'About you is required';
        if (!formData.Image) errors.Image = 'Image is required';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setLoading(true); // Show loader
            const formPayload = new FormData();
            for (let key in formData) {
                formPayload.append(key, formData[key]);
            }

            fetch('https://dakshifoundation.in/submit', {
                method: 'POST',
                body: formPayload,
            })
            .then(response => response.json())
            .then(data => {
                console.log("Form Data Submitted:", data);
                setLoading(false); // Hide loader
                setSuccessModal(true); // Show success modal

                // Reset form fields
                setFormData({
                    Name: '',
                    Fathers_Name: '',
                    Mobile_No: '',
                    Email: '',
                    Qualification: '',
                    Work_Experience: '',
                    Address: '',
                    About_You: '',
                    Image: null,
                });
                setErrors({});
            })
            .catch(error => {
                console.error("Error submitting form:", error);
                setLoading(false); // Hide loader in case of error
            });
        }
    };

    const closeModal = () => {
        setSuccessModal(false); // Close success modal
    };

    return (
        <div>
            {/* Modal for successful submission */}
            {successModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
                    <div className="bg-white p-6 rounded-lg text-center max-w-sm w-full">
                        <h2 className="text-2xl font-bold text-green-600">Form Submitted Successfully!</h2>
                        <p className="text-lg text-gray-700 mt-4">Thank you for your submission. We will get in touch soon!</p>
                        <button
                            onClick={closeModal}
                            className="mt-6 bg-red-600 text-white px-4 py-2 rounded-md"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Loader */}
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
                    <div className="text-white font-bold">Loading...</div>
                </div>
            )}

            {/* Form Section */}
            <section className="">
                <div className="container mx-auto px-4">
                    <form className="mt-8 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div className="flex flex-col">
                            <input 
                                type="text" 
                                name="Name" 
                                placeholder="Name" 
                                value={formData.Name}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.Name && <span className="text-red-500 text-sm">{errors.Name}</span>}
                        </div>

                        {/* Father's Name */}
                        <div className="flex flex-col">
                            <input 
                                type="text" 
                                name="Fathers_Name" 
                                placeholder="Father's Name" 
                                value={formData.Fathers_Name}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.Fathers_Name && <span className="text-red-500 text-sm">{errors.Fathers_Name}</span>}
                        </div>

                        {/* Mobile Number */}
                        <div className="flex flex-col">
                            <input 
                                type="text" 
                                name="Mobile_No" 
                                placeholder="Mobile Number" 
                                value={formData.Mobile_No}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.Mobile_No && <span className="text-red-500 text-sm">{errors.Mobile_No}</span>}
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <input 
                                type="email" 
                                name="Email" 
                                placeholder="Email" 
                                value={formData.Email}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.Email && <span className="text-red-500 text-sm">{errors.Email}</span>}
                        </div>

                        {/* Qualification */}
                        <div className="flex flex-col">
                            <input 
                                type="text" 
                                name="Qualification" 
                                placeholder="Qualification" 
                                value={formData.Qualification}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.Qualification && <span className="text-red-500 text-sm">{errors.Qualification}</span>}
                        </div>

                        {/* Working Experience */}
                        <div className="flex flex-col">
                            <input 
                                type="text" 
                                name="Work_Experience" 
                                placeholder="Working Experience" 
                                value={formData.Work_Experience}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.Work_Experience && <span className="text-red-500 text-sm">{errors.Work_Experience}</span>}
                        </div>

                        {/* Address */}
                        <div className="flex flex-col">
                            <input 
                                type="text" 
                                name="Address" 
                                placeholder="Address" 
                                value={formData.Address}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full" 
                            />
                            {errors.Address && <span className="text-red-500 text-sm">{errors.Address}</span>}
                        </div>

                        {/* Image Input */}
                        <div className="flex flex-col">
                            <input 
                                type="file" 
                                name="Image" 
                                onChange={handleImageChange} 
                                className="border border-gray-300 p-3 rounded-md w-full"
                            />
                            <p className='px-4 text-red-400'>Upload your photograph</p>
                            {errors.Image && <span className="text-red-500 text-sm">{errors.Image}</span>}
                        </div>

                        {/* About_You */}
                        <div className="flex flex-col sm:col-span-2">
                            <textarea 
                                name="About_You" 
                                placeholder="About yourself"
                                value={formData.About_You}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-3 rounded-md w-full h-32" 
                            />
                            {errors.About_You && <span className="text-red-500 text-sm">{errors.About_You}</span>}
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="bg-red-600 text-white px-4 py-2 rounded-md w-full sm:col-span-2"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Volunteerform;

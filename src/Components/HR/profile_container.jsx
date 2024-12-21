import React, { useState } from 'react';

const AccountProfile = ({ onEdit }) => {
  const profileData = {
    name: 'Samantha',
    age: '19',
    phone: '04554884859',
    email: 'samantha@gmail.com',
    address: '25 Rue bla bli bla bla',
  };

  return (
    <div className="flex justify-center items-center min-h-screen flex-col p-4 mt-8">
      <div className="w-full relative z-10 max-w-md">
        <div className="h-24 mx-2 absolute -top-5 rounded-3xl z-0 w-[95%] bg-[#12395D]"></div>
        <img
          src="/vite.svg"
          alt="Profile"
          className="size-28 rounded-full bg-slate-500 p-1 z-20 absolute -top-16 left-1/2 transform -translate-x-1/2 object-cover"
        />
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="bg-[#7DB0DE] h-24 z-10 relative"></div>
          <div className="flex items-center z-10 h-16">
            <h2 className="text-3xl font-semibold text-[#12395D] ml-2">Account info</h2>
          </div>
          <div className="shadow-md shadow-[#7DB0DE]">
            <div className="bg-[#7DB0DE] p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-[#12395D] font-medium">Name:</h3>
                  <p className="text-gray-600">{profileData.name}</p>
                </div>
                <div>
                  <h3 className="text-[#12395D] font-medium">Age:</h3>
                  <p className="text-gray-600">{profileData.age}</p>
                </div>
                <div>
                  <h3 className="text-[#12395D] font-medium">Phone number:</h3>
                  <p className="text-gray-600">{profileData.phone}</p>
                </div>
                <div>
                  <h3 className="text-[#12395D] font-medium">Email:</h3>
                  <p className="text-gray-600">{profileData.email}</p>
                </div>
                <div>
                  <h3 className="text-[#12395D] font-medium">Address:</h3>
                  <p className="text-gray-600">{profileData.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto flex justify-end">
        <button
          className="bg-[#12395D] w-44 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors"
          onClick={onEdit}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

const EditProfile = ({ onConfirm }) => {
  const [formData, setFormData] = useState({
    newAddress: '',
    newPhone: '',
    previousPassword: '',
    newPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen flex-col p-4 mt-8">
      <div className="w-full relative z-10 max-w-md">
        <div className="h-24 mx-2 absolute -top-5 rounded-t-3xl -z-10 w-[95%] bg-[#7DB0DE]"></div>
        <form>
          <div className="bg-[#12395D] rounded-3xl mt-3 shadow-lg overflow-hidden">
            <div className="p-6 pt-14">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="newAddress"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    New Address
                  </label>
                  <input
                    type="text"
                    id="newAddress"
                    name="newAddress"
                    value={formData.newAddress}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="newPhone"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    New Phone Number
                  </label>
                  <input
                    type="tel"
                    id="newPhone"
                    name="newPhone"
                    value={formData.newPhone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="previousPassword"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Previous Password
                  </label>
                  <input
                    type="password"
                    id="previousPassword"
                    name="previousPassword"
                    value={formData.previousPassword}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="newPassword"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="bottom-4 right-4 bg-[#12395D] w-44  text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors"/>
                  
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="w-[90%] mx-auto flex justify-end mt-4">
        <button
          type="submit"
          className="bg-[#12395D] w-44 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors"
          onClick={onConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

const ProfileContainer = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {isEditing ? (
        <EditProfile onConfirm={() => setIsEditing(false)} />
      ) : (
        <AccountProfile onEdit={() => setIsEditing(true)} />
      )}
    </>
  );
};

export default ProfileContainer;

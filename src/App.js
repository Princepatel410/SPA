import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthdate: "",
    gender: "",
    interests: [],
    note: "",
  });

  const [formList, setFormList] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [selectedInterests, setSelectedInterests] = useState([]);
  
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('forms')) || [];
    setFormList(storedData);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        interests: checked
          ? [...prevData.interests, value]
          : prevData.interests.filter((interest) => interest !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString();
    const updatedFormData = {
      ...formData,
      createdAt: currentDate,
      updatedAt: currentDate,
    };

    if (editIndex !== null) {
      const updatedFormList = [...formList];
      updatedFormList[editIndex] = updatedFormData;
      localStorage.setItem('forms', JSON.stringify(updatedFormList));
      setFormList(updatedFormList);
      setEditIndex(null);
    } else {
      const updatedFormList = [...formList, updatedFormData];
      localStorage.setItem('forms', JSON.stringify(updatedFormList));
      setFormList(updatedFormList);
    }

    setFormData({
      name: "",
      email: "",
      password: "",
      phone: "",
      birthdate: "",
      gender: "",
      interests: [],
      note: "",
    });
  };

  const handleRemove = (index) => {
    const confirmation = window.confirm("Are you sure you want to remove this form?");
    if (confirmation) {
      const updatedFormList = formList.filter((_, i) => i !== index);
      localStorage.setItem('forms', JSON.stringify(updatedFormList));
      setFormList(updatedFormList);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(formList[index]);
  };

  const handleCardClick = (index) => {
    setModalData(formList[index]);
  };

  const handleModalClose = () => {
    setModalData(null);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    const sortedList = [...formList].sort((a, b) => {
      const dateA = new Date(a.birthdate);
      const dateB = new Date(b.birthdate);
      return order === 'asc' ? dateB - dateA : dateA - dateB;
    });
    setFormList(sortedList);
  };

  const handleInterestFilter = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const filteredForms = formList.filter((item) => {
    if (selectedInterests.length === 0) return true;
    return selectedInterests.every(interest => item.interests.includes(interest));
  });

  return (
    <div className="App">
      <h1>Form Submission</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>Interests:</label>
        <label>
          <input
            type="checkbox"
            value="Gaming"
            checked={formData.interests.includes("Gaming")}
            onChange={handleChange}
          />
          Gaming
        </label>
        <label>
          <input
            type="checkbox"
            value="Book Reading"
            checked={formData.interests.includes("Book Reading")}
            onChange={handleChange}
          />
          Book Reading
        </label>
        <label>
          <input
            type="checkbox"
            value="Travelling"
            checked={formData.interests.includes("Travelling")}
            onChange={handleChange}
          />
          Travelling
        </label>
        <label>
          <input
            type="checkbox"
            value="Listening Songs"
            checked={formData.interests.includes("Listening Songs")}
            onChange={handleChange}
          />
          Listening Songs
        </label>
        <label>
          <input
            type="checkbox"
            value="Painting"
            checked={formData.interests.includes("Painting")}
            onChange={handleChange}
          />
          Painting
        </label>
        <label>
          Note:
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">{editIndex !== null ? "Update" : "Submit"}</button>
      </form>


      <div className="sort-filter">
        <button
          onClick={() => handleSort('asc')}
          className={sortOrder === 'asc' ? 'selected' : ''}
        >
          Sort by Birth Date ASC
        </button>
        <button
          onClick={() => handleSort('desc')}
          className={sortOrder === 'desc' ? 'selected' : ''}
        >
          Sort by Birth Date DESC
        </button>

        <div>
          <label>Filter by Interests:</label>
          {['Gaming', 'Book Reading', 'Travelling', 'Listening Songs', 'Painting'].map(interest => (
            <label key={interest}>
              <input
                type="checkbox"
                value={interest}
                checked={selectedInterests.includes(interest)}
                onChange={() => handleInterestFilter(interest)}
              />
              {interest}
            </label>
          ))}
        </div>
      </div>


      <h2>Submitted Forms:</h2>
      {filteredForms.map((item, index) => (
        <div key={index} className="card-container">
          <div className="card" onClick={() => handleCardClick(index)}>
            <p><strong>Username:</strong> {item.name}</p>
            <p><strong>Birth Date:</strong> {item.birthdate}</p>
            <p><strong>Interests:</strong> {item.interests.join(", ")}</p>
            <button onClick={(e) => { e.stopPropagation(); handleCardClick(index); }}>View</button>
            <button onClick={(e) => { e.stopPropagation(); handleEdit(index); }}>Edit</button>
            <button onClick={(e) => { e.stopPropagation(); handleRemove(index); }}>Delete</button>
          </div>
        </div>
      ))}

      {modalData && (
        <div className="modal">
          <div className="modal-content">
            <h2>User Details</h2>
            <p><strong>Username:</strong> {modalData.name}</p>
            <p><strong>Email:</strong> {modalData.email}</p>
            <p><strong>Phone:</strong> {modalData.phone}</p>
            <p><strong>Birth Date:</strong> {modalData.birthdate}</p>
            <p><strong>Gender:</strong> {modalData.gender}</p>
            <p><strong>Interests:</strong> {modalData.interests.join(", ")}</p>
            <p><strong>Note:</strong> {modalData.note}</p>
            <p><strong>Created At:</strong> {modalData.createdAt}</p>
            <p><strong>Updated At:</strong> {modalData.updatedAt}</p>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
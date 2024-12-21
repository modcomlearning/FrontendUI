import React from 'react';

const AddLand = () => {
  return (
    <div>
      <h2>Add Land</h2>
      <form>
        {/* Add your form fields for adding land details */}
        <input type="text" placeholder="Land Name" required />
        <input type="text" placeholder="Location" required />
        <input type="number" placeholder="Area (in sqft)" required />
        <button type="submit">Add Land</button>
      </form>
    </div>
  );
};

export default AddLand;

import { useState } from "react";
import { useStore } from "@/lib/zustand/store";

interface EventFormProps {
  refreshEvents?: () => Promise<void>; // Optional refresh function
}

const EventForm: React.FC<EventFormProps> = ({ refreshEvents }) => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [lastDateOfRegistration, setLastDateOfRegistration] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [registrationLink, setRegistrationLink] = useState("");
  const [uploading, setUploading] = useState(false);
  const { setImage } = useStore();

  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", eventName || 'event-' + Date.now()); // Fallback name if eventName is empty

    const response = await fetch("/api/events/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await response.json();
    return data.imageUrl;
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImage(file);
      
      try {
        setUploading(true);
        // Upload the image immediately when selected
        const cloudinaryUrl = await uploadImage(file);
        setImageURL(cloudinaryUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload image. Please try again.");
      } finally {
        setUploading(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (uploading) {
      alert("Please wait for the image to finish uploading.");
      return;
    }
    try {
      await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventName,
          eventDate,
          lastDateOfRegistration,
          description,
          imageURL,
          registrationLink,
        }),
      });

      alert("Event added successfully!");

      // Clear form fields after submission
      setEventName("");
      setEventDate("");
      setLastDateOfRegistration("");
      setDescription("");
      setImageURL("");
      setRegistrationLink("");

      // Refresh events if the function is provided
      if (refreshEvents) {
        await refreshEvents();
      }
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white rounded shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
      {/* Event Name */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="eventName"
        >
          Event Name
        </label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="w-full px-3 py-2 border rounded text-black"
          required
        />
      </div>

      {/* Event Date */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="eventDate"
        >
          Event Date
        </label>
        <input
          type="date"
          id="eventDate"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="w-full px-3 py-2 border rounded text-black"
          required
        />
      </div>

      {/* Last Date of Registration */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="lastDateOfRegistration"
        >
          Last Date of Registration
        </label>
        <input
          type="date"
          id="lastDateOfRegistration"
          value={lastDateOfRegistration}
          onChange={(e) => setLastDateOfRegistration(e.target.value)}
          className="w-full px-3 py-2 border rounded text-black"
          required
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border rounded text-black"
          required
        ></textarea>
      </div>

      {/* Image Upload */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="image"
        >
          Event Image
        </label>
        <input
          type="file"
          id="image"
          onChange={handleImageChange}
          className="w-full px-3 py-2 border rounded text-black"
          accept="image/*"
          disabled={uploading}
        />
        {uploading && (
          <p className="text-blue-500 mt-2">Uploading image...</p>
        )}
        {imageURL && !uploading && (
          <img 
            src={imageURL} 
            alt="Event preview" 
            className="mt-2 max-w-full h-40 object-contain"
          />
        )}
      </div>

      {/* Registration Link */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="registrationLink"
        >
          Registration Link
        </label>
        <input
          type="url"
          id="registrationLink"
          value={registrationLink}
          onChange={(e) => setRegistrationLink(e.target.value)}
          className="w-full px-3 py-2 border rounded text-black"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
      >
        Add Event
      </button>
    </form>
  );
};

export default EventForm;

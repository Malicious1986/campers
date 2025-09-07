import "izitoast/dist/css/iziToast.min.css";

import iziToast from "izitoast";
import { useState } from "react";

import { Button } from "../../../components/button/Button";
import { Input } from "../../../components/input/Input";
import TextArea from "../../../components/textarea/TextArea";

const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const BookForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [comment, setComment] = useState("");

  const isFormValid = () => {
    return (
      name.length && email.length && validateEmail(email) && bookingDate.length
    );
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setBookingDate("");
    setComment("");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      iziToast.success({
        title: "Success",
        message: "Your booking has been submitted successfully!",
        position: "topCenter",
      });
      resetForm();
    }
  };
  return (
    <div className="px-12 py-11 border border-gray-light rounded-lg w-1/2 max-h-fit">
      <p className="text-xl font-semibold text-main">Book your campervan now</p>
      <p className="mb-6 text-gray text-[1rem] font-normal">
        Stay connected! We are always ready to help you.
      </p>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name*"
          value={name}
          onChange={(e) => setName(e.target.value.trim())}
        />
        <Input
          type="text"
          name="email"
          placeholder="Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
        />
        <Input
          type="date"
          name="bookingDate"
          placeholder="Booking Date"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value.trim())}
        />
        <TextArea
          name="comment"
          placeholder="Comment"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value.trim())}
        />
        <Button type="submit" className="self-center" disabled={!isFormValid()}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default BookForm;

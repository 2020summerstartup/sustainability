import React, { useState } from "react";
import Counter from "./counter";
import ActionCard from "../ActionCard";

import CountUp from "react-countup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";

import { withAuthorization } from "../Session";

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      <p>Check your progress! Congrats!</p>
      <button onClick={closeToast}>OK</button>
    </div>
  );
};

// Fun toast notifications
toast.configure();
const notify1 = () => {
  toast("You are amazing!", { autoClose: 8000 });
};
const notify2 = () => {
  toast(<CustomToast />, { autoClose: false });
};

Modal.setAppElement("#root");
// Text to display on the homepage
function HomePage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="base-container">
      <script>var user =</script>
      <h1>Home Sweet Home</h1>

      <h3>Testing:</h3>
      <h3>
        You have earned a total of&nbsp;
        {<CountUp start={0} end={100} duration={5}></CountUp>} points! &nbsp;
        <button onClick={notify1} className="button">Click me!</button>
        <button onClick={notify2} className="button">No, Click me!</button>
      </h3>
      <button onClick={() => setModalIsOpen(true)} className="button">
        Check Your Progress
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            // backgroundColor: 'papayawhip'
          },
          content: {
            color: "var(--theme)",
          },
        }}
      >
        <h2>Your Progress: </h2>
        <p>Points for Recycling Water Bottle: </p>
        <p>Points for Walking to the Village: </p>
        <h3>Total Points: </h3>
        <h1></h1>
        <div>
          <button onClick={() => setModalIsOpen(false)} className="button">Close</button>
        </div>
      </Modal>
      
      <ActionCard />
      <h3>Track your sustainable actions here!</h3>
      <span role="img" aria-label="recycle">
        ♻️
      </span>
      {/* Total points earned. TODO: Make this update automatically, instead of only on
    page reload. I'll deal with this later (I want to update this whole thing to use the new counter first). */}
      You have earned a total of{" "}
      {parseInt(localStorage.getItem("waterBottle")) +
        parseInt(localStorage.getItem("cmontWalk"))}{" "}
      points for your sustainable actions. Thank you!
      {/* Individual sustainable actions. */}
      <h3>
        <b>Recycle Water Bottle</b>
      </h3>
      <center>
        <Counter susAction={"waterBottle"} />
      </center>
      <h3>
        <b>Walk to Claremont Village</b>
      </h3>
      (Just not during the first two weeks on campus!)
      <center>
        <Counter susAction={"cmontWalk"} />
      </center>
    </div>
  );
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);

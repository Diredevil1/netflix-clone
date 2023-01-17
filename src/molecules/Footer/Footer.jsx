import React from "react";

const Footer = () => {
  const date = new Date();
  const activeTime = date.getFullYear();
  console.log(activeTime);
  return (
    <footer className="absolute bottom-0 flex flex-col w-full text-[grey] text-sm cursor-pointer">
      <section>
        <div></div>
        <div></div>
        <div></div>
      </section>
      <section className="flex justify-center gap-40">
        <div>
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie preferences</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </section>

      <div></div>
      <div>
        {activeTime - 26}-{activeTime}
      </div>
    </footer>
  );
};

export default Footer;

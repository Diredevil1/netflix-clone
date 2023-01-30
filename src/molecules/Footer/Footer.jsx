import React from "react";

const Footer = () => {
  const date = new Date();
  const activeTime = date.getFullYear();

  return (
    <footer className="bottom-0 flex flex-col w-full text-[grey] text-sm mt-11 cursor-pointer ">
      <section>
        <div></div>
        <div></div>
        <div></div>
      </section>
      <section className="flex justify-center gap-40 ">
        <div>
          <ul>
            <li className="hover:underline">Audio Description</li>
            <li className="hover:underline">Investor Relations</li>
            <li className="hover:underline">Legal Notices</li>

            <div className="text-sm py-5">
              {activeTime - 26}-{activeTime} Netflux, Inc.
            </div>
          </ul>
        </div>
        <div>
          <ul>
            <li className="hover:underline">Help Center</li>
            <li className="hover:underline">Jobs</li>
            <li>Cookie preferences</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="hover:underline">Gift Cards</li>
            <li className="hover:underline">Terms of Use</li>
            <li className="hover:underline">Corporate Information</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="hover:underline">Media Center</li>
            <li className="hover:underline">Privacy</li>
            <li className="hover:underline">Contact Us</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

import '../../styles/Footer.css'
const Footer = () =>  {
  return (
    <div className="footer-bottom">
      <div className="charan">
        <div className="sub-class container">
          <div className="us">
            <div className="sub-title">Subscribe us</div>
            <div className="sub-title2">
              Subscribe us for latest offer and deals
            </div>
          </div>
          <div className="sub-input">
            <input type="email" placeholder="Email" className="s-email" />
            <button type="submit" className="email-submit">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="ftr-cont">
        <div className="ftr">
          <ul className="footer-ul">
            <li className="li-footer">About</li>
            <li className="li-footer">Bloog</li>
            <li className="li-footer">Jobs</li>
            <li className="li-footer">Help</li>
            <li className="li-footer">API</li>
            <li className="li-footer">Privacy</li>
            <li className="li-footer">Terms</li>
            <li className="li-footer">Locations</li>
            <li className="li-footer">Foodie</li>
            <li className="li-footer">Threads</li>
          </ul>
        </div>
        <div className="ftr">
          <ul className="footer-ul">
            <li>Contact Uploading & Non-Users</li>
            <li>Meta Verified</li>
          </ul>
        </div>
        <div className="footer-part">
          <div className="lan1">English</div>
          <div className="from">@ 2025 Foodie from Charan</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

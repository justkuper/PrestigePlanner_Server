import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <section className="social-icons-wrapper d-flex flex-column flex-md-row justify-content-center my-3">
          {/* DANIEL'S SECTION */}
          <div className="d-flex flex-column align-items-center mx-md-2 transparent-bg">
            <a href="https://github.com/WickedDan" className="icon Daniel" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} flip size="3x" style={{ color: 'green' }} />
            </a>
            <a href="https://github.com/WickedDan" target="_blank" rel="noreferrer">
              <span className="d-inline-block mx-1 name">@WickedDan</span>
            </a>
          </div>
          {/* PARTHA'S SECTION */}
          <div className="d-flex flex-column align-items-center mx-md-2 transparent-bg">
            <a href="https://github.com/parthacrana" className="icon parthacrana" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} beat size="3x" style={{ color: 'purple' }} />
            </a>
            <a href="https://github.com/parthacrana" target="_blank" rel="noreferrer">
              <span className="d-inline-block mx-1 name">@parthacrana</span>
            </a>
          </div>
          {/* PREKSHA'S SECTION */}
          <div className="d-flex flex-column align-items-center mx-md-2 transparent-bg">
            <a href="https://github.com/Preksha2408" className="icon Preksha2408" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} flip size="3x" style={{ color: 'blue' }} />
            </a>
            <a href="https://github.com/Preksha2408" target="_blank" rel="noreferrer">
              <span className="d-inline-block mx-1 name">@Preksha2408</span>
            </a>
          </div>
          {/* KUPER'S SECTION */}
          <div className="d-flex flex-column align-items-center mx-md-2 transparent-bg">
            <a href="https://github.com/justkuper" className="icon justkuper" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} beat size="3x" style={{ color: 'yellow' }} />
            </a>
            <a href="https://github.com/justkuper" target="_blank" rel="noreferrer">
              <span className="d-inline-block mx-1 name">@justkuper</span>
            </a>
          </div>
          {/* JOHANNES SECTION */}
          <div className="d-flex flex-column align-items-center mx-md-2 transparent-bg">
            <a href="https://github.com/johannesmstoppler" className="icon johannesmstoppler" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} bounce size="3x" style={{ color: 'orange' }} />
            </a>
            <a href="https://github.com/johannesmstoppler" target="_blank" rel="noreferrer">
              <span className="d-inline-block mx-1 name">@johannesmstoppler</span>
            </a>
          </div>
        </section>

        {/* Reviews Button */}
        <button 
          className="btn btn-primary" 
          style={{ position: 'fixed', bottom: '20px', left: '20px' }} 
          onClick={() => setShowModal(true)}
        >
          Leave a Review
        </button>

        {/* Reviews Modal */}
        {showModal && (
          <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Leave a Review</h5>
                  <button type="button" className="close" onClick={() => setShowModal(false)}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="star-rating">
                    {[...Array(5)].map((star, index) => {
                      const ratingValue = index + 1;
                      return (
                        <label key={index}>
                          <input 
                            type="radio" 
                            name="rating" 
                            value={ratingValue} 
                            onClick={() => handleRating(ratingValue)} 
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            className="star"
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            size="2x"
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(rating)}
                          />
                        </label>
                      );
                    })}
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="review">Review Description:</label>
                    <textarea 
                      className="form-control" 
                      id="review" 
                      rows="3" 
                      placeholder="Write your review here..."
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                  <button type="button" className="btn btn-primary">Submit Review</button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Share Icons */}
        
        <section className="footer" id="footer">
          <section className="form-footer">
            <h5 className="text-center mb-2">Designed by Fab Five  </h5>
            <p className="text-center mb-0">
              <h6>&copy; {new Date().getFullYear()} All rights reserved.</h6>
            </p>
            
          </section>
          <section className="share-icon">
          <a href="https://wa.me/?text=Check%20out%20Prestigle%20Planners!%20https://prestigleplanners.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="3x" style={{ color: 'green', marginRight: '20px' }} />
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://prestigleplanners.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="3x" style={{ color: 'blue', marginRight: '20px' }} />
          </a>
          <a href="https://www.instagram.com/?url=https://prestigleplanners.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="3x" style={{ color: 'purple' }} />
          </a>
        </section>
        </section>
        

      </div>
    </footer>
  );
};

export default Footer;

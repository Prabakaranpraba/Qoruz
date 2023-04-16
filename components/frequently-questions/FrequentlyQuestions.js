import React from "react";
import Style from "./Frequently.module.css";

export const FrequentlyQuestions = () => {
  return (
    <>
      <div className="frequently py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className={Style.heading}>Frequently Asked Questions</h3>
              <p className={`${Style.content}  py-3`}>
                Everything you need to know about the product <br></br>and how
                it works.
                <b>Can&apos;t find an answer?</b>
              </p>
            </div>
            <div className="col-lg-6">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className={`${Style.question} accordion-button collapsed`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Why do companies use influencers?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className={Style.answer}>
                        Influencers nurture strong, personal connections with
                        their followers that brands cannot achieve today. The
                        bigger the brand, the harder it is to be close and
                        personable with your followers.
                      </p>
                      <p className={Style.answer}>
                        Influencers have the ability to sway the purchasing
                        decisions of their followers due to their expertise,
                        charisma, or authority. By also letting followers into
                        their lives, influencers manage to build powerful
                        relationships based on trust.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className={`${Style.question} accordion-button collapsed`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      How to start influencer marketing?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className={Style.answer}>
                        Influencers nurture strong, personal connections with
                        their followers that brands cannot achieve today. The
                        bigger the brand, the harder it is to be close and
                        personable with your followers.
                      </p>
                      <p className={Style.answer}>
                        Influencers have the ability to sway the purchasing
                        decisions of their followers due to their expertise,
                        charisma, or authority. By also letting followers into
                        their lives, influencers manage to build powerful
                        relationships based on trust.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className={`${Style.question} accordion-button collapsed`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      How to reach out to influencers?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className={Style.answer}>
                        Influencers nurture strong, personal connections with
                        their followers that brands cannot achieve today. The
                        bigger the brand, the harder it is to be close and
                        personable with your followers.
                      </p>
                      <p className={Style.answer}>
                        Influencers have the ability to sway the purchasing
                        decisions of their followers due to their expertise,
                        charisma, or authority. By also letting followers into
                        their lives, influencers manage to build powerful
                        relationships based on trust.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className={`${Style.question} accordion-button collapsed`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      What does the free version include?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-collapseFour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className={Style.answer}>
                        Influencers nurture strong, personal connections with
                        their followers that brands cannot achieve today. The
                        bigger the brand, the harder it is to be close and
                        personable with your followers.
                      </p>
                      <p className={Style.answer}>
                        Influencers have the ability to sway the purchasing
                        decisions of their followers due to their expertise,
                        charisma, or authority. By also letting followers into
                        their lives, influencers manage to build powerful
                        relationships based on trust.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

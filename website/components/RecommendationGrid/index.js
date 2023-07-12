// pages/Recommendations.js
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchRecommendations } from "../../../store/actions/recommendationActions";
import styles from "../../../styles/home.module.css";
import Link from "next/link";

const RecommendationGrid = ({
  recommendations,
  loading,
  error,
  fetchRecommendations,
}) => {
  useEffect(() => {
    fetchRecommendations();
  }, [fetchRecommendations]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const recommendationData = recommendations.Recommendations || [];

  return (
    <>
      {recommendationData.length > 0 ? (
        <>
          {recommendationData.length > 5 ? (
            <>
              {/* Events Zone */}
              <div className={`container-fluid`}>
                <div className={`row`}>
                  {/* football match */}

                  <div className={`col-lg-4 ${styles.landingfirstcard}`}>
                    <Link href="/infopage" className="text-decoration-none">
                      <div className={styles.landingimage1}>
                        <div className={`col-lg-12 ${styles.landingtext}`}>
                          <p
                            className={`mb-0 letter-spac ${styles.letterspac}`}
                          >
                            Event
                          </p>
                          <p
                            className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                          >
                            {recommendationData[0].title}
                          </p>
                          <p className={`mb-0 m1`}>
                            {recommendationData[1].region}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  {/* 2tour */}
                  <div className={`col-lg-5`}>
                    <div className={`row`}>
                      <div className={`col-lg-12  ${styles.luxuryrow}`}>
                        <Link href="/infopage" className="text-decoration-none">
                          <div
                            className={`${styles.landingimage2} d-flex align-center light-dark`}
                          >
                            <div
                              className={`col-lg-12 ${styles.landingtextmidgrid}`}
                            >
                              <p
                                className={`mb-0 letter-spac ${styles.letterspac}`}
                              >
                                ITINERARY
                              </p>
                              <p
                                className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                              >
                                {recommendationData[2].title}
                              </p>
                              <p className={`mb-0`}>
                                {recommendationData[2].region}
                              </p>
                            </div>
                          </div>
                        </Link>

                        <Link href="/infopage" className="text-decoration-none">
                          <div
                            className={`${styles.landingimage3} d-flex align-center my-4 light-dark`}
                          >
                            <div
                              className={`col-lg-12 ${styles.landingtextmidgrid}`}
                            >
                              <p
                                className={`mb-0 letter-spac ${styles.letterspac}`}
                              >
                                ITINERARY
                              </p>
                              <p
                                className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                              >
                                {recommendationData[3].title}
                              </p>
                              <p className={`mb-0 m1`}>
                                {recommendationData[1].region}
                              </p>
                            </div>
                          </div>
                        </Link>

                        <Link href="/infopage" className="text-decoration-none">
                          <div
                            className={`${styles.landingimage4} d-flex align-center light-dark`}
                          >
                            <div
                              className={`col-lg-12 ${styles.landingtextmidgrid}`}
                            >
                              <p
                                className={`mb-0 letter-spac ${styles.letterspac}`}
                              >
                                ITINERARY
                              </p>
                              <p
                                className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                              >
                                {recommendationData[4].title}
                              </p>
                              <p className={`mb-0 m1`}>
                                {recommendationData[4].region}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* 3rd tour */}
                  <div className={`col-lg-3`}>
                    <div className={`row`}>
                      <Link
                        href="/infopage"
                        className="text-decoration-none m-0 p-0"
                      >
                        <div className={`col-lg-12 p-0`}>
                          <div
                            className={`${styles.landingimage5} d-flex align-center p-0 m-0`}
                          >
                            <div
                              className={`col-lg-12 mb-0 p-0 ${styles.landingtextmidgrid} light-dark d-flex align-center flex-column flex-center`}
                              style={{ height: "100%", borderRadius: "55px" }}
                            >
                              <p
                                className={`mb-0 letter-spac ${styles.letterspac}`}
                              >
                                EVENT
                              </p>
                              <p
                                className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                              >
                                {recommendationData[5].title}
                              </p>
                              <p className={`mb-0 m1`}>
                                {recommendationData[5].region}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/infopage"
                        className="text-decoration-none m-0 p-0"
                      >
                        <div className={`${styles.landingimage6} my-4`}>
                          <div
                            className={`col-lg-12 ${styles.landingtextinalgrid}`}
                          >
                            <p
                              className={`mb-0 letter-spac ${styles.letterspac}`}
                            >
                              ITINERARY
                            </p>
                            <p
                              className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                            >
                              Tokyo Night Run
                            </p>
                            <p className={`mb-0 m1`}>Paris, France</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Events Zone */}
              <div className={`container-fluid`}>
                <div className={`row`}>
                  {/* football match */}

                  {/* 2tour */}
                  <div className={`col-lg-12`}>
                    <div className={`row`}>
                      <div
                        className={`col-lg-12  ${styles.luxuryrow} d-flex align-items-center`}
                      >
                        {recommendationData.map((recommendation) => (
                          <Link
                            key={recommendation.id}
                            href="/infopage"
                            className="text-decoration-none"
                          >
                            <div
                              className={`${styles.landingimage2} d-flex align-center light-dark`}
                            >
                              <div
                                className={`col-lg-12 ${styles.landingtextmidgrid}`}
                              >
                                <p
                                  className={`mb-0 letter-spac ${styles.letterspac}`}
                                >
                                  EVENT
                                </p>
                                <p
                                  className={`mb-0 ${styles.matchheader} mt-1 white fw-600`}
                                >
                                  {recommendation.title}
                                </p>
                                <p className={`mb-0`}>Paris, France</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <p>No recommendations available.</p>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  recommendations: state.recommendation.recommendations,
  loading: state.recommendation.loading,
  error: state.recommendation.error,
});

const mapDispatchToProps = {
  fetchRecommendations,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecommendationGrid);